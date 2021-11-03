import "./item.css";
import React, { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import StoreContext from "../context/storeContext";

const Item = (props) => {
    // state
    const [quantity, setQuantity] = useState(props.data.minimum || 1);
    const addProd = useContext(StoreContext).addProductToCart;

    // functions
    const handleAdd = () => {
        let prodForCart = {
            ...props.data,
            quantity: quantity
        }
        console.log("Adding item to cart");
        addProd(prodForCart);
    };
    
    const onQuantityChange = (quantity) => {
        console.log("new quantity", quantity);
        setQuantity(quantity);
    };

    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    // return
    return (
        <div className="item">
            <img className="image" src={"/img/" + props.data.image} alt="product" />

            <h5>{props.data.title || "no title"}</h5>

            <label className="price">Price ${props.data.price.toFixed(2)} </label>
            <br />
            <label className="total">Total ${getTotal()}</label>
        
            <div className="controls">
                <QuantityPicker minimum={props.data.minimum || 1} onChange={onQuantityChange} />
                <button onClick={handleAdd} className="btn btn-sm btn-dark btn-add">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
  );
};

export default Item;