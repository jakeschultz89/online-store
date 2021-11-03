import "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home-page">
            <h1>Welcome to Trader Jake's</h1>
            <div className="home-pictures">
                <div className="home-pic1">
                <Link to="/catalog">
                    <img className="home-img" src="/img/grocery-bag.jpeg" alt="apple" />
                    <h3>Groceries</h3>
                </Link>
                </div>
                <div className="home-pic2">
                <Link to="/about">
                    <img className="home-img" src="/img/about.jpeg" alt="about" />
                    <h3>About Us</h3>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;