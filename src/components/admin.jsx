import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";

const Admin = () => {


    const [product, setProduct] = useState({});

    const textChanged = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        if(name === "price" || name ==="discount" || name ==="minimum") {
            value = parseFloat(value);
        }

    // create copy of the state
    let prod = {...product};
    prod[name] = value;

    setProduct(prod);
    };   

    const handleSave = () => {
        console.log(product);

        //create an instance of the service
        let service = new DataService();
        service.saveProduct(product);
        //call service.saveProduct(product)

    }

    return (
        <div className="admin-page">
            <h1>Manage your products</h1>

            <div className="my-control">
                <label>Title</label>
                <input name="title" onChange={textChanged} type="text" />
            </div>
            <div className="my-control">
                <label>Category</label>
                <input name="category" onChange={textChanged} type="text" />
            </div>
            <div className="my-control">
                <label>Image Name</label>
                <input name="image" onChange={textChanged} type="text" />
            </div>
            <div className="my-control">
                <label>Price</label>
                <input name="price" onChange={textChanged} type="number" />
            </div>
            <div className="my-control">
                <label>Discount</label>
                <input name="discount" onChange={textChanged} type="number" />
            </div>
            <div className="my-control">
                <label>Minimum</label>
                <input name="minimum" onChange={textChanged} type="number" />
            </div>
            <div className="my-control">
                <button onClick={handleSave} className="btn btn-dark">Register Item</button>
            </div>
        </div>
    )
}

export default Admin;