import React from "react";
import buildingImage from "/img/bakery.jpg";
import millImage from "/img/mill.jpg";
import ownerImage from "/img/owner.jpg";
 
function About() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:my-8  text-title-color">About Our Bakery</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 lg:p-8">
            <img src={buildingImage} alt="Building" className="w-full h-auto rounded-lg mb-4 " />
            <p className="text-sm text-gray-500">Our first building, established in 1920</p>
            <p className="my-8 text-lg lg:text-xl">
              To ensure the highest quality flour for our bread, Juan built a mill next to the bakery. The mill,
              depicted in the photo above, was powered by a water wheel and produced finely ground flour that became
              the hallmark of our bakery's products.
            </p>
          </div>
          <div className="md:w-1/2 lg:p-8 mb-6">
            <p className="my-8 lg:my-12 text-lg  lg:text-xl">
              Our bakery has a long and rich history. It was founded in 1920 by Juan Perez, a skilled baker from
              Argentina. The original building, shown in the photo, was a small but cozy place where Juan baked his
              delicious bread using traditional techniques passed down through generations.
            </p>
            <img src={millImage} alt="Mill" className="w-full h-auto rounded-lg mb-4 " />
            <p className="text-sm text-gray-500">Our original mill</p>
           
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 lg:p-8">
            <img src={ownerImage} alt="Owner" className="w-full h-auto rounded-lg mb-4 " />
            <p className="text-sm text-gray-500">Juan Perez, the founder</p>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg my-8 lg:p-8 lg:text-xl">
              Juan Perez was not only a skilled baker but also a visionary entrepreneur. He introduced innovative
              techniques and recipes that quickly made our bakery a favorite among locals. Today, we continue Juan's
              legacy by using the finest ingredients and maintaining the highest standards of quality and tradition.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
