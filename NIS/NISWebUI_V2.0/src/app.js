import React from 'react';
import ReactDOM from 'react-dom';


import NISDesktopApp from './component/desktop/NISDesktopApp.jsx';




// todo: 1. get config
// todo: 2. init i18n
// after the above done, then render the app.

const APPID = "niswebui-app-container";
let root = document.getElementById(APPID);
ReactDOM.render(<NISDesktopApp/>, root);

