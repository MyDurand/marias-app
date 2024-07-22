import React from 'react';
import './Testimonials.css';

function Testimonials() {
    return (
        <section className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                <div className="testimonial-item">
                    <div className="rating">⭐⭐⭐⭐⭐</div>
                    <div className="name">John Doe</div>
                    <p>Best restaurant in town! The food is amazing and the service is top-notch.</p>
                </div>
                <div className="testimonial-item">
                    <div className="rating">⭐⭐⭐⭐⭐</div>
                    <div className="name">Jane Smith</div>
                    <p>Amazing atmosphere and delicious food. Highly recommend the bruschetta.</p>
                </div>
                <div className="testimonial-item">
                    <div className="rating">⭐⭐⭐⭐⭐</div>
                    <div className="name">Michael Brown</div>
                    <p>The desserts are to die for! Can't wait to come back and try more dishes.</p>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;