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

    let obj = MQDeviceMonitor.find(item => item.device_type === deviceType);

    return {
        deviceId: obj.device_id, 
        deviceUser: obj.device_user, 
        deviceState: obj.device_state,
        judgeType: obj.judge_type, 
        historyTotal: obj.history_total, 
        historyAlarm: obj.history_alarm,
        realtimeTotal: obj.realtime_total, 
        realtimeAlarm: obj.realtime_alarm
    }
}

export default connect(mapStateToProps)(Device)
