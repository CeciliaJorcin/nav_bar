import React, { useState, useEffect } from "react";
import "./NavBar.css";
import {
  menuItems,
  navBarInitialHeight,
  navBarFinalHeight,
  navBarInitialMobileHeight,
  navBarFinalMobileHeight,
  transparency,
  imgLogo,
  imgLogoSinSlogan,
  backdropFilter,
} from "./config";

const NavBar = () => {
  const initialHeight =
    window.innerWidth <= 768 ? navBarInitialMobileHeight : navBarInitialHeight;
  const finalHeight =
    window.innerWidth <= 768 ? navBarFinalMobileHeight : navBarFinalHeight;

  const initialStyles = {
    height: initialHeight,
    backgroundColor: window.innerWidth <= 768 ? transparency : "transparent",
    backdropFilter: window.innerWidth <= 768 ? backdropFilter : "none",
  };

  const [navbarStyle, setNavbarStyle] = useState(initialStyles);
  const initialLogoImage =
    window.innerWidth <= 768 ? imgLogoSinSlogan : imgLogo;
  const [logoImage, setLogoImage] = useState(initialLogoImage);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarStyle({
          height: finalHeight,
          backgroundColor: transparency,
          backdropFilter: backdropFilter,
        });
        setLogoImage(imgLogoSinSlogan);
      } else {
        setNavbarStyle(initialStyles);
        setLogoImage(initialLogoImage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
      <div className={`navigation-menu ${isNavExpanded && "expanded"}`}>
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
