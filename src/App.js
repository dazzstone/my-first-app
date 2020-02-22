import React from 'react';
import './App.css';
import HeaderBlock from './components/HeaderBlock/index';
import Sidebar from './components/Sidebar/index';
import Profile from './components/Profile/index';
import Dialogs from './components/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <HeaderBlock />
        <Sidebar />
        <div className='content'>
          <Route exact path='/'>
            <div className='welcome'>
              <img src='https://pngimg.com/uploads/welcome/welcome_PNG60.png' alt='welcome' />
            </div>
          </Route>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
