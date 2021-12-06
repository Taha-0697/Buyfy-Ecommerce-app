import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/products/productsActions';
import { catagorizedProducts } from "../../Utility/products";
import CatergoryListitems from "../CategoryListItems/CategoryListItems"


const CategoryList = ({fetchProducts,categories}) => {
    console.log("Category",categories)
    useEffect(() => {
    //CDM
    fetchProducts() 
    },[])
    
    return (
        <div>
            <h1>Category List</h1>
       {categories.map((cat)=> <CatergoryListitems  key={cat.category} {...cat} /> )}

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