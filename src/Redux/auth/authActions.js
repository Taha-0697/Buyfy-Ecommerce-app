import { auth, firestore, serverTimestamp } from "../../Firebase/Firebase";
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

export const signup =
  ({ email, password, fullname }) =>
  async (dispatch) => {
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

      // setting up redux state
      const userDataForState = {
        fullname,
        email,
        password,
        uid,
      };

      // if 2 functions are in same file you have to call function in  dispatch()
      dispatch(setUser(userDataForState));
    } catch (error) {
      console.log(error);
    }
  };

export const signin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      // signin user on firebase auth section
      const user = await auth.signInWithEmailAndPassword(email, password);
      console.log(user);

      // fetch user data from firestore
      const {
        user: { uid },
      } = user;
      const userData = await firestore.collection("users").doc(uid).get();
      console.log(userData.data());

      const { fullname } = userData.data();
      // setting up redux state
      const userDataForState = {
        fullname,
        email,
        password,
        uid,
      };

      // if 2 functions are in same file you have to call function in  dispatch()
      dispatch(setUser(userDataForState));
    } catch (error) {
      console.log(error);
    }
  };

export const signout = () => async (dispatch) => {
  try {
    // signout user from firebase auth
    await auth.signOut();

    // set auth to null
    dispatch(removeUser());
  } catch (error) {
    console.log(error);
  }
};

export const removeUser = () => ({
  type: REMOVE_USER,
});
