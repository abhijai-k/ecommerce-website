import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const clearCart = () => {
        setCartItems({}); // Reset cartItems
    };

    return (
        <ShopContext.Provider value={{ 
            cartItems, 
            setCartItems, 
            clearCart, 
            // Other functions or values 
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
