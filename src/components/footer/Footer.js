import React from "react";
import "./Footer.css";
import {useContext} from 'react';
import ThemeContext from "../../context/themeContext";

const Footer = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <footer className="--flex-center" data-theme={theme}>
      <p>Copyright &copy; 2022.</p>
    </footer>
  );
};

export default Footer;
