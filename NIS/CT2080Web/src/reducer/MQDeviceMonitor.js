import * as ActionTypes from '../constant/ActionTypes.js';
import * as DeviceTypes from '../constant/DeviceTypes.js';
import {fromJS} from 'immutable';


let getInitialDevice = (id) => ({
    device_id: "",
    device_user: '',
    device_type: String(id),
    device_state: -1,
    judge_type: -1,
    history_total: -1,
    history_alarm: -1,
    realtime_total: -1,
    realtime_alarm: -1,
    logs: [],
}) 


const intialState = fromJS([
    getInitialDevice(DeviceTypes.CT),
    getInitialDevice(DeviceTypes.MW),
    getInitialDevice(DeviceTypes.HT),
    getInitialDevice(DeviceTypes.RT),
    getInitialDevice(DeviceTypes.RM),
    getInitialDevice(DeviceTypes.TR),
    getInitialDevice(DeviceTypes.BXM)
]);


const updateLogin = (state, devices = []) => {

    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn([index, 'device_user'], device.device_user);
            nextState = nextState.setIn([index, 'device_id'], device.device_id);
        }
    });
    return nextState;
}


const updateStatus = (state, devices = []) => {

    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn([index, 'device_state'], device.device_state);
        }
    });
    return nextState;
}


const updateJudge = (state, devices = []) => {
    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn([index, 'judge_type'], device.judge_type);
        }
    });
    return nextState;
}


const updateStatistics = (state, devices = []) => {
    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn([index, 'history_total'], device.history_total);
            nextState = nextState.setIn([index, 'history_alarm'], device.history_alarm);
            nextState = nextState.setIn([index, 'realtime_total'], device.realtime_total);
            nextState = nextState.setIn([index, 'realtime_alarm'], device.realtime_alarm);
        }
    });
    return nextState;
}

const updateWorkLog = (state, devices = []) => {
    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            debugger;
            nextState = nextState.updateIn([index, 'logs'], list => list.push({
                log_time: device.log_time,
                device_log: device.device_log
            }));
        }
    });
    return nextState;
}




const MQDeviceMonitor = (state = intialState, action) => {
    let devices = action.devices || [];
    switch (action.type) {
        case ActionTypes.MQ_DEVICE_MONITOR_INFO_LOGIN:
            return updateLogin(state, devices);

        case ActionTypes.MQ_DEVICE_MONITOR_INFO_STATUS:
            return updateStatus(state, devices);

        case ActionTypes.MQ_DEVICE_MONITOR_INFO_STATISTICS:
            return updateStatistics(state, devices);

        case ActionTypes.MQ_DEVICE_MONITOR_INFO_JUDGE:
            return updateJudge(state, devices);

        case ActionTypes.MQ_DEVICE_MONITOR_INFO_WORK_LOG:
            return updateWorkLog(state, devices);
    }
    return state;
}

export default MQDeviceMonitor;