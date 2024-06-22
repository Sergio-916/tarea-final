//import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/Cards/ProductCard";
import { useAuthStore } from "../store/auth";
import  useStore  from "../store/store"
import { useEffect } from "react";


function Favorites() {
  
  const { favorites } = useStore();

  const { user, token } = useAuthStore();

  const API_URL = import.meta.env.VITE_API_URL;

  // request favorites list from DB and load when login
  const requestFavorites = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/user/favorites/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const setFavorites = useStore.getState().setFavorites;
      setFavorites(response.data); // update state with favorites list from DB
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message == "Token expired") {
        alert('Token expired. Please login again')
       }
    }
  };

  useEffect(() => {
    if (user && token) {
      requestFavorites();
    }
  }, [user, token]);

  return (
    <>
    <div className="container mx-auto">

   
      <h1 className="title_h1 lg:mb-10 mb-6">{user.username} favorites </h1>

      {(!token) ?  (<p className="text-lg p-20">Please register to see your favorites</p>) :(
favorites.length > 0 ? (
  <ul className="flex flex-wrap gap-8 justify-center lg:justify-evenly">
    {favorites.map((item) => (
      <li key={item._id}>
        <ProductCard
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
          rating={item.rating}
          weight={item.weight}
          stock={item.stock}
          category={item.category}
          _id={item._id}
       
        />
      </li>
    ))}
  </ul>
) : (
  <p className="text-lg p-20">No favorites products</p>
)
      ) }
   
          
     

        </div>
    </>
  );
}

export default Favorites;
