import React from 'react';
import '../../App.css';
import EssayCard from '../EssayCard/EssayCard';
import './EssayGrid.css';

const EssayGrid = () => {
  const essays = [
    { id: 0, nickname: "nobody", title: 'Почему первое впечатление о человеке может быть обманчивым?', variant: 0, score: 22, likes: 7 },
    { id: 1, nickname: "nobody", title: 'Почему 2 впечатление о человеке может быть обманчивым?', variant: 0, score: 22, likes: 7 },
    { id: 2, nickname: "nobody", title: 'Какую тему еще написать?', variant: 1, score: 22, likes: 0 },
    { id: 3, nickname: "somebody", title: 'А это название пусть будет очень длинным Почему первое впечатление о человеке может быть обманчивым? и еще немного текста', variant: 0, score: 2, likes: 7 },
    { id: 4, nickname: "nick", title: 'Почему?', variant: 10, score: 22, likes: 77 },
  ];

  return (
      <div className="essay-grid">
        {essays.map((essay) => (
          <EssayCard
            id={essay.id}
            nickname={essay.nickname}
            title={essay.title}
            variant={essay.variant}
            score={essay.score}
            likes={essay.likes}
          />
        ))}
      </div>
  );
};

export default EssayGrid;
