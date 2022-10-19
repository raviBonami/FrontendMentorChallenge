import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/context/AuthProvider';
import {Provider} from 'react-redux'
import {productStore} from './store/store' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={productStore} >
      <AuthProvider>
        
        <App />
      </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


