import MyBtn from "../Buttons/MyBtn";
import useStore from "../../store/store";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useAuthStore } from "../../store/auth";
import { Link } from "react-router-dom";
import DetailedCard from "./DetailedCard";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import axios from "axios";

function ProductCard({
  name,
  description,
  image,
  price,
  rating,
  weight,
  stock,
  category,
  _id,
}) {
  const addToCart = useStore((state) => state.addToCart);
  const product = {
    name,
    description,
    image,
    price,
    rating,
    weight,
    stock,
    category,
    _id,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [detailedCard, setDetailedCard] = useState(false);
  const handleClick = () => {
    setDetailedCard(true);
  };
  const closeDetailedCard = () => setDetailedCard(false);

  let { favorites } = useStore();
  const { token, user } = useAuthStore();
  const addToFavorites = useStore((state) => state.addToFavorites);
  const removeFromFavorites = useStore((state) => state.removeFromFavorites);

  if (!token) {
    favorites = [];
  }

  const API_URL = import.meta.env.VITE_API_URL;

  const saveFavorites = async (product, user) => {
    const favoritesData = {
      product,
      user,
    };
    if (token) {
      try {
        await axios.post(`${API_URL}/user/favorites/add`, favoritesData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message == "Token expired"
        ) {
          alert("Token expired. Please login again");
        }
      }
    } else {
      alert("Please login to save favorites");
    }
  };

  const deleteFavorites = async (product, user) => {
    const favoritesData = {
      product,
      user,
    };
    try {
      await axios.put(`${API_URL}/user/favorites/delete`, favoritesData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message == "Token expired"
      ) {
        alert("Token expired. Please login again");
      }
    }
  };

  const toggleFavorite = () => {
    if (favorites.map((item) => item._id).includes(product._id)) {
      removeFromFavorites(product);
      deleteFavorites(product, user); // remove from DB
    } else {
      addToFavorites(product);
      saveFavorites(product, user); // save to DB
    }
  };

  return (
    <>
      <div className="bg-white lg:w-64 w-72 h-460 border-solid border-2 flex flex-col justify-evenly hover:cursor-pointer hover:shadow-xl rounded-xl">
        <div className="flex justify-end">
          <div
            onClick={toggleFavorite}
            className="inline-flex w-12 h-12 justify-center items-center "
          >
            {favorites.map((item) => item._id).includes(product._id) ? (
              <MdFavorite size={30} color="red" />
            ) : (
              <MdFavoriteBorder size={30} color="gray" />
            )}
          </div>
        </div>
        <div className=" overflow-hidden w-50 h-50 flex justify-center items-center pl-8 pr-8">
          <img
            onClick={handleClick}
            className="object-cover rounded-sm"
            src={`/img/${image[0]}`}
            alt={image}
          />
        </div>
        <ul onClick={handleClick} className="cart_ul pb-2 border-t-2 mx-8 max-h-40 ">
          <li className="font-bold">{name}</li>
          <li className="overflow-hidden text-ellipsis">{description}</li>
          <li className="text-red-500 font-bold">Price: $ {price}</li>
          <li>Rating: {rating}</li>
        </ul>
        <div className="flex justify-center gap-3  pb-4">
          <MyBtn
            className="w-2/3"
            onClick={() => {
              openModal();
              addToCart(product);
            }}
          >
            Add to Cart
          </MyBtn>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="pt-10 text-xl font-bold">Confirmation</h2>
        <p className="p-10 text-xl  ">{name} added to cart!</p>
        <div className="flex gap-10 justify-center">
          <MyBtn onClick={closeModal}>Continue Shopping</MyBtn>
          <MyBtn>
            <Link to="/shopping-cart">Go to Cart</Link>
          </MyBtn>
        </div>
      </Modal>

      <Modal isOpen={detailedCard} onClose={closeDetailedCard}>
        <DetailedCard
          name={name}
          description={description}
          image={image}
          price={price}
          rating={rating}
          weight={weight}
          stock={stock}
          closeModal={closeDetailedCard}
          addToCart={addToCart}
          product={product}
        />
      </Modal>
    </>
  );
}

export default ProductCard;
