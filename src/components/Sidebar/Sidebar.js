import React from 'react';
import { Link } from 'react-router-dom'; // Add this import

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
        <Link to="/" className="sidebar-link">
          <span>🏠</span>
          {isExpanded && <span>Home</span>}
        </Link>
        <Link to="/services" className="sidebar-link">
          <span>🦷</span>
          {isExpanded && <span>Services</span>}
        </Link>
        <Link to="/doctors" className="sidebar-link">
          <span>👨‍⚕️</span>
          {isExpanded && <span>Doctors</span>}
        </Link>
        <Link to="/reviews" className="sidebar-link">
          <span>⭐</span>
          {isExpanded && <span>Reviews</span>}
        </Link>
        <Link to="/contact" className="sidebar-link">
          <span>📞</span>
          {isExpanded && <span>Contact</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;