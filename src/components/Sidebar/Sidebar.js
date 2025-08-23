import React from 'react';

const Sidebar = ({ isExpanded, onToggle }) => {
  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        {isExpanded && <h5>Dentist Booking</h5>}
        <button className="toggle-btn" onClick={onToggle}>
          {isExpanded ? '←' : '→'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <a href="#home" className="sidebar-link">
          <span>🏠</span>
          {isExpanded && <span>Home</span>}
        </a>
        <a href="#services" className="sidebar-link">
          <span>🦷</span>
          {isExpanded && <span>Services</span>}
        </a>
        <a href="#doctors" className="sidebar-link">
          <span>👨‍⚕️</span>
          {isExpanded && <span>Doctors</span>}
        </a>
        <a href="#reviews" className="sidebar-link">
          <span>⭐</span>
          {isExpanded && <span>Reviews</span>}
        </a>
        <a href="#contact" className="sidebar-link">
          <span>📞</span>
          {isExpanded && <span>Contact</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;