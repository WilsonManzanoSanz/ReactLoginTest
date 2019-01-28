import React from 'react';
import ReactDOM from 'react-dom';
// ROOT
import { Root } from './pages/root';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Styles
import './assets/scss/style.scss';
import './assets/scss/material.scss';
import './assets/scss/color.scss';
// Service worker
import * as serviceWorker from './serviceWorker';

const App = () => ( 
    <Provider store={store}>
        <Root/>
    </Provider>
);

ReactDOM.render( <App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();