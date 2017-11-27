import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import './_Login.scss';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.setState({
            success: true
        });
    }


    componentWillUnmount() {
        console.log('login destroy!');
    }

    render() {
        let {success} = this.state;
        if (success) {
            return (
                <Redirect to={{ pathname: '/main', state: {loginInfo: 'xyz'}}}/>
            );
        }

        let title = "FlexOne Management System";


        return (
            <div className="login">
                <div className="main">
                    <div className="title">
                        {title}
                    </div>
                    <div className="login-box">
                        <input className="account" type="text" />
                        <input className="password" type="password" />
                        <a className="login-btn enable" onClick={this.handleLogin} />
                    </div>
                </div>
                <div className="bottom">
                </div>
                
            </div>
        );
    }
}


Login.propTypes = {

};