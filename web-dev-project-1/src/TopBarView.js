import React from 'react';
import logo from './logo.svg';
import './TopBarView.css';
import HomeView from './PageViews/HomeView/Homeview.js';
import ContactView from './PageViews/ContactView/ContactView.js';
import ProjectView from './PageViews/ProjectView/ProjectView.js';
import AboutView from './PageViews/AboutView/AboutView.js';

function TopBarView({ onComponentChange }) {  // Pass down the handler
  return (
    <div className="topbar">
      <div className="vstack">
        <img src={logo} alt="logo" className="logoimg" />  

        <div className="hstack">
          {/* Each button changes to a different component when clicked */}
          <button 
            className="selection-buttons" 
            onClick={() => onComponentChange(<HomeView />)}
          >
            Home View
          </button>
          <button 
            className="selection-buttons" 
            onClick={() => onComponentChange(<AboutView />)}
          >
            About View
          </button>
          <button 
            className="selection-buttons" 
            onClick={() => onComponentChange(<ContactView />)}
          >
            Project View
          </button>
          <button 
            className="selection-buttons" 
            onClick={() => onComponentChange(<ProjectView />)}
          >
            Contact View
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBarView;
