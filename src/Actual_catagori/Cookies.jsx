import React, { Component } from "react";

// Sample hardcoded product data
const productData = [
    { id: 101, foodName: "Cookies-Cookies", calories: 150, foodType: "Cookies", carbs: 30, price: 2.50, img: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/Chocolate-chip-cookies-14.jpg?im=AspectCrop=(16,9);Resize,width=742" },
    { id: 102, foodName: "Rava Cookies", calories: 170, foodType: "Cookies", carbs: 35, price: 2.75, img: "https://www.savingdessert.com/wp-content/uploads/2020/01/Oatmeal-Raisin-Cookies-5.jpg" },
    { id: 103, foodName: "Coconut Cookies", calories: 160, foodType: "Cookies", carbs: 32, price: 2.60, img: "https://bakeorbreak.com/wp-content/uploads/2022/08/peanut_butter_cookies3076-540x720.jpg" },
    { id: 104, foodName: "Friut Cookies", calories: 180, foodType: "Cookies", carbs: 34, price: 2.80, img: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/Chocolate-chip-cookies-14.jpg?im=AspectCrop=(16,9);Resize,width=742" },
    { id: 102, foodName: "Rava Cookies", calories: 170, foodType: "Cookies", carbs: 35, price: 2.75, img: "https://www.savingdessert.com/wp-content/uploads/2020/01/Oatmeal-Raisin-Cookies-5.jpg" },
    { id: 103, foodName: "Coconut Cookies", calories: 160, foodType: "Cookies", carbs: 32, price: 2.60, img: "https://bakeorbreak.com/wp-content/uploads/2022/08/peanut_butter_cookies3076-540x720.jpg" },
    { id: 101, foodName: "NEW Cookies", calories: 150, foodType: "Cookies", carbs: 30, price: 2.50, img: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/Chocolate-chip-cookies-14.jpg?im=AspectCrop=(16,9);Resize,width=742" },
    { id: 103, foodName: "Friut Cookies", calories: 160, foodType: "Cookies", carbs: 32, price: 2.60, img: "https://bakeorbreak.com/wp-content/uploads/2022/08/peanut_butter_cookies3076-540x720.jpg" },
    

];

class Ladoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "PICK YOUR FAVORITE Cookies's..",
            products: productData
        };
    }

    render() {
        return (
            <div className="p-4">
                <h1 className="text-3xl font-bold text-center text-amber-700 mt-4 mb-4">{this.state.title}</h1>
                <ProductList productData={this.state.products} />
            </div>
        );
    }
}

const ProductList = ({ productData }) => {
    const renderList = () => {
        if (productData) {
            return productData.map((data) => (
                <div key={data.id} className="bg-white rounded-lg card col-md-3 m-4 p-4 hover:scale-110">
                    <div className="flex flex-col items-center">
                        <img className="h-32 w-32 object-cover mb-4" src={data.img} alt={data.foodName} />
                        <h3 className="text-lg text-amber-700 font-semibold">{data.foodName}</h3>
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
