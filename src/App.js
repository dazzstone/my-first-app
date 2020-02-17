import React from 'react';
import './App.css';
import HeaderBlock from './components/HeaderBlock/index';
import Sidebar from './components/Sidebar/index';
import ContentBlock from './components/ContentBlock/index';

function App() {
  return (
    <div className="main">
      <HeaderBlock />
      <Sidebar />
      <ContentBlock />
    </div>
  );
}

export default App;
