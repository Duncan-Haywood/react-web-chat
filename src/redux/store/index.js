import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { Reducers } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
export const history = createBrowserHistory()

export const Store = createStore(
    Reducers(history),
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history),thunk)
    )
);