import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import VariantsPage from './pages/VariantsPage/VariantsPage';
import MainPage from './pages/MainPage/MainPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import EssayPage from './pages/EssayPage/EssayPage';
import EssaysPage from './pages/EssaysPage/EssaysPage';
import EssayInputPage from './pages/EssayInputPage/EssayInputPage';
import ResultPage from './pages/ResultPage/ResultPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/variants" element={<VariantsPage />} />
        <Route path="/essays" element={<EssaysPage />} />
        <Route path="/essays/:id" element={<EssayPage />} />
        <Route path="/essay-input/:id" element={<EssayInputPage />} />
        <Route path="/results/:id" element={<ResultPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;