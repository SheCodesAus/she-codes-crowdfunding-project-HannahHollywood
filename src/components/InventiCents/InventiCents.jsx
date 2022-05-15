import React from "react";

// Styles
import './InventiCents.css';

function InventiCents() {
    return (
        <>
        <div className="inventicents-container">
            <div className="inventi-title">
                <h1>
                    Page Still Being Built <span role="img" aria-label="Tool">🛠</span>
                </h1>
                    <h2>..In the meantime, this Invention is looking pretty smart <span role="img" aria-label="Eyes">👀</span></h2>
                    <button className="inventicents-button">
                        <a href="https://serene-ravine-83725.herokuapp.com/project/2" target="_blank" rel="noopener noreferrer">Inventi Cents-Inator <span role="img" aria-label="Pray">🙏</span></a>
                    </button>
            </div>
            <br></br>
            <div>
                <img id="inventi-cents" src={`${process.env.PUBLIC_URL}/assets/images/InventiCents.webp`} alt="website currency"/>
            </div>
        </div>
        </>
    );
};

export default InventiCents;