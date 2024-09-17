import React from 'react';
import '../../App.css';
import './EssayCard.css';
import { Link } from "react-router-dom";

const EssayCard = ({ id, title, nickname, variant, score, likes }) => {
  return (
    <div className="essay-card">
      <div>
        <p><strong>{title}</strong></p>
        <p>автор: {nickname}</p>
        <p>вариант: {variant}</p>
        <p>баллы: {score}</p>
        <p>нравится: {likes}</p>
      </div>
      <div className='essay-card-right'>
        <Link to={`/essays/${id}`}><button className="btn-read">прочитать</button></Link>
      </div>
    </div>
  );
};

export default EssayCard;
