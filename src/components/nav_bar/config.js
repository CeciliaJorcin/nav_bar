/* CONFIGURATION FILE */
import imgSlogan from "../../images/logo-slogan.png";
import imgNoSlogan from "../../images/logo-sin-slogan.png";

/*
menuItems: contains the items to display in the menu
name: value to be shown in menu
value: href value for link
*/
export const menuItems = [
  { name: "About us", value: "about" },
  { name: "Our Product", value: "product" },
  { name: "Our Clients", value: "clients" },
  { name: "Contact", value: "contact" },
];
export const mainColor =
  "rgb(102, 45, 145)"; /* same value in NavBar.css "--main-color" */
/* Nav Bar Settings */
export const navBarInitialHeight = 130; /* initial height on wide screens */
export const navBarFinalHeight = 60; /* final height on scroll on wide screens */
export const navBarInitialMobileHeight = 60; /* initial height on mobile */
export const navBarFinalMobileHeight = 40; /* final height on scroll on mobile */
export const transparency =
  "rgba(255, 255, 255, 0.8)"; /* white transparency background */
export const backdropFilter = "blur(4px)"; /* blur background */
export const imgLogo = imgSlogan;
export const imgLogoSinSlogan = imgNoSlogan;
