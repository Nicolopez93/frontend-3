import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    COnsejo: Descomentar este bloque de código, cuando "App.jsx" ya tenga un proveedor
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language
    */
    const {language, handleChangeLA} = useContext(LanguageContext);
    const {text} = language;

    return (
        <div className="navbar">
            <p>{text.home}</p> 
            <p>{`Idioma actual: ${language.id}`}</p>
            <button onClick={() => handleChangeLA ("english")}>EN</button>
            <button onClick={() => handleChangeLA ("spanish")}>ES</button>
            <button onClick={() => handleChangeLA ("portuguese")}>PTBR</button>
        </div>
    )
}

export default Navbar