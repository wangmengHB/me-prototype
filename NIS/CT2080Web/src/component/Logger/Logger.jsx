import './_Logger.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as DeviceTypes from '../../constant/DeviceTypes.js';
import {fromJS, List} from 'immutable';


const DEVICE_MAP = {
    [DeviceTypes.CT]: '[ CT ]',
    [DeviceTypes.MW]: '[ MW ]',
    [DeviceTypes.HT]: '[ HT ]',
    [DeviceTypes.RT]: '[ RT ]',
    [DeviceTypes.RM]: '[ RM ]',
    [DeviceTypes.TR]: '[ TR ]',
    [DeviceTypes.BXM]: '[ BXM ]',
}





class Logger extends React.PureComponent {
    static propTypes = {
        logs: PropTypes.instanceOf(List)
    }

    static defaultProps = {
        logs: List()
    }

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        let node = this.refs.content;
        node.scrollTop = node.scrollHeight - node.clientHeight;
    }

    render() {
        let {logs} = this.props;
        return (
            <div className="system-logger">
                <div className="log-header">
                   Work Log
                </div>
                <div ref="content" className="log-content">
                    {
                        logs.map((log, index) => {                                                        
                            return (
                                <div key={`log-${index}`}>
                                    <span>{log.log_time}</span>
                                    <span>{DEVICE_MAP[log.device_type]}</span>
                                    <span>{log.device_log}</span>
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
    let logs = MQDeviceMonitor.get('logs');  
    return {
        logs: logs
    }
}

export default connect(mapStateToProps)(Logger)