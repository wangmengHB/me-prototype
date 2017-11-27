import React from 'react';
import ReactDOM from 'react-dom';

import NISDesktopApp from './component/desktop/NISDesktopApp.jsx';


const APPID = "niswebui-app-container";
let root = document.getElementById(APPID);

ReactDOM.render(<NISDesktopApp testModel={{test: 123}}/>, root);

