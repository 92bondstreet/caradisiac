import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './FormSUV';
import Header from './header';

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Form />, document.getElementById('form_Suv'));
registerServiceWorker();
