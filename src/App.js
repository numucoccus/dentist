import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

// Placeholder components for other pages
const Doctors = () => <div style={{ padding: '20px' }}><h2>Doctors Page</h2></div>;
const Reviews = () => <div style={{ padding: '20px' }}><h2>Reviews Page</h2></div>;
const Contact = () => <div style={{ padding: '20px' }}><h2>Contact Page</h2></div>;

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