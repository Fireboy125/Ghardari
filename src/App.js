import { Switch,Route } from "react-router";
import "./App.css";
import Category from "./pages/Catagory";

function App() {
  return <div>
          <Switch>
              <Route exact path="/" component={Category}/>
              <Route exact path="/category:category" component={Category}/>
            </Switch>
        </div>
}

export default App;
