import React from "react";
import { Link } from "react-router-dom";
import whatsapp from "/img/WhatsAppButtonGreenMedium.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contacts() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-title-color">
        Contacts
      </h1>

      <div className="flex flex-col lg:flex-row ">
        <div className="mb-4 lg:w-1/2 p-8">
          <h2 className="text-xl lg:text-2xl text-gray-700 font-bold mb-8 ">
            Phone Numbers:
          </h2>
          <div className="flex justify-center">
            <ul className="space-y-3 lg:text-xl text-left">
              <li className="flex items-center gap-3">
                <BsFillTelephoneFill /> +1234567890
              </li>
              <li className="flex items-center gap-3">
                <BsFillTelephoneFill /> +0987654321
              </li>
              <li className="flex items-center gap-3">
                <MdEmail /> info@sergio-bakery.com
              </li>
              <li className="py-6">
                <Link to="http://www.whatsapp.com/">
                  <img className="w-60" src={whatsapp} alt="whatsapp" />
                </Link>
              </li>
            </ul>{" "}
          </div>
        </div>

        <div className="lg:w-1/2 p-8">
          <h2 className="text-xl lg:text-2xl text-gray-700 font-bold mb-2">
            Contact Form:
          </h2>
          <form>
            <label htmlFor="name" className="block text-left  mb-3">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label htmlFor="email" className="block text-left mb-3 ">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label htmlFor="message" className="block text-left mb-3 ">
              Message:
              <textarea
                id="message"
                name="message"
                className="border rounded-md p-2 w-full"
                rows="4"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 p-3 rounded w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
