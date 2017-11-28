import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {
    URL_HOME,
    URL_MONITOR, URL_MONITOR_DEVICE, URL_MONITOR_STATION, URL_MONITOR_DISK,
    URL_STATISTICS,
    URL_USER_MNG,
    URL_IMG_MNG, URL_IMG_MNG_PASSENGER,
    URL_ASSET_MNG,
    URL_TIP_MNG,
    URL_SYS_SETTING,
    URL_LOG_MNG,
    URL_MAINTAIN,
    URL_MYSPACE
} from '../../../../../constant/url.js';
import './_SideMenu.scss';
import NaviTree from './NaviTree/NaviTree.jsx';




export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'User name'
        };
        this.handleCollapse = this.handleCollapse.bind(this);
    }

    handleCollapse() {
        let {onCollapse} = this.props;
        onCollapse();
    }

    render() {
        let {collapse} = this.props;
        let {user} = this.state;


        return (
          <div className={`side-menu${collapse?' collapse':''}`}> 
            <a className={`expand-icon${collapse?' collapse':''}`} onClick={this.handleCollapse}/>
            <a className={`expand-btn${collapse ? ' collapse' : ''}`} onClick={this.handleCollapse}/>
            <div className="user-info">
                {`Hello, ${user}`}
            </div>
            <div className="content">
                <NaviTree/>
            </div>
          </div>
        );
    }
}


SideMenu.propTypes = {
    collapse: PropTypes.bool.isRequired,
    onCollapse: PropTypes.func.isRequired,
}