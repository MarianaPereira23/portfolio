import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navigation/Header';
import Side from './components/Navigation/Side';
import Home from './components/Content/Home';
import About from './components/Content/About';
import Projects from './components/Content/Projects';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Side />
      <section className="page-right">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
