import React, {useState} from 'react';

const QuantityPicker = (props) => {
    const [quantity, setQuantity] = useState(props.minimum);

    const increase = () => {
        console.log("increase quantity");
        setQuantity(quantity+1);
    };

    const decrease = () => {
        let newVal = quantity -1;
        if(newVal >= props.minimum) {
            setQuantity(quantity-1);
        }
    };
    
  return (
    <div className="quantity-picker">
        console.log("return executing")
        <button onClick={increase} className="btn btn-sm btn-primary">
            +
        </button>

      <label>{quantity}</label>

        <button disabled={quantity === props.minimum || 1} onClick={decrease} className="btn btn-sm btn-primary">
            -
        </button>
    </div>
  );
};

export default QuantityPicker;
