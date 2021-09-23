import { Switch, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home/Index";
import Category from "./pages/Catagory";

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={Category} /> */}
        <Route exact path="/category:category" component={Category} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
