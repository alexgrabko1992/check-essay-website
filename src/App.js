import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;