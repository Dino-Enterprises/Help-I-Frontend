import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from "./store/stores";
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import {apiSlice} from "./store/reducers/security/apiSlice";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApiProvider api={apiSlice}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ApiProvider>
    </React.StrictMode>
);


