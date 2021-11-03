import React from 'react';

// describes the data that will be saved on the context
export default React.createContext({
    // data
    cart: [],
    user: {},

    // functions that allow to modify the data
    addProductToCart: () => {},
    removeProductFromCart: () => {},
});
