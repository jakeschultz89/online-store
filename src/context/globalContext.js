import React, { useState, useContext } from "react";
import StoreContext from "./storeContext";

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        id: 12345,
        name: 'Jake',
        email: 'Jake@example.com'
    });

  const addProductToCart = (product) => {
        console.log("adding product to cart");

        let copy = [...cart, product];
        setCart(copy);
  };

  const removeProductFromCart = (productId) => {
        console.log("removing product from cart");
  };

// left side is the abstract description for data and functions
// right side is the implementation of the data and functions
// when someone call the abstract, will get the implementation
  return <StoreContext.Provider value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
    }}>
        {props.children}
    </StoreContext.Provider>
};

export default GlobalContext;
