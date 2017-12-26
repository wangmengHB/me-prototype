
import './_app.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/index.jsx';
import Device from './Device/Device.jsx';
import * as DeviceTypes from '../constant/DeviceTypes.js';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ct2080">
                <Header/>
                <div className="content">
                    <div className="first-col">
                        <Device deviceType={DeviceTypes.MW}/>
                        <Device deviceType={DeviceTypes.HT} />
                        <Device deviceType={DeviceTypes.RT} />                
                    </div>
                    <div className="second-col">
                        <Device deviceType={DeviceTypes.RM} />
                        <Device deviceType={DeviceTypes.TR} />
                        <Device deviceType={DeviceTypes.BXM} />
                    </div>
                    <div className="third-col">
                        <Device deviceType={DeviceTypes.CT} isCTDevice={true} />
                    </div>
                </div>
            </div>
        );
    }

}