import React, { useContext } from 'react'
import LanguageContext from '../context'

const Body = () => {
    const {language} = useContext (LanguageContext);
    const {text} = language;
    /* CONSEJO: Utilizar useContext */
    
    return (
        <div>
            <h1>{text.Título}</h1>
            <p>{text.description}</p>
        </div>
    )
}

export default Body