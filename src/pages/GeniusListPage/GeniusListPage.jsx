import React, { useEffect, useState } from "react";

// Styles
import './GeniusListPage.css';

// Components
import GeniusCard from "../../components/GeniusCard/GeniusCard";
import Footer from "../../components/Footer/Footer";

function GeniusListPage() {

    // States
    const [geniusList, setGeniusList] = useState([]);

    // Action & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setGeniusList(data);
            });
    }, []);

    return (
        <div className="genius-list-wrapper">
            <div id="intro-text">
                <h1>Find your Favourite Genius Here!</h1>
            </div>

            <div id="genius-list">
                {geniusList.map((userData, key) => {
                    return <GeniusCard 
                        key={`/users-${userData.id}`} 
                        userData={userData}
                    />;
                })}
            </div>

            <br></br>
            <footer className="footer-container">
                <Footer />
            </footer>
        </div>
    );
}

export default GeniusListPage;