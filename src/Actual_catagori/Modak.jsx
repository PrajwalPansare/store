import React, { Component } from "react";

// Sample hardcoded product data
const productData = [
    { id: 101, foodName: "Boondi Ladoo", calories: 150, foodType: "Sweet", carbs: 30, price: 2.50, img: "https://www.mahalaxmifoods.com/uploads/Khamang-Chivdakkjj.jpg" },
    { id: 102, foodName: "Rava Ladoo", calories: 170, foodType: "Sweet", carbs: 35, price: 2.75, img: "https://www.mahalaxmifoods.com/uploads/Khamang-Chivdakkjj.jpg" },
    { id: 103, foodName: "Coconut Ladoo", calories: 160, foodType: "Sweet", carbs: 32, price: 2.60, img: "https://www.mahalaxmifoods.com/uploads/Khamang-Chivdakkjj.jpg" },
    { id: 104, foodName: "Besan Ladoo", calories: 180, foodType: "Sweet", carbs: 34, price: 2.80, img: "https://www.mahalaxmifoods.com/uploads/Khamang-Chivdakkjj.jpg" }
];

class Ladoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "PICK YOUR FAVORITE LADOO'S", // Title prop
            products: productData // Using hardcoded data
        };
    }

    render() {
        return (
            <div className="top-40">
                <h1>{this.state.title}</h1>
                <ProductList productData={this.state.products} /> {/* Passing data to ProductList */}
            </div>
        );
    }
}

const ProductList = ({ productData }) => {
    const renderList = () => {
        if (productData) { // Ensure productData is defined
            return productData.map((data) => (
                <div key={data.id} className="card col-md-3">
                    <div className="row">
                        <div className="card-img">
                            <img className="card-img-top" src={data.img} alt={data.foodName} />
                        </div>
                        <h3 className="topTemp">{data.foodName}</h3>
                    </div>
                    <div className="card-body">
                        <span className="max">Rs. {data.price.toFixed(2)}</span>
                        <h4 className="card-title">{data.foodType}</h4>
                        <div className="card-text">
                            <p className="day">Carbs: {data.carbs}g</p>
                        </div>
                    </div>
                </div>
            ));
        } else {
            return <p>No products available</p>; // Optional: Handle no products
        }
    };

    return (
        <div className="container">
            <div className="row">
                {renderList()} {/* Call the above custom function to render the data in the view */}
            </div>
        </div>
    );
};

export default Ladoo;
