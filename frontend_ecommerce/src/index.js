import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';


ReactDOM.render(
    <MuiThemeProvider>
    <Router>
        <Route path = '/' component={App} />
    </Router>
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
