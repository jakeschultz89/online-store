import "./item.css";
import QuantityPicker from "./quantityPicker";

const Item = () => {
    // state

    // functions
    const handleAdd = () => {
        console.log("Adding item to cart");
    };
    
    // return
    return (
        <div className="item">
            <img src="https://picsum.photos/230/300" alt="product" />

            <h5>Product</h5>

            <label>Price $</label>
            <label>Total $</label>

            <div className="controls">
                <QuantityPicker />
                <button onClick={handleAdd} className="btn btn-sm btn-dark btn-add">Add</button>
            </div>
        </div>
  );
};

export default Item;
