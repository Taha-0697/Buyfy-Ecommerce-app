import {
  auth,
  firestore,
  googleAuthProvider,
  serverTimestamp,
} from "../../Firebase/Firebase";
import firebase from "../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";

// export const setuser = (user) => async (dispatch) => {
//   try {
//     dispatch({
//       type: SET_USER,
//       payload: {
//         user,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// Both upper and lower function are working same
export const setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

// remmove user
export const removeUser = () => ({
  type: REMOVE_USER,
});

export const signup =
  ({ email, password, fullname }) =>
  async () => {
    try {
      // create user on firebase auth section
      const user = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);

      // save user data to firestore
      const {
        user: { uid },
      } = user;

      const userInfo = {
        fullname,
        email,
        password,
        createdAt: serverTimestamp(),
      };
      console.log(userInfo);
      await firestore.collection("users").doc(uid).set(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

export const signin =
  ({ email, password }) =>
  async () => {
    try {
      // signin user on firebase auth section
      const user = await auth.signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

export const signout = () => async () => {
  try {
    // signout user from firebase auth
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

export const googleSignin = () => async (dispatch) => {
  try {
    // signin user in firebase auth (google)
    const googleUser = await auth.signInWithPopup(googleAuthProvider);
    console.log(googleUser);

    const {
      user: { displayName, email, uid },
      additionalUserInfo: { isNewUser },
    } = googleUser;

    // if new user ->  add info to fire store
    if (isNewUser) {
      //saving the data in firebase
      const userInfo = {
        fullname: displayName,
        email,
        createdAt: serverTimestamp(),
      };
      console.log(userInfo);
      await firestore.collection("users").doc(uid).set(userInfo);
    }

    // setting up redux state or set user data to state
    const userDataForState = {
      fullname: displayName,
      email,
      uid,
    };

    // if 2 functions are in same file you have to call function in  dispatch()
    dispatch(setUser(userDataForState));
  } catch (error) {
    console.log(error);
  }
};

//app auth statte (centeralized auth state manager)
export const FirebaseAuthListener = () => async (dispatch) => {
  try {
    // firebase auth listener
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        console.log("%cUser SignIn", "font-weight:bolder;color:green", user);
        const { uid } = user;
        const query = await firestore.collection("users").doc(uid).get();
        const userData = query.data();
        // console.log(userData);

        // setting up redux state
        const { fullname, email, password } = userData;
        const userDataForState = {
          fullname,
          email,
          password,
          uid,
        };

        // if 2 functions are in same file you have to call function in  dispatch()
        dispatch(setUser(userDataForState));
        console.log(
          "%cUser Data: ",
          "font-weight:bolder;color:green",
          userDataForState
        );
      } else {
        // User is signed out
        // ...
        console.log("%cNo User", "font-weight:bolder;color:green");
        // set auth to null
        dispatch(removeUser());
      }
    });
  } catch (error) {
    console.log(error);
  }
};
