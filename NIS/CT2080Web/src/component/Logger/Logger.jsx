import './_Logger.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';



class Logger extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let {logs} = this.props;
        return (
            <div className="system-logger">
                <div className="log-header">
                   Work Log
                </div>
                <div className="log-content">
                    {
                        logs.forEach((item) => {
                            return (
                                <div>
                                    <span>item.log_time</span>
                                    <span>item.device_log</span>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const { MQDeviceMonitor } = state;
    // const { deviceType } = ownProps;
    let logs = MQDeviceMonitor.map(val => val.get('logs'));
    debugger;
    
    return {
        logs: logs.toJS()
    }
}

export default connect(mapStateToProps)(Logger)