import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-box">
        <a href="/" className="back-link">на главную</a>
        <h1>Заполните информацию</h1>
        <form className="register-form">
          <input type="email" placeholder="почта" className="input-field" />
          <input type="text" placeholder="никнейм" className="input-field" />
          <input type="password" placeholder="пароль" className="input-field" />
          <input type="password" placeholder="повторите пароль" className="input-field" />
        </form>
        <button type="submit" className="register-button">зарегистрироваться</button>
      </div>
    </div>
  );
}

export default RegisterPage;
