import React from "react";
import { connect } from "react-redux";
import { addProductstoCart, removeProductFromcart } from "../../Redux/cart/cartActions";

const ProductCard = ({ addProductstoCart,removeProductFromcart, ...product }) => {
    var { title, cost } = product;

    return (
        <div>
            <p>
                {title} - {`$${cost}`} - <button onClick={() => addProductstoCart(product)}>Add to Cart</button>{" "}
                <button onClick={() => removeProductFromcart(product.id)}>Remove From Cart</button>
            </p>
        </div>
    );
};

const actions = {
    addProductstoCart,
    removeProductFromcart
};

export default connect(null, actions)(ProductCard);
