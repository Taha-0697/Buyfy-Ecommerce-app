import React from "react";
import { connect } from 'react-redux';
import { addProductstoCart } from '../../Redux/cart/cartActions';

const ProductCard = ({ addProductstoCart,...product }) => {
    var {title,cost} = product;
   
    return (
        <div>
            <p>
                {title} - {`$${cost}`} - <button onClick={()=> addProductstoCart(product)} >Add to Cart</button>
            </p>
        </div>
    );
};

const actions ={
    addProductstoCart
}

export default connect(null,actions)(ProductCard);
