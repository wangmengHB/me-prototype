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
                <ul>
                    <li><NavLink to={URL_HOME}>home page</NavLink></li>
                    <li>
                        <NavLink to={URL_MONITOR}>System Monitroing</NavLink>
                        <ul>
                            <li><NavLink to={URL_MONITOR_DEVICE}>Device Monitor</NavLink></li>
                            <li><NavLink to={URL_MONITOR_STATION}>Station Monitor</NavLink></li>
                            <li><NavLink to={URL_MONITOR_DISK}>Disk Monitor</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={URL_STATISTICS}>System Statistics</NavLink></li>
                    <li><NavLink to={URL_USER_MNG}>Use Management</NavLink></li>
                    <li><NavLink to={URL_IMG_MNG}>Image Management</NavLink></li>
                    <li><NavLink to={URL_ASSET_MNG}>Asset Mangement</NavLink></li>
                    <li><NavLink to={URL_TIP_MNG}>TIP Management</NavLink></li>
                    <li><NavLink to={URL_SYS_SETTING}>System Setting</NavLink></li>
                    <li><NavLink to={URL_LOG_MNG}>Log Management</NavLink></li>
                    <li><NavLink to={URL_MAINTAIN}>Maintain Management</NavLink></li>
                    <li><NavLink to={URL_MYSPACE}>My Space</NavLink></li>
                </ul>
                {/* <div style={{backgroundColor:'black', height:'2000px', width: '100%'}}>
                </div> */}

            </div>
          </div>
        );
    }
}


SideMenu.propTypes = {
    collapse: PropTypes.bool.isRequired,
    onCollapse: PropTypes.func.isRequired,
}