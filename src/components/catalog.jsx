import { useEffect, useState } from "react";

import "./catalog.css";
import Item from "./item";
import DataService from "../services/dataService";

const Catalog = () => {

    const [itemList, setItemList] = useState([]);

    const loadCatalog = () => {
        let service = new DataService();
        let catalog = service.getCatalog();
        console.log("the data", catalog);

        setItemList(catalog);
    };

    useEffect(() => {
        loadCatalog();
    }, []);

    return(
        <div className="catalog">
            <h1>Our amazing catalog</h1>
            <h3>Currently have {itemList.length} products</h3>

            {itemList.map( prod => {
                return <Item data={prod}></Item>;
            })}


        </div>
    );
};

export default Catalog;
