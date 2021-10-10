import React, {useState} from 'react';

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        console.log("increase quantity");
        setQuantity(quantity+1);
    };

    const decrease = () => {
        let newVal = quantity -1;
        if(newVal > 0) {
            setQuantity(quantity-1);
        }
    };
    
  return (
    <div className="quantity-picker">
        <button onClick={increase} className="btn btn-sm btn-primary">
            +
        </button>

      <label>{quantity}</label>

        <button disabled={quantity === 0} onClick={decrease} className="btn btn-sm btn-primary">
            -
        </button>
    </div>
  );
};

export default QuantityPicker;
