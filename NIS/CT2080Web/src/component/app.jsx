
import './_app.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/index.jsx';
import Device from './Device/Device.jsx';

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
                        <Device deviceType={2}/>
                        <Device deviceType={3} />
                        <Device deviceType={4} />                
                    </div>
                    <div className="second-col">
                        <Device deviceType={5} />
                        <Device deviceType={6} />
                        <Device deviceType={7} />
                    </div>
                    <div className="third-col">
                        <Device deviceType={1} isCTDevice={true} />
                    </div>
                </div>
            </div>
        );
    }

}