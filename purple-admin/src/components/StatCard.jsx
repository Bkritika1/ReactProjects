import React from 'react';
import './StatCard.css';

const StatCard = ({ icon, label, value, color }) => {
  return (
    <div className="stat-card" style={{ backgroundColor: color }}>
      <div className="icon">{icon}</div>
      <div>
        <h4>{label}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
