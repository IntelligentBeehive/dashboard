import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app.component';

import { CssBaseline } from '@material-ui/core';
import 'typeface-roboto';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <CssBaseline />
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
