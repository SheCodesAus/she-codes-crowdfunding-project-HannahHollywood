import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./FeatureCarousel.css"

function FeatureCarousel() {

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click",() => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        
            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length -1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })
    
    return(
        
        <div className="spotlight-header">
            <div className="carousel" data-carousel>
                <button className="carousel-button prev" data-carousel-button="prev">&#x3c;</button>
                <button className="carousel-button next" data-carousel-button="next">&#x3e;</button>

                <ul data-slides>
                    <li className="slide" data-active>
                        <Link to="/category/Diabolical"><img className="featured-image" src={`${process.env.PUBLIC_URL}/assets/images/DocBrown.png`} alt="scientist" fluid={true}/></Link>
                        <Link to="/category/Diabolical"><div className="feature-div">
                            <h2 className="feature-title">Spotlight On:</h2>
                            <h4 className="feature-txt">This week's most popular Invention Category is:</h4>
                            <h4 className="feature-txt">Diabolical <span role="img" aria-label="Evil">😈</span></h4>
                        </div></Link>
                    </li>

                    {/* <li className="slide" data-active>
                        <Link to="/projects/"><img className="featured-image" src={`${process.env.PUBLIC_URL}/assets/images/DocBrown.png`}/></Link>
                        <div className="feature-div">
                            <h2 className="feature-title">Fund-Inator Inventions</h2>
                            <h4 className="feature-txt">Take a look through the Inventions List. Pledge Inventi-Cents <span role="img" aria-label="money">⏳</span> to help your local Genius!</h4>
                        </div>
                    </li> */}

                    <li className="slide"> 
                        <Link to="/project/6"><img className="featured-image" src={`${process.env.PUBLIC_URL}/assets/images/Doof-TimeTravelInator.webp`} alt="invention" fluid={true} /></Link>
                        <Link to="/project/6"><div className="feature-div">
                            <h2 className="feature-title">Featured Project!</h2>
                            <h4 className="feature-txt">Help Dr Doofenschmirtz Build the world's first Time Travel-Inator!</h4>
                        </div></Link>
                    </li>

                    <li className="slide" data-active>
                        <Link to="/projects/"><img className="featured-image" src={`${process.env.PUBLIC_URL}/assets/images/Inator.jpeg`} alt="inator" fluid={true}/></Link>
                        <Link to="/projects/"><div className="feature-div">
                            <h2 className="feature-title">Welcome to <br></br>The Fund-Inator!</h2>
                            <h4 className="feature-txt">A website where geniuses can fund their diabolical inventions <span role="img" aria-label="Evil">😈</span></h4>
                            <Link to="/purchase/inventi-cents/"><h4 className="purchase-link">Click Here to Purchase Inventi-Cents: <span role="img" aria-label="money">💰</span></h4></Link>
                        </div></Link>
                    </li>

                </ul>
            </div>
        </div>

    );
}

export default FeatureCarousel;