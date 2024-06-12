import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import BurgerButton from "../BurgerButton";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const menuRef = useRef(null);

  const [isopen, setIsOpen] = useState(false);

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
      <div className="menu text-slate-100 sm:text-xl text-lg bg-title-color opacity-75  font-bold" ref={menuRef}>
        <div className="menu__logo">Logo</div>
        <ul className={`menu__left ${isopen ? "menu__mobile" : ""}`}>
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
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="shopping-cart"><FaShoppingCart size={25} /></Link>
          </li>
        </ul>
        <div className="mobile">
          <BurgerButton isopen={isopen ? "true" : undefined} handleBurgerClick={handleBurgerClick} />{" "}
        </div>
      </div>
    </>
  );

  return (
    <>
      <nav>{menu}</nav>
    </>
  );
}

export default Header;
