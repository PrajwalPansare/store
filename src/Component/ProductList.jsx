import React from 'react';
import './Produts.css';
import Counter from './Counter';

const ProductList = ({ productData }) => {
    const renderList = (productData) => {
        if (productData) {
            return productData.map((data) => (
                <div key={data.category}>
                    <h2 className='text-center p-3 m-3 bg-yellow-300'>{data.category}</h2>

                    <div className="row">
                        {data.items.map((item) => (
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
                                        <Counter/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ));
        }
    };

    return (
        <div className="container">
            {renderList(productData)}
        </div>
    );
};

export default ProductList;
