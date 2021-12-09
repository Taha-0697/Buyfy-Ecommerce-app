import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase";
import { v4 as uuid } from "uuid";
import { SET_PRODUCTS } from "./productsConstants";
import { catagorizedProducts } from "../../Utility/products";
// import { catagorizedProducts } from "../../Utility/products";

// ADMIN SIDE STUFF
export const uploadProduct = (productObj) => async () => {
    try {
        //     console.log(productObj);

        // 1- send file to storage and get download URl
        const uploadImageRef = storage.child(`products/img-${uuid()}`);
        const filelistener = uploadImageRef.put(productObj.coverPhoto);

        // fileListener.on(Takes 4 arguments)

        // fileListener.on(
        // event_type ,
        // cb- file state ,
        // cb - error ,
        // cb - will trigger after upload)

        filelistener.on(
            // event_type ,
            "state_changed",

            // cb- file state ,
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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

export const fetchProducts = () => async (dispatch) => {
    try {
        const query = await firestore.collection("products").get();
        const products = [];
        query.docs.forEach((doc) => {
            products.push(doc.data());
        });
        console.log("%cProducts Array: \n", "font-weight:bolder;color:green", products);
        //  var category = catagorizedProducts(products);
        //   console.log(category);

        dispatch({
            type: SET_PRODUCTS,
            payload: {
                products, // Array
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const fetchCategories = (category)=> async (dispatch)=>{
  try {
        const query = await firestore.collection("products").where("category","==",category).get();
        const products = [];
        query.docs.forEach((doc) => {
            products.push(doc.data());
        });
        console.log("%cProducts Array: \n", "font-weight:bolder;color:green", products);
        dispatch({
          type: SET_PRODUCTS,
          payload: {
              products, // Array
          },
      });

  } catch (error) {
    console.log(error)
  }
}