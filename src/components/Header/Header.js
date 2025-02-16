import React, { useState } from 'react';
import '../../App.css';
import './Header.css'
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <header className="header">
      <div className="header-left">
      <div class="logo">
        <Link to="/" className="logo-link"><span class="part1">eS</span><span class="part2">Say</span></Link>
      </div>
      </div>
      <div className="header-right">
      {!isLoggedIn ? (
          <>
          <div className="nav-container">
            <div className="header-right-content">
              {/* 
              <Link to="/"><button className="btn">главная</button></Link>
              <Link to="/essays"><button className="btn">сочинения</button></Link>
              <button className="btn">профиль</button> */}
              <Link to="/" className={currentUrl==="/" ? "active-link": "link"}>главная</Link>
              <Link to="/variants" className={currentUrl==="/variants" ? "active-link": "link"}>варианты</Link>
              <Link to="/essays" className={currentUrl==="/essays" ? "active-link": "link"}>сочинения</Link>
              <Link to="/profile" className={currentUrl==="/profile" ? "active-link": "link"}>профиль</Link>
            </div>
              <div className="checks">доступно проверок: 2</div>
            </div>
          
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
