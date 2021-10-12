import "./item.css";
import QuantityPicker from "./quantityPicker";

const Item = (props) => {
    // state

    // functions
    const handleAdd = () => {
        console.log("Adding item to cart");
    };
    
    // return
    return (
        <div className="item">
            <img className="image" src={"/img/" + props.data.image} alt="product" />

            <h5>{props.data.title || "no title"}</h5>

            <label>Price ${props.data.price.toFixed(2)}</label>
            <label>Total ${props.data.price.toFixed(2)} </label>

            <div className="controls">
                <QuantityPicker minimum={props.data.minimum} />
                <button onClick={handleAdd} className="btn btn-sm btn-dark btn-add">
                    Add
                </button>
            </div>
        </div>
  );
};

export default Item;
