import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-labelledby="booking-form-title">
      <h2 id="booking-form-title">Reserve a Table</h2>
      
      <label htmlFor="date">
        Date:
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          aria-required="true"
          data-testid="bookingDate"
        />
      </label>
      
      <label htmlFor="time">
        Time:
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          aria-required="true"
          data-testid="bookingTime"
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </label>
      
      <label htmlFor="guests">
        Number of guests:
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          required
          aria-required="true"
          data-testid="bookingGuests"
        />
      </label>
      
      <label htmlFor="occasion">
        Occasion:
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
          aria-required="true"
          data-testid="bookingOccasion"
        >
          <option value="">Select an occasion</option>
          <option value="">No special event</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </label>
      
      <button type="submit" aria-label="Submit reservation" data-testid="bookingSubmit">Submit reservation</button>
    </form>
  );
}

export default BookingForm;