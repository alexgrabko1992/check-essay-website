import React from 'react';
import '/Users/stella/diploma/front/check-essay-website/src/App.js';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;