import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentcation from "./Pages/Authentcation/Authentcation";
import Category from "./Pages/Category/Category";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
import Checkout from "./Pages/Checkout/Checkout";
import { useEffect } from "react";
import { FirebaseAuthListener } from "./Redux/auth/authActions";
import { connect } from "react-redux";

function App({ FirebaseAuthListener }) {
  useEffect(() => {
    //CDM
    FirebaseAuthListener();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth" component={Authentcation} />
        <Route path="/category" component={Category} />
        <Route path="/category-products" component={CategoryProducts} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}
const actions = {
  FirebaseAuthListener,
};

export default connect(null, actions)(App);
