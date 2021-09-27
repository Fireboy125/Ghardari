import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/index";
import Login from "./pages/loginPage/Login";
import ProductDetails from "./components/productDetail";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import AddToCart from "./components/AddToCart/AddToCart";

import AddCart from "./pages/AddCart";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App() {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/category/:id" component={Category} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/cart" component={AddToCart} />
          {/* <Route exact path="/category:category" component={ProductDetails} /> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/addcart" component={AddCart}/>
          {/* <Route>Error</Route> */}
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
