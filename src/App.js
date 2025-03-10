import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
};

export default App;
