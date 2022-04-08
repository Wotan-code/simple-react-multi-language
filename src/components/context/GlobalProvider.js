//Context elements
import {createContext, useState} from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    //Global variables
    let [language, setLanguage] = useState('es');
    
    //Global functions

    //It changes the language of the application
    const changeLanguage = (lang) => {
        setLanguage(lang);
    }

    //Global context
    const contextValue = {
        language: language,
        changeLanguage: changeLanguage
    };

    return <GlobalContext.Provider value={contextValue} > {children} </GlobalContext.Provider>
}

export default GlobalProvider;