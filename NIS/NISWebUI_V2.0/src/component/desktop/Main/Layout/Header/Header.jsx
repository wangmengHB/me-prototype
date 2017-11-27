import './_Header.scss';
import React from 'react';
import PropTypes from 'prop-types';
import IMG_CONNECTED from '../../../images/BackgroundImg/connected.png';
import IMG_NOT_CONNECTED from '../../../images/BackgroundImg/not_connected.png';
import RedirectToLogin from '../../../Login/RedirectToLogin.jsx';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            tipOn: false,
            isLogout: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }


    handleShutdown() {

    }

    handleLogout() {
        this.setState({
            isLogout: true
        });
    }

    handleAbout() {

    }

    handleWarningMsg() {

    }


    render() {
        let {isConnected, tipOn, isLogout} = this.state;
        let num = 35;

        if (isLogout) {
            return <RedirectToLogin/>;
        }

        return (
          <div className="header">
              <div className="about"></div>
              <div className="title">This is the Title!</div>
              <div className="toolbar">
                <div className="btn connect-status">
                    <img src={isConnected? IMG_CONNECTED: IMG_NOT_CONNECTED}/>
                </div>
                <div className="warning-wrapper">
                    <a className="warning-icon"></a>
                    <div className="warning-number">
                        {num}
                    </div>
                </div>
                
                
                <a className="btn tip-on"></a>
                <a className="btn logout" onClick={this.handleLogout}/>
                <a className="btn shutdown"></a>
              </div>
              
          </div>
        );
    }
}


Header.propTypes = {

};