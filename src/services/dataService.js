import axios from "axios";

var catalog = [
    {
        _id:"133399r318723912xc98123",
        price:.41,
        stock:421,
        title:"Bananas",
        image:"banana.jpeg",
        discount: 0,
        minimum: 6,
        category:"Fruit"
    },
    {
        _id:"123399r318723912xc98123",
        price:1.09,
        stock:321,
        title:"Apples",
        image:"apple.jpeg",
        discount: 0,
        minimum: 1,
        category:"Fruit"
    },
    {
        _id:"123369r318723912xc98123",
        price:1.91,
        stock:259,
        title:"Coconuts",
        image:"coconut.jpeg",
        discount: 0,
        minimum: 1,
        category:"Fruit"
    },
    {
        _id:"123399r318923912xc98123",
        price:4.09,
        stock:42,
        title:"Corn",
        image:"corn.webp",
        discount: 0,
        minimum: 4,
        category:"Vegetable"
    },
    {
        _id:"123399r318723912xc08123",
        price:4.43,
        stock:98,
        title:"Eggs",
        image:"eggs.webp",
        discount: 0,
        minimum: 12,
        category:"Dairy"
    },
    {
        _id:"123399r318723912xc98129",
        price:7.06,
        stock:982,
        title:"Grapes",
        image:"grape.jpeg",
        discount: 0,
        minimum: 100,
        category:"Fruit"
    },
    {
        _id:"123399r318703912xc98123",
        price:3.83,
        stock:69,
        title:"Milk",
        image:"milk.jpeg",
        discount: 0,
        minimum: 1,
        category:"Dairy"
    },
    {
        _id:"123389i318723912xc98123",
        price:1.73,
        stock:300,
        title:"Pineapples",
        image:"pineapple.png",
        discount: 0,
        minimum: 1,
        category:"Fruit"
    },
    {
        _id:"123399x118723912xc98123",
        price:1.59,
        stock:62,
        title:"Tortillas",
        image:"tortillas.webp",
        discount: 0,
        minimum: 6,
        category:"Bread"
    },
    {
        _id:"123399j318723912xc98123",
        price:3.07,
        stock:29,
        title:"Watermelon",
        image:"watermelon.jpg",
        discount: 0,
        minimum: 1,
        category:"Fruit"
    },
    {
        _id:"120399r318723919xc98123",
        price:1.32,
        stock:421,
        title:"Penne Pasta",
        image:"penne.webp",
        discount: 0,
        minimum: 1,
        category:"Pasta"
    },
    {
        _id:"124399r318723912xc98123",
        price:4.10,
        stock:49,
        title:"Cranberry Juice",
        image:"cranberry-juice.webp",
        discount: 0,
        minimum: 1,
        category:"Beverages"
    }
];

class DataService {
    async getCatalog() {
        // call the server to get the catalog
        let res = await axios.get("http://127.0.0.1:5000/api/catalog");
        console.log(res);
        return res.data; // = an array of objects



        // get categories
        // "http://127.0.0.1:5000/api/catalog"
    }

    async getCategories() {
        let res = await axios.get("http://127.0.0.1:5000/api/categories");
        console.log(res);
        return res.data;
    }

    async saveProduct(prod) {
        let res = await axios.post("http://127.0.0.1:5000/api/catalog", prod)
        console.log("saving result", res.data);
        return res.data;
    }

    saveItem() {}

    saveOrder() {}
}

export default DataService;