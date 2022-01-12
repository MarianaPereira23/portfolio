import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navigation/Header';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/about" element={<></>}/>
        <Route path="/projects" element={<></>}/>
      </Routes>
    </div>
  );
}

export default App;
