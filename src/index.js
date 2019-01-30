import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'gitment/style/default.css'
import Gitment from 'gitment'

var gitment = new Gitment({
  id:window.location.pathname,
  owner: 'Yuandong-Chen',
  repo: 'DemoForPersonalWebSite',
  oauth: {
    client_id: '31964faed62d30bab566',
    client_secret: '4677647bfe33efba267dbce2ec2d091d27bf6d58',
  },
});
gitment.render('container');
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App/></Router>, document.getElementById('root'));
