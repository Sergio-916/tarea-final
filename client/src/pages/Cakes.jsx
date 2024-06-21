import React from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/Cards/ProductCard";

function Cakes() {
  const context = useOutletContext();
  const data = context.cakeData;

  return (
    <>
      <div className="container mx-auto">
        <article className="mb-10">
          <h1 className="title_h1">Our Outstanding Cakes</h1>
        </article>
        {data.length > 0 ? (
          <ul className="flex flex-wrap gap-8 gap-y-10 justify-center lg:justify-evenly ">
            {data.map((item) => (
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
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Cakes;
