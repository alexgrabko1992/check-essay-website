import React from 'react';
import '../../App.css';
import EssayCard from '../EssayCard/EssayCard';
import './EssayGrid.css';

const EssayGrid = () => {
  const essays = [
    { nickname: "nobody", title: 'Почему первое впечатление о человеке может быть обманчивым?', variant: 0, score: 22, likes: 7 },
    { nickname: "nobody", title: 'Почему первое впечатление о человеке может быть обманчивым?', variant: 0, score: 22, likes: 7 },
    { nickname: "nobody", title: 'Почему первое впечатление о человеке может быть обманчивым?', variant: 0, score: 22, likes: 7 },
    { nickname: "nobody", title: 'Почему первое впечатление о человеке может быть обманчивым?', variant: 0, score: 22, likes: 7 },
    { nickname: "nobody", title: 'Почему первое впечатление о человеке может быть обманчивым?', variant: 0, score: 22, likes: 7 },
  ];

  return (
    <section className="essay">
      <h2>Примеры сочинений</h2>
      <div className="essay-grid">
        {essays.map((essay, index) => (
          <EssayCard
            key={index}
            nickname={essay.nickname}
            title={essay.title}
            variant={essay.variant}
            score={essay.score}
            likes={essay.likes}
          />
        ))}
      </div>
    </section>
  );
};

export default EssayGrid;
