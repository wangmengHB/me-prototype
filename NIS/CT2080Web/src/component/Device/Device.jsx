import './_Device.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import IMG_CT from './assets/device/type_1_CT.png';
import IMG_MW from './assets/device/type_2_MW.png';
import IMG_HT from './assets/device/type_3_HT.png';
import IMG_RT from './assets/device/type_4_RT.png';
import IMG_RM from './assets/device/type_5_RM.png';
import IMG_TR from './assets/device/type_6_TR.png';
import IMG_BXM from './assets/device/type_7_BXM_Fake.png';

import SVG_ID from './assets/ID.svg';
import SVG_USER from './assets/User.svg';


const IMG_MAP = {
    '1': IMG_CT,
    '2': IMG_MW,
    '3': IMG_HT,
    '4': IMG_RT,
    '5': IMG_RM,
    '6': IMG_TR,
    '7': IMG_BXM
};

const STATE_MAP = {
    '-1': '',
    '0': 'Initializing ...',
    '1': 'normal',
    '2': 'error',
    '3': 'diagnosing',
    '4': 'shut down',
    '5': 'offline',
    '6': 'error'
};



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
            <div className='device'>
                <div className="state">
                    {STATE_MAP[deviceState]}
                </div>
                <div className="info">
                    <div className="device-id">
                        <img src={SVG_ID}/>
                        <span>
                            {deviceId}
                        </span>
                    </div>
                    <div className="user">
                        <img src={SVG_USER}/>
                        <span>
                            {deviceUser}
                        </span>
                    </div>

                </div>
                <div className="statistic">
                    <div className='device-image'>
                        <img src={IMG_MAP[deviceType]}/>
                    </div>
                    <div className="chart">
                        <div>Judget Type: {judgeType}</div>
                        <div>History Count: {historyTotal}</div>
                        <div>History Alarm: {historyAlarm}</div>
                        <div>realtime count: {realtimeTotal}</div>
                        <div>realtime alarm: {realtimeAlarm}</div>
                    </div>
                </div>

                
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
