import React from 'react';
import './EssayText.css'; // Use the same CSS for styling consistency

const EssayText = ({text}) => {
  return (
    <div className="essay-text">
        <p>{text}</p>
    </div>
  );
}

export default EssayText;
