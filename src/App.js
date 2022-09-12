import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Faq from './components/pages/Faq';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/faq' element={<Faq/>} />
      <Route path='/resources' element={<Resources/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Login' element={<Login/>} />
     </Routes>
     </Router>
    </>
  );
}

export default App;
