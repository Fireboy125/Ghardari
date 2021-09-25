import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/index";
import Login from "./pages/loginPage/Login";
import ProductDetails from "./components/productDetail";
<<<<<<< HEAD

=======
import Navbar from "./components/Navbar/Navbar";
>>>>>>> 6b5b2359f002264614074b5428d02c3085319d82
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/category" component={Category} />
<<<<<<< HEAD
          <Route exact path="/product" component={ProductDetails}/>
=======
          <Route exact path="/product" component={ProductDetails} />
>>>>>>> 6b5b2359f002264614074b5428d02c3085319d82
          {/* <Route exact path="/category:category" component={ProductDetails} /> */}
          <Route exact path="/home" component={Home} />
          <Route>Error</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
