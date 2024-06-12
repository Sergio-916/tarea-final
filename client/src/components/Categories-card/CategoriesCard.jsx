import { Link } from "react-router-dom";
function CategoriesCard() {
  return (
    <>
      <h1 className="m-10 uppercase font-bold text-2xl text-center text-title-color">
        Our products
      </h1>
      <div className="product-categories  mb-20 flex justify-between gap-5 flex-col md:flex-row ">
        <Link to ='/shop/bread'><div>
          <img src="/img/sourdough_bread_3.jpg" />
          <p>Bread</p>
        </div>
        </Link>
        <Link to ='/shop/bakery'><div>
          <img src="/img/croissant_3.jpg" />
          <p>Bakery</p>
        </div>
        </Link>
        <Link to ='/shop/cakes'><div>
          <img src="/img/vanilla_cupcake_3.jpg" />
          <p> Cakes</p>
        </div>
        </Link>
      </div>
    </>
  );
}

export default CategoriesCard;
