import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Dashboard_C from './components/pages/Dashboard_C';
import IPA from './components/pages/IPA';
import Confirm from './components/pages/Confirm';
import Report from './components/pages/Report';
import Breathing from './components/pages/Breathing';
import Journal from './components/pages/Journal';
import Notes from './components/pages/Notes';
import Book_r from './components/pages/Book_r';
import Confirm_r from './components/pages/Confirm_r';
import Sessiontracker from './components/pages/Sessiontracker';
import Dailytracker from './components/pages/Dailytracker';
import PrivateRoutes from './utils/PrivateRoutes';
import PrivateRoutes2 from './utils/PrivateRoutes2';

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
        <Route path='/IPA' element={<IPA/>} />
        <Route path='/Confirm' element={<Confirm/>}/>
        <Route element={<Dashboard_C/>} path="/Dashboard_C"/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/breathing' element={<Breathing/>}/>
        <Route path='/journal' element={<Journal/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/book_r' element={<Book_r/>}/>
        <Route path='/Confirm_r' element={<Confirm_r/>}/>
        <Route path='/sessiontracker' element={<Sessiontracker/>}/>
        <Route path='/dailytracker' element={<Dailytracker/>}/>
      </Route>
     </Routes>
     </Router>
    </>
  );
}

export default App;
