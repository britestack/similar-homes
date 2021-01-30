import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const ID = window.location.pathname.match(/\/(\d+)\//)[1];

ReactDom.render(<App ID={ID} />, document.getElementById('similar'));
