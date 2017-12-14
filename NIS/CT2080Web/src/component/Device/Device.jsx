import './_Device.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Device extends React.PureComponent {
    static propTypes = {
        deviceId: PropTypes.string,
        deviceUser: PropTypes.string,
        deviceType: PropTypes.number,
        deviceState: PropTypes.number,
        judgeType: PropTypes.number,
        historyTotal: PropTypes.number,
        historyAlarm: PropTypes.number,
        realtimeTotal: PropTypes.number,
        realtimeAlarm: PropTypes.number,
        isCTDevice: PropTypes.bool,
    }

    static defaultProps = {
        isCTDevice: false
    }

    constructor(props) {
        super(props);
    }

    render() {
        let { deviceId, deviceUser, deviceType, deviceState,
            judgeType, historyTotal, historyAlarm,
            realtimeTotal, realtimeAlarm, isCTDevice
        } = this.props;
        return (
            <div className={isCTDevice?'ct-device':'device'}>
                {/* <div className="test"> */}
                <div>Device ID: {deviceId}</div>
                <div>Device Type: {deviceType}</div>
                <div>Device User: {deviceUser}</div>
                <div>Device State: {deviceState}</div>
                <div>Judget Type: {judgeType}</div>
                <div>History Count: {historyTotal}</div>
                <div>History Alarm: {historyAlarm}</div>
                <div>realtime count: {realtimeTotal}</div>
                <div>realtime alarm: {realtimeAlarm}</div>
                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { MQDeviceMonitor} = state;
    const {deviceType} = ownProps;

    let $$device = MQDeviceMonitor.find(val => val.get('device_type') === deviceType);

    return {
        deviceId: $$device.get('device_id'), 
        deviceUser: $$device.get('device_user'), 
        deviceState: $$device.get('device_state'),
        judgeType: $$device.get('judge_type'), 
        historyTotal: $$device.get('history_total'), 
        historyAlarm: $$device.get('history_alarm'),
        realtimeTotal: $$device.get('realtime_total'), 
        realtimeAlarm: $$device.get('realtime_alarm')
    }
}

export default connect(mapStateToProps)(Device)
