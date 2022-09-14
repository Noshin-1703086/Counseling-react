import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import About2 from './components/pages/About2';
import Services from './components/pages/Services';
import Services2 from './components/pages/Services2';
import Faq from './components/pages/Faq';
import Faq2 from './components/pages/Faq2';
import Resources from './components/pages/Resources';
import Resources2 from './components/pages/Resources2';
import Contact from './components/pages/Contact';
import Contact2 from './components/pages/Contact2';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes'
import PrivateRoutes2 from './utils/PrivateRoutes2'

function App() {
  return (
    <>
    <Router>
     <Routes>
     <Route element={<PrivateRoutes2 />}>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Login' element={<Login/>} />
     </Route>
      <Route element={<PrivateRoutes />}>
        <Route element={<Dashboard/>} path="/Dashboard"/>
        <Route path='/about2' element={<About2/>} />
        <Route path='/services2' element={<Services2/>} />
        <Route path='/faq2' element={<Faq2/>} />
        <Route path='/resources2' element={<Resources2/>} />
        <Route path='/contact2' element={<Contact2/>} />
      </Route>
     </Routes>
     </Router>
    </>
  );
}

export default App;
