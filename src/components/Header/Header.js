import React from 'react';
import '../../App.css';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>check essay</h1>
        <p>сервис по подготовке к сочинению</p>
      </div>
      <div className="header-right">
        <button className="grey-btn">доступно проверок: 2</button>
        <Link to="/"><button className="btn">главная</button></ Link>
        <button className="btn">профиль</button>
      </div>
    </header>
  );
};

export default Header;
