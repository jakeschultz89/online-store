import { useEffect, useState } from "react";
import axios from "axios";

import "./catalog.css";
import Item from "./item";
import DataService from "../services/dataService";

const Catalog = () => {
    const [itemList, setItemList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);

    const loadCatalog = async () => {
        // create an instance of the service
        // call the method
        let service = new DataService();
        let catalog = await service.getCatalog();

        // find the list of unique categories
        // let cats = [];
        // for (let i = 0; i <catalog.length; i++) {
        //     let prod = catalog[i];
        //     // if the category doesn't exist inside the cats array
        //     // add it
        //     if(!cats.includes(prod.category)) {
        //         cats.push(prod.category);
        //     }
        // }

        let cats = await service.getCategories();

        console.log("unique category", cats);
        setCategories(cats);

        setItemList(catalog);
        setItemsToDisplay(catalog); //display all
    };
    const test1 = () => {
        console.log("Test 1");
        let nums = [1, 3, 4213, 2873, 456, 1, 23, 5, 346, 123, 345, 123, 2345, 12, 3, 546, 768, 789];

        // console log an array with unique numbers
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            let n = nums[i];
            if(!res.includes(n)) {
                res.push(n);
            }
        }
        console.log(res);
    };

    const handleFilter = (cat) => {
        console.log("Filter", cat);

        setItemsToDisplay([]);
        let results = [];
        for (let i = 0; i < itemList.length; i++) {
            let prod = itemList[i];
            if (prod.category === cat) {
                results.push(prod);
            }
        }

        setItemsToDisplay(results);
    };

    const resetFilter = () => {
        setItemsToDisplay(itemList); // send all prods to be displayed
    };

    useEffect(() => {
        loadCatalog();
        //do something else
        test1();
    }, []);

    return(
        <div className="catalog">
            <h1>OUR AMAZING CATALOG</h1>
            <h3>We currently have {itemList.length} products</h3>

            <div className="filters">
                <button onClick={resetFilter} className="btn btn-sm btn-dark">
                    All
                </button>

                {categories.map((cat) => (
                    <button
                        onClick={() => {
                            handleFilter(cat);
                        }}
                        className="btn btn-sm btn-info"
                        >
                        {cat}
                    </button>
                ))}
            </div>

            {itemsToDisplay.map((prod) => (
                <Item data={prod}></Item>
            ))}
        </div>
    );
};

export default Catalog;
