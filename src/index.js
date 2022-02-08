import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj", "https://bit.ly/3flyaMj"]

ReactDOM.render(
  <React.StrictMode>
    <App links={links}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
