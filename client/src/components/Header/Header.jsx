import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import BurgerButton from "../BurgerButton";
import { FaShoppingCart } from "react-icons/fa";
import useStore from "../../store/store";
import { useAuthStore } from "../../store/auth";
import Logout from "../Logout";
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import logo from "/img/logo-bg.png"


function Header() {
  const menuRef = useRef(null);
  const cart = useStore((state) => state.cart);

  const [isopen, setIsOpen] = useState(false);

  const { token } = useAuthStore();

  const messageFavorites = () => {
    alert("Please login to see your favorites");
  };

  

  //logout modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleBurgerClick = () => {
    setIsOpen(!isopen);
  };

  const menu = (
    <>
      <div
        className="menu text-slate-100 sm:text-gl text-md bg-title-color opacity-75  font-bold"
        ref={menuRef}
      >
        <div className="menu__logo">
          <Link t="/"><img className="w-20 h-20" src={logo} alt="logo" /></Link>{" "}
        </div>
        <ul
          onClick={() => setIsOpen(false)}
          className={`menu__left ${isopen ? "menu__mobile" : ""}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <ul className="menu__right">
          <li>
            {!token ? (
              <Link to="/login">
                <IoLogInOutline size={30} />
              </Link>
            ) : (
              <span className="cursor-pointer" onClick={() => openModal()}>
                <IoLogOutOutline size={30} />
              </span>
            )}
          </li>
          <li>
            {" "}
            {token ? (
              <Link to="favorites">
                <MdFavoriteBorder size={30} />
              </Link>
            ) : (
              <span onClick={messageFavorites} className="cursor-pointer">
                <MdFavoriteBorder size={30} />
              </span>
            )}
          </li>
          <li className="relative">
            <Link to="shopping-cart">
              {cart.length > 0 ? (
                <>
                  <div className="relative flex justify-center items-center left-4  ">
                    <div className="absolute">
                      <FaShoppingCart size={30} />
                    </div>
                    <div className="absolute w-4 h-4 rounded-full border-2-solid bottom-0.5 left-0.5">
                      <span className="text-white text-xs flex items-center justify-center rounded-full bg-gray-800 ">
                        {cart.length}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <FaShoppingCart size={25} />
              )}
            </Link>
          </li>
        </ul>
        <div className="mobile">
          <BurgerButton
            isopen={isopen ? "true" : undefined}
            handleBurgerClick={handleBurgerClick}
          />{" "}
        </div>
      </div>
    </>
  );

  return (
    <>
      <nav>{menu}</nav>
      {isModalOpen && (
        <Logout isModalOpen={isModalOpen} closeModal={closeModal} />
      )}
    </>
  );
}

export default Header;
