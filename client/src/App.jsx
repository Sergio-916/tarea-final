import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


function App() {

  //recieving data from DB
  const [cakeData, setCakesData] = useState([]);
  const [breadData, setBreadData] = useState([]);
  const [bakeryData, setBakeryData] = useState([]);

  // create context
  const data = {
    cakeData,
    breadData,
    bakeryData
  }
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3050";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCake = await axios.get(`${API_URL}/product/cakes`);
        setCakesData(responseCake.data);
        const responseBread = await axios.get(`${API_URL}/product/bread`);
        setBreadData(responseBread.data);
        const responseBakry = await axios.get(`${API_URL}/product/bakery`);
        setBakeryData(responseBakry.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  


  return (
    <>
      <Header />
      <main>
        <Outlet context={data} />
      </main>
      <Footer />
    </>
  );
}

export default App;
