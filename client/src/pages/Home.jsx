import CategoriesCard from "../components/Categories-card/CategoriesCard";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="homepage">
        <main className="main">
          <h1 className="title font-bold m-6">Sergio Bakery</h1>
          <p >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            cupiditate ut repellendus maiores soluta. Ex doloremque ullam enim
            molestiae optio veritatis ea, voluptate impedit iusto ab eos modi
            laudantium neque?
          </p>
        </main>
      </div>
      <div className="banner bg-title-color opacity-75">
        Number 1 online shop of fresh bread and baked goods
      </div>
      <div className="container">
        <CategoriesCard />

        <h1 className="text-title-color uppercase m-20 mt-40 font-bold text-2xl text-center text-red-500">
          Our locations
        </h1>
        <div className="flex justify-center">
          <div className="w-1/2 h-80 bg-cyan-400"></div>
        </div>
      </div>


    </>
  );
}

export default Home;
