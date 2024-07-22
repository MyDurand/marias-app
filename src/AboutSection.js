import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Ut sit amet magna. Cras a ligula eu urna dignissim viverra. Nullam tempor leo porta ipsum. Praesent purus. Nullam consequat. Mauris dictum sagittis dui. Vestibulum sollicitudin consectetur wisi. In sit amet diam. Nullam malesuada pharetra risus.
        </p>
      </div>
      <div className="about-images">
        <div className="image image1">
            <img src={'/about1.jpg'} alt="About 1" />
        </div>
        <div className="image image2">
            <img src={'/about2.jpg'} alt="About 2" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;