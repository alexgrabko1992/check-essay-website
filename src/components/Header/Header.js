import React, { useState } from 'react';
import '../../App.css';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="header">
      <div className="header-left">
        <h1>check essay</h1>
        <p>сервис по подготовке к сочинению</p>
      </div>
      <div className="header-right">
      {isLoggedIn ? (
          <>
            <button className="grey-btn">доступно проверок: 2</button>
            <Link to="/"><button className="btn">главная</button></Link>
            <button className="btn">профиль</button>
          </>
        ) : (
          <>
            <Link to="/register"><button className="reg-btn">регистрация</button></Link>
            <Link to="/login"><button className="btn">войти</button></Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
