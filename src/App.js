import React from 'react';
import './App.css';
import HeaderBlock from './components/HeaderBlock/index';
import Sidebar from './components/Sidebar/index';
import Profile from './components/Profile/index';
import Messages from './components/Messages';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <HeaderBlock />
        <Sidebar />
        <div className='content'>
          <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
