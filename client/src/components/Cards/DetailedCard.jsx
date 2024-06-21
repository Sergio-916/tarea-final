import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyBtn from "../Buttons/MyBtn";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import useStore from "../../store/store";
import { useAuthStore } from "../../store/auth";


function DetailedCard({
  name,
  description,
  image,
  price,
  rating,
  weight,
  stock,
  closeModal,
  addToCart,
  product,
}) {
  const [currentImage, setCurrentImage] = useState(image[0]);
  let { favorites } = useStore();
  const { token } = useAuthStore();

  if (!token) {
    favorites = [];
   }
  

  const addToFavorites = useStore((state) => state.addToFavorites);
  const removeFromFavorites = useStore((state) => state.removeFromFavorites);
  const toggleFavorite = () => {
    if (favorites.map((item) => item._id).includes(product._id)) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  
  return (
    <>
      <div className="bg-white w-full border-2 border-gray-300 flex flex-col  hover:shadow-xl rounded-xl">
     <div className="relative">
      <div onClick={toggleFavorite} className="absolute w-8 h-8 top-1 right-9 ">
          {favorites.map((item) => item._id).includes(product._id) ? (
            <MdFavorite size={30} color="red" />
          ) : (
            <MdFavoriteBorder size={30} color="gray" />
          )}
        </div>
     </div>
        <div className="flex sm:flex-row flex-col">
          <div className="sm:w-2/3 flex flex-col items-center p-4">
            <img
              className="w-full h-80 object-cover rounded-t-xl mt-6 sm:mt-0"
              src={`/img/${currentImage}`}
              alt={name}
            />
            <div className="flex justify-center gap-2 pt-4">
              {image.map((img, index) => (
                <img
                  key={index}
                  className="w-1/4 h-24 object-cover rounded cursor-pointer border-2 border-gray-300"
                  src={`/img/${img}`}
                  alt={`${name} ${index + 1}`}
                  onClick={() => setCurrentImage(img)}
                />
              ))}
            </div>
          </div>
          <div className=" sm:border-l-2 border-t-2 sm:w-1/3 flex flex-col justify-evenly items-center p-4 rounded-r-xl">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-sm mb-2">{description}</p>
            <p className="text-lg text-red-500 font-bold mb-2">${price}</p>
            <p className="text-sm mb-2">Rating: {rating}</p>
            <p className="text-sm mb-2">Weight: {weight}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <div className="flex w-2/3 gap-4 justify-center pt-4">
        <MyBtn onClick={() => addToCart(product)} className="flex-1">
          Add to Cart
        </MyBtn>

        <MyBtn  onClick={() => closeModal()} className="flex-1">
          Continue Shopping
        </MyBtn>
      </div>
      </div>
    </>
  );
}

export default DetailedCard;
