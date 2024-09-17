import React from 'react';
import '../../App.css';
import './VariantGrid.css'

const VariantGrid = () => {
  return (
    <section className="variant-section">
      <h2>База вариантов</h2>
      <div className="variant-grid">
        {[...Array(25)].map((_, i) => (
          <button key={i} className="variant-btn">вариант {i}</button>
        ))}
      </div>
      <button className="btn-create">написать сочинение по своему варианту</button>
    </section>
  );
};

export default VariantGrid;
