import React from 'react';
import './App.css';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { addPost, newPostText, sendMessage, newMessageText } from './testDataSources/allData';

function App(props) {
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
          <Route path='/profile' render={() => <Profile profilePage={props.data.profilePage} addPost={addPost} newPostText={newPostText} />} />
          <Route path='/dialogs' render={() => <Dialogs dialogPage={props.data.dialogPage} sendMessage={sendMessage} newMessageText={newMessageText} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
