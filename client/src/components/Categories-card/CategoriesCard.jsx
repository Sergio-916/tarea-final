import { Link } from "react-router-dom";
function CategoriesCard() {
  return (
    <>
      
        <h1 className="font-bold text-2xl lg:text-4xl text-center text-orange-500">
          Our products
        </h1>
        <div className="mt-6 px-6 lg:px-0   flex justify-between gap-5 flex-col lg:flex-row ">
          <Link className="flex-1" to="/shop/bread">
            <div>
              <img src="/img/sourdough_bread_3.jpg" />
              <article>
                <p className="text-orange-500 text-2xl font-bold pt-5">Bread</p>
                <p className="text-gray-500 hidden lg:block text-lg pt-5">
                  We take pride in offering 
                  bread that is both delicious and healthy. Our bakery adheres
                  to the finest traditions, ensuring each loaf is crafted with
                  care and expertise. We use the highest quality ingredients to
                  bring you bread that not only tastes great but also
                  contributes to your well-being. Experience the warmth and
                  goodness of our freshly baked bread, made to perfection in our
                  own bakery. Enjoy the blend of flavor, tradition, and health
                  in every bite.
                </p>
              </article>
            </div>
          </Link>
          <Link className="flex-1" to="/shop/bakery">
            <div className="">
              <img src="/img/croissant_3.jpg" />
              <article>
                <p className="text-orange-500 text-2xl font-bold pt-5">Bakery</p>
                <p className="text-gray-500 hidden lg:block text-lg pt-5">
                Indulge in our delectable baked goods, crafted with love and care. From flaky croissants to heavenly pastries, each bite is a delightful journey of flavor. Our bakery follows time-honored traditions, ensuring every treat is both delicious and healthy. Explore our selection and discover the perfect pastry to sweeten your day!
                </p>
              </article>
            </div>
          </Link>
          <Link className="flex-1" to="/shop/cakes">
            <div className="">
              <img src="/img/vanilla_cupcake_3.jpg" />
              <article>
                <p className="text-orange-500 text-2xl font-bold pt-5"> Cakes</p>
                <p className="text-gray-500 hidden lg:block text-lg pt-5">
                Delight in our exquisite desserts, meticulously crafted to satisfy your sweetest cravings. From rich, creamy cakes to delicate tarts, each dessert is a masterpiece of flavor and texture. Our bakery takes pride in using the finest ingredients, ensuring every bite is a moment of pure indulgence. Treat yourself to our selection of desserts and elevate your taste experience to new heights!
                </p>
              </article>
            </div>
          </Link>
        </div>
  
    </>
  );
}

export default CategoriesCard;
