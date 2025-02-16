import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Функция для валидации email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Обработчик нажатия на кнопку
  const handleLogin = async () => {
    if (!email) {
      setMessage('введите электронную почту!');
    } else if (!validateEmail(email)) {
      setMessage('введите электронную почту корректно🙄');
    } else {
      try {
        const response = await fetch(`http://localhost:8080/users/nickname?mail=${encodeURIComponent(email)}`);
        if (response.status === 200) {
          const data = await response.json();
          const nickname = data.nickname;
          navigate('/login', { state: { nickname, email } });
        } else if (response.status === 404) {
          navigate('/register');
        } else {
          setMessage('Ошибка при проверке пользователя');
        }
      } catch (error) {
        setMessage('Ошибка подключения к серверу');
      }
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
    <div className='login-body'>
      <div className="login-container">
        <div>
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
    </div>
  );
}

export default WelcomePage;
