import React from 'react';
import logo from './images/UTampa_logo.png';
import './TopBarView.css';
import HomeView from './PageViews/HomeView/Homeview.js';
import ContactView from './PageViews/ContactView/ContactView.js';
import ProjectView from './PageViews/ProjectView/ProjectView.js';
import AboutView from './PageViews/AboutView/AboutView.js';

function TopBarView({ onComponentChange }) {  // Pass down the handler
  return (
    <div className="topbar">
      <div className="topbar-content">
        <img src={logo} alt="logo" className="logoimg" />

        <div className="button-group">
          <button 
            className="selection-button" 
            onClick={() => onComponentChange(<HomeView />)}
          >
            Home View
          </button>
          <div className="vertical-line"></div>

          <button 
            className="selection-button" 
            onClick={() => onComponentChange(<AboutView />)}
          >
            About View
          </button>
          <div className="vertical-line"></div>

          <button 
            className="selection-button" 
            onClick={() => onComponentChange(<ProjectView />)}
          >
            Project View
          </button>
          <div className="vertical-line"></div>

          <button 
            className="selection-button" 
            onClick={() => onComponentChange(<ContactView />)}
          >
            Contact View
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBarView;
