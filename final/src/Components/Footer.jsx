import React from 'react'
import { useAppContext } from "./utils/global.context";

const Footer = () => {
  const { state } = useAppContext();

  return (
    <footer className={`footer ${state.theme === "dark" ? "dark" : "light"}`}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
