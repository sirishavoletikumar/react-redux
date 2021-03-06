//import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:productId" exact component={ProductDetail}/>
      <Route>404 not found</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
