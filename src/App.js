import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

// Simple placeholder components
const Reviews = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <h2 style={{ color: '#3b82f6' }}>Reviews Page</h2>
    <p style={{ color: '#6b7280' }}>Patient reviews will be displayed here</p>
  </div>
);

const Contact = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <h2 style={{ color: '#3b82f6' }}>Contact Page</h2>
    <p style={{ color: '#6b7280' }}>Contact form will be displayed here</p>
  </div>
);

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar isExpanded={sidebarExpanded} onToggle={toggleSidebar} />
        
        <div className={`main-content ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;