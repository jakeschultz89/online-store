import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Catalog />

      <Footer />
    </div>
  );
}

export default App;
