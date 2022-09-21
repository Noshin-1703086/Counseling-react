import React from 'react';
import '../../App.css';
import SessiontrackerPage from '../SessiontrackerPage';
import Navbar2 from '../Navbar2';
import Navbar3 from '../Navbar3';

function Sessiontracker() {
  return (
    <div>
      <Navbar2/>
      <Navbar3/>
      <SessiontrackerPage/>
    </div>
  );
}

export default Sessiontracker;