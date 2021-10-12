var catalog = [
    {
        _id:"123399r318723912xc98123",
        title:"Banana",
        image:"banana.jpeg",
        price:.99,
        category:"Fruit",
        stock:79,
        minimum:1
    },
    {
        _id:"123396r318723912xc98124",
        title:"Apple",
        image:"apple.jpeg",
        price:1.49,
        category:"Fruit",
        stock:59,
        minimum:1
    },
    {
        _id:"123399r368723912xc98125",
        title:"Coconut",
        image:"coconut.jpeg",
        price:7.99,
        category:"Fruit",
        stock:198,
        minimum:2
    },
    {
        _id:"123399r318726912xc98125",
        title:"Grapes",
        image:"grape.jpeg",
        price:.19,
        category:"Fruit",
        stock:324,
        minimum:25
    },
    {
        _id:"123399r318723912xc96125",
        title:"Pineapple",
        image:"pineapple.png",
        price:9.69,
        category:"Fruit",
        stock:39,
        minimum:2
    },
    {
        _id:"123399r318723912xc98165",
        title:"Watermelon",
        image:"watermelon.jpg",
        price:5.99,
        category:"Fruit",
        stock:43,
        minimum:1
    }
];

class DataService {
    getCatalog() {
        // call the server to get the catalog

        // return the mock data (temporal)
        return catalog;
    }

    saveItem() {

    }

    saveOrder() {

    }
}

export default DataService;