import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allData from './testDataSources/allData';

export const renderApp = () => {
    ReactDOM.render(<App data={allData} />, document.getElementById('root'));
}