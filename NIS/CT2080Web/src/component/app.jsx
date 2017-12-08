
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
                <div className="first-row">
                    <Device deviceType={2}/>
                    <Device deviceType={3} />
                    <Device deviceType={4} />
                    <Device deviceType={5} />
                </div>
                <div className="second-row">
                    <div className="first-col">
                        <Device deviceType={6} />
                        <Device deviceType={7} />
                        <Device deviceType={1} isCTDevice={true}/>
                    </div>
                    <div className="second-col">
                    </div>
                </div>
            </div>
        );
    }

}