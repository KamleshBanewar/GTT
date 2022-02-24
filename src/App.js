import React from 'react';
import './App.css';
import Home from './Components/Home';
import Services from './Components/Servises';
import About from './Components/About';
import Contact from './Components/Contact';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
