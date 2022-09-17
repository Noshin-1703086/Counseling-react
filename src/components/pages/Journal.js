import React from 'react';
import '../../App.css';
import JournalPage from '../JournalPage';
import Navbar2 from '../Navbar2';
import Navbar3 from '../Navbar3';

function Journal() {
  return (
    <div>
      <Navbar2/>
      <Navbar3/>
      <JournalPage/>
    </div>
  );
}

export default Journal;