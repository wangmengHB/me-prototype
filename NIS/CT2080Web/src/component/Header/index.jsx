
import './_Header.scss';
import React from 'react';
import PropTypes from 'prop-types';
import LOGO from './assets/logo.png';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <img className="logo" src={LOGO}/>
                <div className="title">
                    CT2080 Mobile Security Car Monitoring System
                </div>
            </div>
        );
    }

}