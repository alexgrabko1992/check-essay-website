import React from 'react';
import '../../App.css';
import './EssayCard.css';

const EssayCard = ({ title, nickname, variant, score, likes }) => {
  return (
    <div className="essay-card">
      <p><strong>{title}</strong></p>
      <p>автор: {nickname}</p>
      <p>вариант: {variant}</p>
      <p>баллы: {score}</p>
      <p>нравится: {likes}</p>
      <div className='essay-card-right'>
        <button className="btn-read">прочитать</button>
      </div>
    </div>
  );
};

export default EssayCard;
