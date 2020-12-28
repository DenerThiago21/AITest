import React, { Component } from 'react';

import Evolution from './pages/Evolution';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Evolution />
    </div>
  );
}

export default App;
