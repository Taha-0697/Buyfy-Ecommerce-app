
export const catagorizedProducts = (productsArr) => {
    console.log("%cCategorized Product Function: \n","color:green;font-weight:bolder" ,productsArr)
  
    // 1- initialize catagories Array
      
    var categoriesArr = [];
    var categoryName;
    var isCategoryExist;  
    var newCategoryObj;


     // Structure of catagories Array
    // const catagories = [
    //   {
    //     category:"men",
    //     product: [{},{},{}]
    //   },
    //   {
    //     category:"glass",
    //     product: [{},{},{}]
    //   },
    //   {
    //     category:"Hoodie",
    //     product: [{},{},{}]
    //   }
    // ]
    
  
    // 2- loop through products
    // console.log("%cProduct Category Exist or Not:","color:green;font-weight:bolder")
    for(const product of productsArr){
      categoryName = product.category;
       // console.log(categoryName);
  
      // 3- Loop through categoriesArr / check if category exist in categoriesArr
      isCategoryExist= categoriesArr.some((categoryObj) => categoryObj.category === categoryName)
    //   console.log("%cIsCategoryExist:","color:green;font-weight:bolder",isCategoryExist)
      
      // If Category Exists
      if(isCategoryExist){
        // push product in products field in categoryObj 
          categoriesArr= categoriesArr.map((categoryObj) => {
            if(categoryObj.category === categoryName){
              categoryObj.products.push(product)
              return categoryObj
            }
            else{
              return categoryObj
            }
        })
      }
       // If Category Doesn't Exists
      else{
        // create new categoryObj
        newCategoryObj = {
          category: product.category,
          products: [product]
        }
        // push newCategoryObj in categoriesArr
        categoriesArr.push(newCategoryObj) 
      }
    
    }  
    console.log("\n%cCategories:","color:green;font-weight:bolder",categoriesArr)
    return categoriesArr;  
  }