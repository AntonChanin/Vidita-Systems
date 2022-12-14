
import React, { StrictMode } from 'react';
import { Route, Router, Routes } from 'react-router-dom';

import ShoppingCheckpoint from './page/ShoppingCheckpoint';
import './App.css'
import Navigation from './components/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<ShoppingCheckpoint />} />
        </Routes>
    </div>
  )
}

export default App
