import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Faq from './components/pages/Faq';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
  return (
    <>
    <Router>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/faq' element={<Faq/>} />
      <Route path='/resources' element={<Resources/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Login' element={<Login/>} />
      <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard/>} path="/Dashboard"/>
      </Route>
     </Routes>
     </Router>
    </>
  );
}

export default App;
