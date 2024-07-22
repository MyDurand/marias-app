import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ConfirmedBooking from './ConfirmedBooking'; // Import the ConfirmedBooking component
import './App.css';

function App() {

  return (
    <Router>
      <Header className="App" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;