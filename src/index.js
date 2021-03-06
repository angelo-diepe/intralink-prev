import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from "react-redux";
import { createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import {handleRoute,handleLogging,handleProfile} from "./containers/Redux/reducer.js";
import './index.css';
import './animate.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

const rootReducer=combineReducers({handleRoute,handleLogging,handleProfile})
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(<Provider store={store}>
										<App />
								</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
