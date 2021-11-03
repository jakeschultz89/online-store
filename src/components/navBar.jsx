import "./navBar.css";

import { Link } from 'react-router-dom';
import { useContext } from "react";
import StoreContext from "../context/storeContext";

function NavBar() {
    const cart = useContext(StoreContext).cart;



  return (
    <div className="myNav">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/#">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
            <Link className="btn btn-outline-light" to="/cart">
              <span className="badge bg-primary me-2">{cart.length}</span>
              View Cart
            </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
