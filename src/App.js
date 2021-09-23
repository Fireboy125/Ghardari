import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Home from "./pages/Home/Index";
import Category from "./pages/Catagory";
=======
// import Home from "./pages/Home/Home.js";
import Home from "./pages/Home/Home";
// import Category from "./pages/Catagory";
import Login from "./pages/loginPage/Login";
>>>>>>> 4b60c5fbac45c83028275c8d8295d117bcd0a314

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/abc" component={Category} /> */}
          {/* <Route exact path="/category:category" component={Category} /> */}
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
