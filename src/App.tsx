import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navigation/Header';
import Side from './components/Navigation/Side';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Side />
      <section className="page-right">
        <Routes>
          <Route path="/" element={<></>}/>
          <Route path="/about" element={<></>}/>
          <Route path="/projects" element={<></>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
