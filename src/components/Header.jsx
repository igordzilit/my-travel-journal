import React from "react";
import globe from "../assets/globe.png";

const Header = () => {
  return (
    <header className="header">
      <img src={globe} />
      <span>my travel journal.</span>
    </header>
  );
};

export default Header;
