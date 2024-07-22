import React from 'react';
import './Specials.css';

function Specials() {
    return (
        <section className="specials-section">
            <div className="specials-header">
                <h2>Specials</h2>
                <button className="online-menu-button">Online Menu</button>
            </div>
            <div className="specials-container">
                <div className="special-item">
                    <img src="/salad.jpg" alt="Greek Salad" />
                    <h3>Greek salad <span>$12.00</span></h3>
                    <p>Ut sit amet magna. Cras a ligula eu urna dignissim viverra. Nullam tempor leo porta ipsum.</p>
                    <button>Order a delivery</button>
                </div>
                <div className="special-item">
                    <img src="/bruschetta.png" alt="Bruschetta" />
                    <h3>Bruschetta <span>$5.99</span></h3>
                    <p>Ut sit amet magna. Cras a ligula eu urna dignissim viverra. Nullam tempor leo porta ipsum.</p>
                    <button>Order a delivery</button>
                </div>
                <div className="special-item">
                    <img src="/dessert.jpg" alt="Lemon Dessert" />
                    <h3>Lemon dessert <span>$5.00</span></h3>
                    <p>Ut sit amet magna. Cras a ligula eu urna dignissim viverra. Nullam tempor leo porta ipsum.</p>
                    <button>Order a delivery</button>
                </div>
            </div>
        </section>
    );
}

export default Specials;