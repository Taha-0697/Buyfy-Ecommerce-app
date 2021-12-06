import React,{useEffect} from 'react'
import CategoryListItems from '../CategoryListItems/CategoryListItems'
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/products/productsActions';
import { catagorizedProducts } from "../../Utility/products";


const CategoryList = ({fetchProducts,categories}) => {
    console.log("Category",categories)
    useEffect(() => {
    //CDM
    fetchProducts() 
    }, [fetchProducts])
    
    return (
        <div>
            <h1>Category List</h1>
            <CategoryListItems/>
            <CategoryListItems/>
            <CategoryListItems/>

        </div>
    )
}

var actions = {
    fetchProducts,
  }
  
  var mapState = (state) =>({
    categories: catagorizedProducts(state.product),
  })

export default connect(mapState,actions)(CategoryList);