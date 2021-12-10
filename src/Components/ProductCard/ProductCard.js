import React from "react";
import { connect } from "react-redux";
import { addProductstoCart, removeProduct, deleteProduct } from "../../Redux/cart/cartActions";

const ProductCard = ({ addProductstoCart, removeProduct, deleteProduct, ...product }) => {
    var { title, cost } = product;

    return (
        <div>
            <p>
                {title} - {`$${cost}`} - <button onClick={() => addProductstoCart(product)}>Add to Cart</button>{" "}
                <button onClick={() => removeProduct(product.id)}>Remove From Cart</button>
                <button onClick={() => deleteProduct(product.id)}>Delete From Cart</button>
            </p>
        </div>
    );
};

const actions = {
    addProductstoCart,
    removeProduct,
    deleteProduct,
};

export default connect(null, actions)(ProductCard);
