import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import StudentSlice from './redux/StudentSlice';
import CartSlice from './redux/CartSlice'
import TeacherSlice from './redux/TeacherSlice';

let allReducer = combineReducers({StudentSlice, CartSlice, TeacherSlice})


let data = configureStore({
  reducer : allReducer
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={data}>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
