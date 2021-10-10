import "./catalog.css";
import Item from "./item";

const Catalog = () => {
    return(
        <div className="catalog">
            <h1>Our amazing catalog</h1>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
};

export default Catalog;