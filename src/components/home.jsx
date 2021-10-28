import "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home-page">
            <h1>Welcome to Trader Jake's</h1>
            <div className="home-pictures">
                <Link to="/catalog">
                    <img src="/img/grocery-bag.jpeg" alt="apple" />
                    <h3>Groceries</h3>
                </Link>
                <Link to="/about">
                    <img src="/img/about.jpeg" alt="about" />
                    <h3>About Us</h3>
                </Link>
            </div>
        </div>
    )
}

export default Home;