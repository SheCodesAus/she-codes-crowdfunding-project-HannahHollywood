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
                    <li className="slide">
                        <Link to="/category/Diabolical"><img className="featured-image" src={`${process.env.PUBLIC_URL}/assets/images/DocBrown.png`} alt="scientist"/></Link>
                        <div className="feature-div">
                            <h2 className="feature-title"><span>
                                Spotlight</span> On:
                            </h2>
                            <h4 className="feature-txt">
                                This week's most popular Invention <span>Category</span> is:
                            </h4>
                            <Link to="/category/Diabolical"><h4 className="feature-txt">Diabolical <span role="img" aria-label="Evil">😈</span></h4></Link>
                        </div>
                    </li>

                    {/* <li className="slide" data-active>
                        <Link to="/projects/"><img className="featured-image" src={`${process.env.PUBLIC_URL}/assets/images/DocBrown.png`}/></Link>
                        <div className="feature-div">
                            <h2 className="feature-title">Fund-Inator Inventions</h2>
                            <h4 className="feature-txt">Take a look through the Inventions List. Pledge Inventi-Cents <span role="img" aria-label="money">⏳</span> to help your local Genius!</h4>
                        </div>
                    </li> */}

                    <li className="slide"> 
                        <Link to="/project/6"><img className="featured-image" src={`${process.env.PUBLIC_URL}/assets/images/Doof-TimeTravelInator.webp`} alt="invention"/></Link>
                        <div className="feature-div">
                            <Link to="/project/6">
                                <h2 className="feature-title">
                                    Featured <span>Project!</span>
                                </h2>
                                <h4 className="feature-txt">
                                    Help <span>Dr Doofenschmirtz</span> Build the world's first <span>Time Travel-Inator!</span>
                                </h4>
                            </Link>
                        </div>
                    </li>

                    <li className="slide" data-active>
                        <Link to="/projects/"><img className="featured-image" src={`${process.env.PUBLIC_URL}/assets/images/Inator.jpeg`} alt="inator"/></Link>
                        <div className="feature-div">
                            <Link to="/projects/">
                                <h2 className="feature-title">
                                    Welcome to <br></br><span>The Fund-Inator!</span>
                                </h2>
                                <h4 className="feature-txt">
                                    A website where geniuses can fund their diabolical Invention-Inators <span role="img" aria-label="Evil">😈</span>
                                </h4>
                                <Link to="/purchase/inventi-cents/">
                                    <h4 className="purchase-link">
                                        Click Here to Purchase Inventi-Cents!
                                    </h4>
                                </Link>
                            </Link>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    );
}

export default FeatureCarousel;