import React, { useState, useEffect } from "react";
import imgLogo from "../../images/logo-slogan.png";
import imgLogoSinSlogan from "../../images/logo-sin-slogan.png";
import "./NavBar.css";

/*
menuItems: contains the items to display in the menu
name: value to be shown in menu
value: href value for link
*/
const menuItems = [
  { name: "About us", value: "about" },
  { name: "Our Product", value: "product" },
  { name: "Our Clients", value: "clients" },
  { name: "Contact", value: "contact" },
];

const NavBar = () => {
  const initialHeight = 130;
  const finalHeight = 60;
  const transparent = "rgba(255, 255, 255, 0.8)";
  const [navbarStyle, setNavbarStyle] = useState({
    height: window.innerWidth <= 768 ? finalHeight : initialHeight,
    backgroundColor: window.innerWidth <= 768 ? transparent : "transparent",
    backdropFilter: window.innerWidth <= 768 ? "blur(4px)" : "none",
  });
  const [logoImage, setLogoImage] = useState(
    window.innerWidth <= 768 ? imgLogoSinSlogan : imgLogo
  );
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setNavbarStyle({
        height: finalHeight,
        backgroundColor: transparent,
        backdropFilter: "blur(4px)",
      });

      setLogoImage(imgLogoSinSlogan);
    } else {
      setNavbarStyle({
        height: window.innerWidth <= 768 ? finalHeight : initialHeight,
        backgroundColor: window.innerWidth <= 768 ? transparent : "transparent",
        backdropFilter: "none",
      });
      setLogoImage(window.innerWidth <= 768 ? imgLogoSinSlogan : imgLogo);
    }
  };

  return (
    <nav style={navbarStyle} className="navigation">
      <div className="logo">
        <img src={logoImage} alt="Pastor" />
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                className="text-xs xl:text-base 2xl:text-xl"
                href={`#${item.value}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
