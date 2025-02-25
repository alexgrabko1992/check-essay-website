import React from 'react';
import '../../App.css';
import './EssayCard.css';
import { Link } from "react-router-dom";

const EssayCard = ({ ifUserEssay, id, title, nickname, variant_id, score, likes, status }) => {
  return (
    <div className="essay-card">
      <div>
        <p><strong>{title}</strong></p>
        <p>автор: {nickname}</p>
        <p>вариант: {variant_id}</p>
        <p>баллы: {score}</p>
        <p>нравится: {likes}</p>
      </div>
      <div className='essay-card-right'>
        <Link to={status==="draft" ? `/essay-input/${variant_id}` : `/essays/${id}`} state={{ ifUserEssay, id }}>
          {status==="draft" ? <button className="btn-read">дописать</button> : <button className="btn-read">прочитать</button>}
        </Link>
      </div>
    </div>
  );
};

export default EssayCard;
