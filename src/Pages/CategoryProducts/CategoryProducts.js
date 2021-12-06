import React,{useEffect} from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {fetchCategories} from "../../Redux/products/productsActions"

const CategoryProducts = ({
    match: {
        params: { category },
    },fetchCategories,products
}) => {
    //console.log(products);

    useEffect(() => {
      // CDM 
      fetchCategories(category)
    }, [])

    console.log(products)

    return (
        <div>
            <h1>{category}</h1>
           {products.map((product)=><ProductCard key={product.title} {...product}/>  )}
        </div>
    );
};

const actions = {
  fetchCategories
}

 const mapState = (state) => ({
     products: state.product
 });

export default connect(mapState,actions)(CategoryProducts);
