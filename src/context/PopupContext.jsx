import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const PopupContext = createContext();

const PopupContextProvider = ({children})=>{
    const [showNav, setShowNav] = useState(false);

    const contextValue = {
        showNav,
        setShowNav,
    }
    
    return(
        <PopupContext.Provider value={contextValue}>
            {children}
        </PopupContext.Provider>
    )
}

export {PopupContext, PopupContextProvider}

PopupContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};