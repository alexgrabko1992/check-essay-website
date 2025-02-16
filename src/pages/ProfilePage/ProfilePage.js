import React, { useState, useEffect } from 'react';
import { User, Edit } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ProfilePage.css';
import EssayCard from '../../components/EssayCard/EssayCard';
import Header from '../../components/Header/Header';


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

  useEffect(() => {
    const fetchEssays = async () => {
      try {
        const response = await fetch('http://localhost:8080/essays');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEssays(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchEssays();
  }, []); 
  return (
    <div className="profile-container">
      <Header />
      <div className="content">
        <h2 className="section-title">Информация</h2>
        <div className="info">
          <div className="info-text">
            <p className="nickname">nickname</p>
            <p className="email">nickname@mail.ru</p>
            <p className="results">написано сочинений: 1</p>
            <p className="results">опубликовано сочинений: 1</p>
            <p className="results">средний результат: 1</p>
          </div>
          <div className="info-buttons">
            <button className="btn edit">Изменить информацию</button>
            <button className="btn logout">Выйти</button>
          </div>
        </div>

        <h2 className="section-title">Прогресс</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#00bcd4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2 className="section-title">Мои сочинения</h2>
      <div className="essay-grid">
          {essays.map((essay) => (
            <EssayCard
              id={essay.id}
              nickname={essay.user_id}
              title={essay.title}
              variant={essay.variant_id}
              score={essay.score}
              likes={essay.likes}
            />
          ))}
        </div>
    </div>
  );
};

export default ProfilePage;
