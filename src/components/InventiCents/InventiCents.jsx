import React from "react";

function InventiCents() {
    return (
        <>
        <div className="inventicents-container">

        <div>
            <h1>
                Page Still Being Built <span role="img" aria-label="Tool">🛠</span>
            </h1>
                <h1>..In the meantime, this Invention is looking pretty smart <span role="img" aria-label="Eyes">👀</span></h1>
                <button>
                    <a href="https://serene-ravine-83725.herokuapp.com/project/2" target="_blank" rel="noopener noreferrer">Inventi Cents-Inator <span role="img" aria-label="Pray">🙏</span></a>
                </button>
            </div>

            <img id="inventi-cents" src={`${process.env.PUBLIC_URL}/assets/images/InventiCents.webp`} alt="website currency"/>
        </div>
        </>
    );
};

export default InventiCents;