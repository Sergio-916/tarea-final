import CategoriesCard from "../components/Categories-card/CategoriesCard";
import { FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="homepage">
        <main className="main">
          <h1 className="title font-bold m-6">Sergio Bakery</h1>
          <p className="lg:text-3xl text-xl">
            Number 1 online shop of fresh bread and baked goods
          </p>
        </main>
      </div>
      <div className="banner bg-title-color opacity-75"></div>
      <div className="container mx-auto">
      
        <CategoriesCard />
        <div className="border-t-2 border-gray-300 mx-10 m-10" ></div>

        <h1 className="font-bold text-2xl lg:text-4xl text-center text-orange-500 ">
          Our Advantages
        </h1>
        <div className="flex justify-center">
          <ul className="p-6 space-y-2 text-center text-lg">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Own network of
              bakeries
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Traditional
              recipes
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Best ingredients
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Quality control
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Fast and reliable delivery
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
