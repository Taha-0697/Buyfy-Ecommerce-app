import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase";
import { v4 as uuid } from "uuid";
import { SET_PRODUCTS } from './productsConstants';


// ADMIN SIDE STUFF 
export const uploadProduct = (productObj) => async () => {
  try {
    //     console.log(productObj);

    // 1- send file to storage and get download URl
    const uploadImageRef = storage.child(`products/img-${uuid()}`);
    const filelistener = uploadImageRef.put(productObj.coverPhoto);

    // uploadImageRef.on(Takes 4 arguments)

    // uploadImageRef.on(
    // event_type ,
    // cb- file state ,
    // cb - error ,
    // cb - will trigger after upload)

    filelistener.on(
      // event_type ,
      "state_changed",

      // cb- file state ,
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },

      // cb - error ,
      (error) => {
        console.log(error);
      },

      // cb - will trigger after upload / completion
      async () => {
        const downloadUrl = await uploadImageRef.getDownloadURL();
        console.log(downloadUrl);

        // 2- modify productObj with coverPhoto url and createdAt

        productObj.coverPhoto = downloadUrl;
        productObj.createdAt = serverTimestamp();
        productObj.cost = parseFloat(productObj.cost);
        productObj.quantity = parseInt(productObj.quantity);
        console.log(productObj);

        // 3- create doc in firestore

        await firestore.collection("products").add(productObj);
      }
    );
  } catch (error) {
    console.log(error);
  }
};


// Product SIDE STUFF

const catagorizedProducts = (productsArr) => {
  console.log("%cCategorized Product Function: \n","color:green;font-weight:bolder" ,productsArr)

  // 1- initialize catagories Array
  
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
  
  const categoriesArr = [];
  // 2- loop through products
  console.log("%cProduct Category Exist or Not:","color:green;font-weight:bolder")
  for(const product of productsArr){
      const categoryName = product.category;
     // console.log(categoryName);

    // 3- Loop through categoriesArr / check if category exist in categoriesArr
    const isCategoryExist= categoriesArr.some((categoryObj) => categoryObj.category === categoryName)
    console.log("%cIsCategoryExist:","color:green;font-weight:bolder",isCategoryExist)
    
    // If Category Exists
    if(isCategoryExist){
      // push product in products field in categoryObj 
      categoriesArr= categoriesArr.map((categoryObj) => {
        if(categoryObj.category === categoryName){
          categoryObj.products.push(product)
       // console.log(categoryObj)
        }
      })
    }
     // If Category Doesn't Exists
    else{
      // create new categoryObj
      const newCategoryObj = {
        category: product.category,
        products: [product]
      }
      // push newCategoryObj in categoriesArr
      categoriesArr.push(newCategoryObj) 
    }
  
  }    
  console.log("%cCategories:","color:green;font-weight:bolder",categoriesArr)
}


export const fetchProducts = () => async (dispatch) => {
try {
  const query = await firestore.collection("products").get();
  const products =[];
  query.docs.forEach((doc) => {
  products.push(doc.data())
  })
console.log("%cProducts Array: \n", "font-weight:bolder;color:green", products);
  catagorizedProducts(products);


  // dispatch({
  //   type: SET_PRODUCTS,
  //   payload: {
  //     products, // Array
  //   }, 
  // })

} catch (error) {
  console.log(error)
}
}