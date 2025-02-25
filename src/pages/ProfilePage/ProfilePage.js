import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ProfilePage.css';
import EssayCard from '../../components/EssayCard/EssayCard';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

const data = [
  { name: '01.2024', value: 3 },
  { name: '02.2024', value: 10 },
  { name: '03.2024', value: 8 },
  { name: '04.2024', value: 14 },
  { name: '05.2024', value: 12 },
  { name: '06.2024', value: 15 },
  { name: '07.2024', value: 11 },
  { name: '08.2024', value: 13 },
  { name: '09.2024', value: 15 },
  { name: '10.2024', value: 18 },
  { name: '11.2024', value: 20 }
];

const ProfilePage = () => {
  const [essays, setEssays] = useState([]);
  const [nickname, setNickname] = useState("nickname");
  const [countChecks, setCountChecks] = useState(0);
  const [mail, setMail] = useState("example@mail.ru");
  const [countEssays, setCountEssays] = useState(0)
  const [countPublishedEssays, setCountPublishedEssays] = useState(0)
  const [averageResult, setAverageResult] = useState(0)
  const [isEditing, setIsEditing] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const [newMail, setNewMail] = useState("");

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogout = async () => {
    try {
      const options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: "include",
          withCredentials: true
      };
      const response = await fetch(`http://localhost:8080/users/logout`, options);
      if (response.status === 200) {
          navigate('/');
      } else {
        console.log('Ошибка при выходе из системы');
      }
    } catch (error) {
      console.log('Ошибка подключения к серверу');
    }
    cookies.remove("session_id", { path: "/" }); 
  };

  const handleEdit = () => {
    setIsEditing(true);
    setNewNickname(nickname);
    setNewMail(mail);
  };

  const handleSave = async () => {
    try {
      const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        withCredentials: true,
        body: JSON.stringify({ nickname: newNickname, mail: newMail })
      };
      const response = await fetch('http://localhost:8080/users', options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setNickname(newNickname);
      setMail(newMail);
      setIsEditing(false);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    const fetchEssays = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: "include",
          withCredentials: true
      };
        const response = await fetch('http://localhost:8080/users/me/essays', options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEssays(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    const fetchUserInfo = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: "include",
          withCredentials: true
        };
        const response = await fetch('http://localhost:8080/users/info', options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNickname(data["nickname"]);
        setCountChecks(data["count_checks"])
        setMail(data["mail"]);
        setCountEssays(data["count_essays"])
        setCountPublishedEssays(data["count_published_essays"])
        setAverageResult(data["average_result"])
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchEssays();
    fetchUserInfo();
  }, []); 

  return (
    <div className="profile-container">
      <Header />
      <div className="content">
        <h2 className="section-title">Информация</h2>
        <div className="info">
          <div className="info-text">
            <p className="nickname">{nickname}</p>
            <p className="email">{mail}</p>
            <p className="results">доступно проверок: {countChecks}</p>
            <p className="results">написано сочинений: {countEssays}</p>
            <p className="results">опубликовано сочинений: {countPublishedEssays}</p>
            <p className="results">средний результат: {averageResult}</p>
          </div>
        {isEditing ? (
          <div className="edit-container">
            <div className="edit-fields">
              <input
                type="text"
                value={newNickname}
                onChange={(e) => setNewNickname(e.target.value)}
                placeholder="Новый никнейм"
              />
              <input
                type="text"
                value={newMail}
                onChange={(e) => setNewMail(e.target.value)}
                placeholder="Новая почта"
              />
            </div>
            <div className="edit-buttons">
              <button onClick={handleSave} className="btn white">Сохранить</button>
              <button onClick={() => setIsEditing(false)} className="btn blue">Отмена</button>
            </div>
          </div>
        ) : (
          <div className="info-buttons">
            <button onClick={handleEdit} className="btn white">Изменить информацию</button>
            <button onClick={handleLogout} className="btn blue">Выйти</button>
          </div>
        )}
      </div>

        <h2 className="section-title">Прогресс</h2>
        <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#01B4BC" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <h2 className="section-title">Мои сочинения</h2>
        <div className="essay-grid">
          {essays.map((essay) => (
            <EssayCard
              key={essay.id}
              ifUserEssay={true}
              id={essay.id}
              nickname={essay.author_nickname}
              title={essay.variant_title}
              variant_id={essay.variant_id}
              score={essay.score}
              likes={essay.likes}
              status={essay.status}
            />
          ))}
        </div>
    </div>
  );
};

export default ProfilePage;