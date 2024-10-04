import React, { Component } from "react";

import JSON from './prajwal.json'; //ref to the prajwal.json data file
import ProductList from './ProductList';

    class Products extends Component  {
        constructor(props){
            super(props);
            this.state ={      //state
                title: 'Most Loved Snacks ', //props
                products: JSON     //asign tne prajwal.db data file to prop
            }
        }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <ProductList productData={this.state.products}/>  {/* pass data from .json file to 
                ProductList component props*/}
            </div>
        )
    }
}



export default Products;