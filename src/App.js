import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";
import Cart from "./components/cart";
import Admin from "./components/admin";
import GlobalContext from "./context/globalContext";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
    <GlobalContext>
      <BrowserRouter>
        <NavBar />

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/admin" exact component={Admin} />


        <Footer />
      </BrowserRouter>
    </GlobalContext>
    </div>
  );
}

export default App;