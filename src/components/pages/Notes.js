import React from 'react';
import '../../App.css';
import NotesPage from '../NotesPage';
import Navbar2 from '../Navbar2';
import Navbar3 from '../Navbar3';

function Notes() {
  return (
    <div>
      <Navbar2/>
      <Navbar3/>
      <NotesPage/>
    </div>
  );
}

export default Notes;