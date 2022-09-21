import React from 'react';
import '../../App.css';
import DailytrackerPage from '../DailytrackerPage';
import Navbar2 from '../Navbar2';
import Navbar3 from '../Navbar3';

function Dailytracker() {
  return (
    <div>
      <Navbar2/>
      <Navbar3/>
      <DailytrackerPage/>
    </div>
  );
}

export default Dailytracker;