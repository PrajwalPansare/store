import React, { Component } from "react";
//import Counter from "./Counter";

// Sample hardcoded product data
const productData = [
    {
        "id": 101,
        "category": "Chakli",
        "foodName": "Chakli",
        "calories": 150,
        "foodType": "Sweet",
        "price": 200,
        "discountedPrice": 180,
        "description": "Sweet and crispy round balls.",
        "img": "https://tiimg.tistatic.com/fp/1/007/762/crispy-delicious-freshly-fried-in-best-grade-oil-made-with-high-grade-ingredients-chakali-namkeen-508.jpg"
      },
      {
        "id": 102,
        "category": "Round Chakli",
        "foodName": "Chakli",
        "calories": 150,
        "foodType": "Sweet",
        "price": 180,
        "discountedPrice": 160,
        "description": "Sweet and crispy round balls.",
        "img": "https://5.imimg.com/data5/MF/OK/MY-38313840/murukku-chakli-250x250.jpg"
      },
      {
        "id": 103,
        "category": " Chakli",
        "foodName": " Long Chakli",
        "calories": 150,
        "foodType": "Sweet",
        "price": 200,
        "discountedPrice": 220,
        "description": "Sweet and crispy round balls.",
        "img": "https://bgnaidusweets.com/cdn/shop/products/online-Kai-Muruku-BG-Naidu-Sweets.jpg?v=1673520824"
      },
      {
        "id": 104,
        "category": "Chakli",
        "foodName": "Ring Chakli",
        "calories": 150,
        "foodType": "Sweet",
        "price": 250,
        "discountedPrice": 230,
        "description": "Sweet and crispy round balls.",
        "img": "https://bgnaidusweets.com/cdn/shop/products/online-Kai-Muruku-BG-Naidu-Sweets.jpg?v=1673520824"
      },
      {
        "id": 105,
        "category": "Chakli",
        "foodName": "Chakli",
        "calories": 150,
        "foodType": "Sweet",
        "price": 200,
        "discountedPrice": 180,
        "description": "Sweet and crispy round balls.",
        "img": "https://tiimg.tistatic.com/fp/1/007/762/crispy-delicious-freshly-fried-in-best-grade-oil-made-with-high-grade-ingredients-chakali-namkeen-508.jpg"
      },
      {
        "id": 106,
        "category": "Round Chakli",
        "foodName": "Chakli",
        "calories": 150,
        "foodType": "Sweet",
        "price": 180,
        "discountedPrice": 160,
        "description": "Sweet and crispy round balls.",
        "img": "https://5.imimg.com/data5/MF/OK/MY-38313840/murukku-chakli-250x250.jpg"
      },
      {
        "id": 107,
        "category": " Chakli",
        "foodName": " Long Chakli",
        "calories": 150,
        "foodType": "Sweet",
        "price": 200,
        "discountedPrice": 220,
        "description": "Sweet and crispy round balls.",
        "img": "https://bgnaidusweets.com/cdn/shop/products/online-Kai-Muruku-BG-Naidu-Sweets.jpg?v=1673520824"
      },
      {
        "id": 108,
        "category": "Chakli",
        "foodName": "Ring Chakli",
        "calories": 150,
        "foodType": "Sweet",
        "price": 250,
        "discountedPrice": 230,
        "description": "Sweet and crispy round balls.",
        "img": "https://bgnaidusweets.com/cdn/shop/products/online-Kai-Muruku-BG-Naidu-Sweets.jpg?v=1673520824"
      }
      
];

class Chakli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "PICK !.... Your Favourite Chakli", // Title prop
            products: productData // Using hardcoded data
        };
    }

    render() {
        return (
            <div className="p-4">
                <h1 className="text-3xl font-bold text-center text-orange-500 pt-5 mb-6">{this.state.title}</h1>
                <ProductList productData={this.state.products} />
            </div>
        );
    }
}

const ProductList = ({ productData }) => {
    const renderList = () => {
        return productData.map((item) => (
            <div key={item.id} className="card col-md-3">
                <div className="row">
                    <div className="card-img">
                        <img className="card-img-top" src={item.img} alt={item.foodName} />
                    </div>
                    <h3 className="topTemp">{item.foodName}</h3>
                </div>
                <div className="card-body">
                    <span className="max "><s>Rs. {item.discountedPrice}</s></span>
                    <h4 className="max">Rs. {item.price}</h4>
                    <div className="card-text">
                        <p className="day">{item.description}</p>
                    </div>
                    <div>
                    <button className="bg-yellow-400 w-32 hover:bg-red-600 rounded-lg">Add Cart</button>  
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="container">
            <div className="row">
                {renderList()}
            </div>
        </div>
    );
};

export default Chakli;
