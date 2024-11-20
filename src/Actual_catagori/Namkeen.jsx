import React, { Component } from "react";

// Sample hardcoded product data
const productData = [
    { id: 101, foodName: "Namkeen", calories: 150, foodType: "Namkeen", carbs: 30, price: 2.50, img: "https://www.mahalaxmifoods.com/uploads/Khamang-Chivdakkjj.jpg" },
    { id: 103, foodName: "Namkeen", calories: 160, foodType: "Namkeen", carbs: 32, price: 2.60, img: "https://st2.depositphotos.com/5653638/11810/i/950/depositphotos_118105014-stock-photo-traditional-indian-deep-fried-salty.jpg" },
    { id: 104, foodName: "Namkeen", calories: 180, foodType: "Namkeen", carbs: 34, price: 2.80, img: "https://cdn.create.vista.com/api/media/small/619834032/stock-photo-falahari-chivda-upwas-chewda-farali-chivda-mixture-namkeen-dry-fruits" },
    { id: 102, foodName: "Namkeen", calories: 170, foodType: "Namkeen", carbs: 35, price: 2.75, img: "https://thumbs.dreamstime.com/b/fresh-crunchy-nimco-mix-delicious-blend-sev-peanuts-chick-peas-fried-lentil-252559457.jpg" },
    { id: 101, foodName: "Namkeen", calories: 150, foodType: "Namkeen", carbs: 30, price: 2.50, img: "https://www.mahalaxmifoods.com/uploads/Khamang-Chivdakkjj.jpg" },
    { id: 103, foodName: "Namkeen", calories: 160, foodType: "Namkeen", carbs: 32, price: 2.60, img: "https://st2.depositphotos.com/5653638/11810/i/950/depositphotos_118105014-stock-photo-traditional-indian-deep-fried-salty.jpg" },
    { id: 104, foodName: "Namkeen", calories: 180, foodType: "Namkeen", carbs: 34, price: 2.80, img: "https://cdn.create.vista.com/api/media/small/619834032/stock-photo-falahari-chivda-upwas-chewda-farali-chivda-mixture-namkeen-dry-fruits" },
    { id: 102, foodName: "Namkeen", calories: 170, foodType: "Namkeen", carbs: 35, price: 2.75, img: "https://thumbs.dreamstime.com/b/fresh-crunchy-nimco-mix-delicious-blend-sev-peanuts-chick-peas-fried-lentil-252559457.jpg" }
];

class Ladoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "PICK YOUR FAVORITE NAMKEEN", // Title prop
            products: productData // Using hardcoded data
        };
    }

    render() {
        return (
            <div className="top-40">
                <h1 className="text-3xl font-bold text-center text-orange-500 pt-5 mb-6">{this.state.title}</h1>
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
                            <p className="day">Qty: {data.carbs}g</p>
                        </div>
                        <button className="bg-yellow-400 w-32 hover:bg-red-600 rounded-lg">Add Cart</button>
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
