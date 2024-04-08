import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./AppContext";

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme === "dark" ? "dark" : "light"}`}>
      <Link to="/home">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Favoritos</Link>
      
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </nav>
  );
};

export default Navbar;