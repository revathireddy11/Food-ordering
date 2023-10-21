import React from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import Background from "../Images/background.jpg";
import "../Styles/HomeStyles.css";

const Home = () => {
    return (
        <Layout>
        <div className="home" style={{ backgroundImage: `url(${Background})`}}>
            <div className="headerContainer">
                <h1>Food Website</h1>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
        </Layout>
    );
};

export default Home;