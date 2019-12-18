import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/TodoStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const root = document.getElementById('root');

const app = (
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App}/>
        </Router>
    </Provider>
)

ReactDOM.render(app, root);
serviceWorker.unregister();
