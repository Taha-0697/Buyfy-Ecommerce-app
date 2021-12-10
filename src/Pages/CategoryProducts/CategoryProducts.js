import React,{useEffect} from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {fetchCategories,clearProducts} from "../../Redux/products/productsActions"
import Testing from "../../Test/Testing";

const CategoryProducts = ({
    match: {
        params: { category },
    },fetchCategories,products,clearProducts
}) => {
    //console.log(products);

    useEffect(() => {
      // CDM 
      fetchCategories(category)
      return () => {
          clearProducts()
      }
    }, [])

   
   console.log("Products .........",products)

    return (
        <div>
            <h1>{category}</h1>
           {products.map((product)=><ProductCard key={product.title} {...product}/>  )}
        </div>
    );
};

const actions = {
  fetchCategories,
  clearProducts
}

 const mapState = (state) => ({
     products: state.product
 });

export default connect(mapState,actions)(CategoryProducts);
