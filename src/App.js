import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/index";
import Login from "./pages/loginPage/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/category" component={Category} />
          {/* <Route exact path="/category:category" component={Category} /> */}
          <Route exact path="/home" component={Home} />
          <Route>Error</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
