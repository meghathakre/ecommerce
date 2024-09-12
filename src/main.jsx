import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/r1.css" ;
import { Provider } from 'react-redux';
import store from './pages/Store.jsx';



createRoot(document.getElementById('root')).render(
    <Provider store={store} >
    <App />
    </Provider>
)
