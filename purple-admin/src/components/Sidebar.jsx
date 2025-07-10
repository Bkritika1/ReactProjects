import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/tables">Tables</NavLink>
        <NavLink to="/forms">Forms</NavLink>

        <div className="sidebar-section">
          <p className="section-title">App</p>
          <NavLink to="/app/todo">Todo </NavLink>
          <NavLink to="/app/gallery">Gallery</NavLink>
          <NavLink to="/app/calendar">Calendar</NavLink>
        </div>
      </nav>

    </div>
  );
};

export default Sidebar;