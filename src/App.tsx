import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import LevelTest from './pages/LevelTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/LevelTest" element={<LevelTest />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
