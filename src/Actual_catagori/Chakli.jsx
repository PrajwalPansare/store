import React, { Component } from "react";
import Counter from "./Counter";

// Sample hardcoded product data
const productData = [
    { id: 101, foodName: "Boondi Ladoo", calories: 150, foodType: "Sweet", carbs: 30, price: 2.50, img: "https://tiimg.tistatic.com/fp/1/007/762/crispy-delicious-freshly-fried-in-best-grade-oil-made-with-high-grade-ingredients-chakali-namkeen-508.jpg" },
    { id: 102, foodName: "Rava Ladoo", calories: 170, foodType: "Sweet", carbs: 35, price: 2.75, img: "https://5.imimg.com/data5/MF/OK/MY-38313840/murukku-chakli-250x250.jpg" },
    { id: 103, foodName: "Coconut Ladoo", calories: 160, foodType: "Sweet", carbs: 32, price: 2.60, img: "https://bgnaidusweets.com/cdn/shop/products/online-Kai-Muruku-BG-Naidu-Sweets.jpg?v=1673520824" },
    { id: 104, foodName: "Besan Ladoo", calories: 180, foodType: "Sweet", carbs: 34, price: 2.80, img: "https://st2.depositphotos.com/3737041/5294/i/450/depositphotos_52946691-stock-photo-sweet-pretzel-on-white-background.jpg" }
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
                    <span className="max">Rs. {item.price.toFixed(2)}</span>
                    <h4 className="card-title">Calories: {item.calories}</h4>
                    <div className="card-text">
                        <p className="day">Carbs: {item.carbs}g</p>
                    </div>
                    <div>
                        <Counter />
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
