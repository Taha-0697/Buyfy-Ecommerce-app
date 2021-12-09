import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const CategoryListItems = ({ category, products }) => {
    console.log(category);
    console.log(products);
    return (
        <div>
            <h2>{category}</h2>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.title} {...product} />
                ))}

                <Link to={`/category-products/${category}`}>
                    <button>View More</button>
                </Link>
            </div>
            <br />
        </div>
    );
};

export default CategoryListItems;
