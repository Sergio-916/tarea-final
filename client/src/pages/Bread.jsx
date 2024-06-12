import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/Cards/ProductCard";

function Bread() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3050/product/bread");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container xl-auto">
        <h1 className="title_h1"> Bread</h1>

        <header className="App-header">
          {data.length > 0 ? (
            <ul className="flex flex-wrap justify-between gap-8">
              {data.map((item) => (
                <li key={item._id}>
                  <ProductCard
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </header>
      </div>
    </>
  );
}

export default Bread;
