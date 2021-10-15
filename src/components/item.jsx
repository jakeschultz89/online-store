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

            <label className="price">${props.data.price.toFixed(2)} </label>
            <label className="total">$ {props.data.price.toFixed(2)}</label>
        
            <div className="controls">
                <QuantityPicker minimum={props.data.minimum || 1} />
                <button onClick={handleAdd} className="btn btn-sm btn-dark btn-add">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
  );
};

export default Item;
