import React, {useState} from 'react';
import "./catalog.css"; //import "./quantityPicker.css";

const QuantityPicker = (props) => {
    const [quantity, setQuantity] = useState(props.minimum);

    const increase = () => {
        let val = quantity+1;
        setQuantity(val);
        props.onChange(val) //notify parent that the val has changed
    };

    const decrease = () => {
        // dont go below 1
        let newVal = quantity -1;
        if(newVal >= props.minimum) {
            setQuantity(newVal);
            props.onChange(newVal); //notify parent that the val has changed
        }
    };
    
  return (
    <div className="quantity-picker">
        {console.log("return executing")}
        <button onClick={increase} className="btn btn-sm btn-primary">
            +
        </button>

      <label className="lblQuantity">{quantity}</label>

        <button disabled={quantity === props.minimum} onClick={decrease} className="btn btn-sm btn-primary">
            -
        </button>
    </div>
  );
};

export default QuantityPicker;
