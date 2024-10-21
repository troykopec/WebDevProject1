import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleComponent from './ExampleComponent';
import TopBarView from './TopBarView';
import HomeView from './PageViews/HomeView/Homeview.js';
import ContactView from './PageViews/ContactView/ContactView.js';
import ProjectView from './PageViews/ProjectView/ProjectView.js';
import AboutView from './PageViews/AboutView/AboutView.js';

function App() {
  const [activeComponent, setActiveComponent] = useState(<ExampleComponent />); // Initial component

  // Function to handle switching components
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TopBarView onComponentChange={handleComponentChange} /> {/* Pass handler */}

        <div className="content">
          {activeComponent} {/* Render the active component */}
        </div>

        <div className="spacer"></div>
      </header>
    </div>
  );
}

export default App;
