import React, { Component } from 'react';

import Header from './components/Header';
import Evolution from './pages/Evolution';
//import Sidebar from './components/Sidebar';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Evolution />
    </div>
  );
}

export default App;
