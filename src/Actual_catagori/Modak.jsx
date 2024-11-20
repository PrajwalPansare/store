import React, { Component } from "react";

// Sample hardcoded product data
const productData = [
    { id: 101, foodName: "Boondi Ladoo", calories: 150, foodType: "Sweet", carbs: 30, price: 2.50, img: "https://dinnervia.com/wp-content/uploads/indian-sweet-motichoor-laddoo-know-600nw-1027395571.webp" },
    { id: 102, foodName: "Rava Ladoo", calories: 170, foodType: "Sweet", carbs: 35, price: 2.75, img: "https://t4.ftcdn.net/jpg/05/46/86/27/240_F_546862721_0ocsNX69dBbXzOsR6paxtRh2VueAcbbA.jpg" },
    { id: 103, foodName: "Coconut Ladoo", calories: 160, foodType: "Sweet", carbs: 32, price: 2.60, img: "https://t3.ftcdn.net/jpg/09/50/94/64/360_F_950946490_TcIDecl5UpkzhlxxIlSYIWq5RyL8oqHT.jpg" },
    { id: 104, foodName: "Besan Ladoo", calories: 180, foodType: "Sweet", carbs: 34, price: 2.80, img: "https://www.anandsweets.in/cdn/shop/products/laddu.png?v=1713423752&width=1946" },
    { id: 102, foodName: "Rava Ladoo", calories: 170, foodType: "Sweet", carbs: 35, price: 2.75, img: "https://t4.ftcdn.net/jpg/05/46/86/27/240_F_546862721_0ocsNX69dBbXzOsR6paxtRh2VueAcbbA.jpg" },
    { id: 103, foodName: "Coconut Ladoo", calories: 160, foodType: "Sweet", carbs: 32, price: 2.60, img: "https://t3.ftcdn.net/jpg/09/50/94/64/360_F_950946490_TcIDecl5UpkzhlxxIlSYIWq5RyL8oqHT.jpg" },
    { id: 104, foodName: "Besan Ladoo", calories: 180, foodType: "Sweet", carbs: 34, price: 2.80, img: "https://www.anandsweets.in/cdn/shop/products/laddu.png?v=1713423752&width=1946" },
    { id: 104, foodName: "Besan Ladoo", calories: 180, foodType: "Sweet", carbs: 34, price: 2.80, img: "https://www.anandsweets.in/cdn/shop/products/laddu.png?v=1713423752&width=1946" }
];

class Ladoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "PICK YOUR FAVORITE LADOO'S",
            products: productData
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
        if (productData) {
            return productData.map((data) => (
                <div key={data.id} className="bg-white rounded-lg shadow-lg m-4 p-4 w-full md:w-1/4">
                    <div className="flex flex-col items-center">
                        <img className="h-40 w-full object-cover mb-4" src={data.img} alt={data.foodName} />
                        <h3 className="text-lg font-semibold">{data.foodName}</h3>
                    </div>
                    <div className="mt-4">
                        <span className="text-xl font-bold text-gray-700">Rs. {data.price.toFixed(2)}</span>
                        <h4 className="text-md text-gray-500">{data.foodType}</h4>
                        <p className="text-sm text-gray-600">Qty: {data.carbs}g</p>
                        <button className="bg-yellow-400 w-32 hover:bg-red-600 rounded-lg">Add Cart</button>
                    </div>
                </div>
            ));
        } else {
            return <p>No products available</p>;
        }
    };

    return (
        <div className="flex flex-wrap justify-center">
            {renderList()}
        </div>
    );
};

export default Ladoo;
