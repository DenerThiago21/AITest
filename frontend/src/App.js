import React, { Component } from 'react';

import Header from './components/Header';
import Main from './pages/main';
//import Sidebar from './components/Sidebar';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
