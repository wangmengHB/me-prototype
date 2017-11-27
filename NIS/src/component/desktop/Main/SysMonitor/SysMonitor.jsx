import React from 'react';
import PropTypes from 'prop-types';
import WrapperRoute from '../../../toolkit/WrapperRoute.jsx';
import {Switch} from 'react-router-dom';
import Total from './Total.jsx';
import Device from './Device/Device.jsx';
import Station from './Station/Station.jsx';
import Disk from './Disk/Disk.jsx';
import {
    URL_MONITOR,
    URL_MONITOR_DEVICE,
    URL_MONITOR_STATION,
    URL_MONITOR_DISK
} from '../../../../constant/url.js';

export default class SysMonitor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
              <WrapperRoute exact={true} path={URL_MONITOR} component={Total} {...this.props}/>
              <WrapperRoute path={URL_MONITOR_DEVICE} component={Device} {...this.props}/>
              <WrapperRoute path={URL_MONITOR_STATION} component={Station} {...this.props} />
              <WrapperRoute path={URL_MONITOR_DISK} component={Disk} {...this.props}/>
            </Switch>
        );
    }
}

SysMonitor.propTypes = {

};