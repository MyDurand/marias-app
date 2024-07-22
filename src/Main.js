/* global fetchAPI, submitAPI */

import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import Specials from './Specials';
import BookingForm from './BookingForm';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';
import './Main.css';

const initializeTimes = () => {
  if (typeof fetchAPI !== 'function') {
    throw new Error('fetchAPI is not defined');
  }
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  if (typeof fetchAPI !== 'function') {
    throw new Error('fetchAPI is not defined');
  }
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (typeof submitAPI !== 'function') {
      throw new Error('submitAPI is not defined');
    }
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <main className="main-section">
      <HeroSection />
      <Specials />
      <section className="booking-section">
        <h2>Reserve a Table</h2>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </section>
      <Testimonials />
      <AboutSection />
    </main>
  );
}

// Export the functions for testing
export { initializeTimes, updateTimes };
export default Main;
