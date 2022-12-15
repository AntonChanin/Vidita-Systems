
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ShoppingCheckpoint from './page/ShoppingCheckpoint';
import './App.css'

function App() {

  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<ShoppingCheckpoint />} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
