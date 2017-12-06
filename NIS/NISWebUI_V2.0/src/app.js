import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import rootReducer from './reducer/index.js';
import actions from './action/action.js';


import NISDesktopApp from './component/desktop/NISDesktopApp.jsx';
import RootController from './controller/RootController.js';

const APPID = "niswebui-app-container";
let root = document.getElementById(APPID);
let controller = new RootController();
window.__controller = controller;



const store = createStore(rootReducer);

window.__store = store;




const Container = () => {
    return (
        <Provider store={store}>
            <Wrapper controller={controller}/>
        </Provider>
    );
}

function mapStateToProps(state, ownProps) {
    return state[ownProps.id];
}

const Wrapper = connect(mapStateToProps, actions)(NISDesktopApp);




ReactDOM.render(<Container/>, root);

