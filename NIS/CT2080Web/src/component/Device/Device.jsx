import './_Device.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as DeviceTypes from '../../constant/DeviceTypes.js';
import * as DeviceStates from '../../constant/DeviceStates.js';

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
    [DeviceTypes.CT]: IMG_CT,
    [DeviceTypes.MW]: IMG_MW,
    [DeviceTypes.HT]: IMG_HT,
    [DeviceTypes.RT]: IMG_RT,
    [DeviceTypes.RM]: IMG_RM,
    [DeviceTypes.TR]: IMG_TR,
    [DeviceTypes.BXM]: IMG_BXM
};

const STATE_MAP = {
    '-1': '',
    [DeviceStates.INIT]: 'Initializing ...',
    [DeviceStates.WAITING]: 'Standby ...',
    [DeviceStates.SCANNING]: 'Scanning ...',
    [DeviceStates.ERROR]: 'Error',
    [DeviceStates.DIAGNOSING]: 'Diagnosing ...',
    [DeviceStates.OFFLINE]: 'offline',
};

const STATE_CLASS_MAP = {
    '-1': 'off-line',
    [DeviceStates.INIT]: 'work',
    [DeviceStates.WAITING]: 'work',
    [DeviceStates.SCANNING]: 'work',
    [DeviceStates.ERROR]: 'error',
    [DeviceStates.DIAGNOSING]: 'error',
    [DeviceStates.OFFLINE]: 'off-line'
};


const getStateClass = (deviceState, requestState) => {
    if (requestState == 1 || requestState == 2) {
        return 'requesting';
    }
    return STATE_CLASS_MAP[deviceState] || '';
}

const getStateText = (deviceState, requestState) => {
    if (requestState == 1 || requestState == 2) {
        return 'Device is requesting for work.';
    }
    return STATE_MAP[deviceState] || '';
}

const JUDGE_CLASS_MAP= {
    '1': 'suspect',
    '2': 'suspect',
    '3': 'suspect',
    '4': 'dangerous'
}



class Device extends React.PureComponent {
    static propTypes = {
        deviceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        deviceUser: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        deviceType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        deviceState: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        judgeType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        historyTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        historyAlarm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        realtimeTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        realtimeAlarm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        requestState: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // 1 请求工作；2，工作请求处理中；3，工作中，4，工作结束
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
            judgeType, historyTotal, historyAlarm, requestState,
            realtimeTotal, realtimeAlarm, isCTDevice
        } = this.props;
        return (
            <div className='device'>
                <div className={`state ${getStateClass(deviceState, requestState)}`}>
                    {getStateText(deviceState, requestState)}
                </div>
                <div className={`device-content ${JUDGE_CLASS_MAP[judgeType]}`}>
                    <div className="info">
                        <div className="device-id">
                            <div className="key">
                                <img src={SVG_ID} />
                            </div>

                            <div className="value">
                                {deviceId}
                            </div>                           
                        </div>
                        <div className="user">
                            <div className="key">
                                <img src={SVG_USER}/>
                            </div>
                            <div className="value">
                                {deviceUser}
                            </div>
                            
                        </div>

                    </div>
                    <div className={`statistic`}>
                        <div className='device-image'>
                            <img src={IMG_MAP[deviceType]}/>
                        </div>
                        <div className="result">
                            <div className="history">
                                <div className="title">TOTAL</div>
                                <div className="total-count">
                                    {historyTotal > -1 ? historyTotal:''}
                                </div>
                                <div className="suspect-count">
                                    {historyAlarm > -1? historyAlarm: ''}
                                </div>
                            </div>
                            <div className="current">
                                <div className="title">SINCE BOOT</div>
                                <div className="total-count">
                                    {realtimeTotal > -1? realtimeTotal: ''}
                                </div>
                                <div className="suspect-count">
                                    {realtimeAlarm > -1? realtimeAlarm: ''}
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { MQDeviceMonitor} = state;
    const {deviceType} = ownProps;

    let $$device = MQDeviceMonitor.get('devices').find(val => val.get('device_type') == deviceType);

    return {
        deviceId: $$device.get('device_id'), 
        deviceUser: $$device.get('device_user'), 
        deviceState: $$device.get('device_state'),
        judgeType: $$device.get('judge_type'), 
        historyTotal: $$device.get('history_total'), 
        historyAlarm: $$device.get('history_alarm'),
        realtimeTotal: $$device.get('realtime_total'), 
        realtimeAlarm: $$device.get('realtime_alarm'),
        requestState: $$device.get('request_state')
    }
}

export default connect(mapStateToProps)(Device)
