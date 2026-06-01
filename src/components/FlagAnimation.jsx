import React from 'react';
import './FlagAnimation.css';

export function FlagAnimation() {
  return (
    <div className="container">
      <h1>🚩 Animações de Bandeira ao Vento</h1>
      
      <div className="demo">
        <label>Rotação Suave</label>
        <div className="flag-container">
          <div className="flagpole"></div>
          <div className="flag"></div>
        </div>
      </div>

      <div className="demo">
        <label>Ondulação de Borda</label>
        <div className="flag-container">
          <div className="flagpole"></div>
          <div className="flag-wave"></div>
        </div>
      </div>

      <div className="demo">
        <label>Deformação (Skew)</label>
        <div className="flag-container">
          <div className="flagpole"></div>
          <div className="flag-skew"></div>
        </div>
      </div>
    </div>
  );
}

export default FlagAnimation;