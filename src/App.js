import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyContaier from './components/MyContainer';
import About from './components/About';
import React, { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<MyContaier />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
