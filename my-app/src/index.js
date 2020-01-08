import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import {createStore} from "redux"
import {Provider} from "react-redux"
import postReducer from "./redux/reducer"
const store= createStore(postReducer)

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
    <App />
</BrowserRouter>
</Provider>, document.getElementById('root'));

