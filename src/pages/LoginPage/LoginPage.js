import React, { useState } from 'react';
import './LoginPage.css';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Функция для валидации email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Обработчик нажатия на кнопку
  const handleLogin = () => {
    if (!email) {
      setMessage('введите электронную почту!');
    } else if (!validateEmail(email)) {
      setMessage('введите электронную почту корректно🙄');
    } else {
      setMessage('Вы успешно вошли!');
    }
  };

  setTimeout(() => {
    setMessage('');
  }, 4000);

  // Обработчик изменения поля email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <body className='login-body'>
      <div className="login-container">
        <div className="back-link-container">
          <a href="/" className="back-link">на главную</a>
        </div>
        <h1>Войти</h1>
        <p>Введите почту, чтобы войти или зарегистрироваться</p>
        <div className="input-group">
          <input
            type="email"
            placeholder="электронная почта"
            value={email}
            onChange={handleEmailChange}
            className={`email-input ${email ? 'active' : ''}`}
          />
          <button onClick={handleLogin} className="login-button">
            продолжить
          </button>
        </div>
        {message && <div className="message">{message}</div>}
      </div>
    </body>
  );
}

export default RegistrationPage;
