import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Ut sit amet magna. Cras a ligula eu urna dignissim viverra. Nullam tempor leo porta ipsum. Praesent purus. Nullam consequat. Mauris dictum sagittis dui.
                </p>
                <button className="reserve-button">Reserve a table</button>
            </div>
            <div className="hero-image">
                <img src="/food.jpg" alt="Delicious food" />
            </div>
        </section>
    );
}

export default HeroSection;