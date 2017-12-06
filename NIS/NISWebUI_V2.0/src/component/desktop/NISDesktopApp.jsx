import './_NISDesktopApp.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import WrapperRoute from '../toolkit/WrapperRoute.jsx';
import Login from './Login/Login.jsx';
import Main from './Main/Main.jsx';
import BusyIndicator from '../toolkit/BusyIndicator/BusyIndicator.jsx';
import {URL_MAIN} from '../../constant/url.js';



export default class NISDesktopApp extends React.Component {
    constructor(prop) {
        super(prop);
    }


    render() {
        return (
            <Router>
                <div className="nis">
                    <BusyIndicator {...this.props}/>
                    <Switch>
                        <WrapperRoute exact={true} path="/" component={Login} {...this.props}/>
                        <WrapperRoute path={URL_MAIN} component={Main} {...this.props}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


NISDesktopApp.propTypes = {

};



