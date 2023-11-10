import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';const root = ReactDOM.createRoot(document.getElementById('root'));
import {BrowserRouter} from  'react-router-dom'
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
