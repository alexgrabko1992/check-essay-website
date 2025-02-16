import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import EssayCard from '../../components/EssayCard/EssayCard';
import './EssaysPage.css';

function EssaysPage() {
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
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <main>
        <section className="essay">
          <h2>Опубликованные сочинения</h2>
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
          </ section>
      </main>
    </div>
  );
}

export default EssaysPage;