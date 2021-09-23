import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Category from "./pages/Catagory";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/category:category" component={Category} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
