import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="App">
      <Sidebar isExpanded={sidebarExpanded} onToggle={toggleSidebar} />
      
      <div className={`main-content ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <Home />
      </div>
    </div>
  );
}

export default App;