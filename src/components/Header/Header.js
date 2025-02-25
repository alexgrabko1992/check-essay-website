import React, { useState, useEffect } from 'react';
import '../../App.css';
import './Header.css'
import { Link, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [countChecks, setCountChecks] = useState(0);
  const location = useLocation();
  const currentUrl = location.pathname;
  const cookies = new Cookies();

  useEffect(() => {
    // const fetchUserInfo = async () => {
    //   try {
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //           'Content-Type': 'application/json'
    //       },
    //       credentials: "include",
    //       withCredentials: true
    //     };
    //     const response = await fetch('http://localhost:8080/users/info', options);
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     setCountChecks(data["count_checks"])
    //   } catch (error) {
    //     console.error('There was a problem with the fetch operation:', error);
    //   }
    // };
  
    const session = cookies.get("session")
    if (session) {
      setIsLoggedIn(true);
      console.log('setIsLoggedIn:', true);
    } else {
      setIsLoggedIn(false);
      console.log('setIsLoggedIn:', false);
    }
    // fetchUserInfo();
  }, []);
  return (
    <header className="header">
      <div className="header-left">
      <div class="logo">
        <Link to="/" className="logo-link"><span class="part1">eS</span><span class="part2">Say</span></Link>
      </div>
      </div>
      <div className="header-right">
      {isLoggedIn ? (
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
              {/* <div className="checks">доступно проверок: {countChecks}</div> */}
            </div>
          </>
        ) : (
          <>
            <div className="nav-container">
              <div className="header-right-content">
                <Link to="/" className={currentUrl==="/" ? "active-link": "link"}>главная</Link>
                <Link to="/essays" className={currentUrl==="/essays" ? "active-link": "link"}>сочинения</Link>
                <Link to="/register"><button className="reg-btn">регистрация</button></Link>
                <Link to="/welcome"><button className="login-btn">войти</button></Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
