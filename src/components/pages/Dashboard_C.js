import React from 'react';
import '../../App.css';
import DashboardPage2 from '../DashboardPage2';
import Navbar2 from '../Navbar2';
import Navbar3 from '../Navbar3';

function Dashboard_C() {
  return (
    <div>
      <Navbar2/>
      <Navbar3/>
      <DashboardPage2/>
    </div>
  );
}

export default Dashboard_C;