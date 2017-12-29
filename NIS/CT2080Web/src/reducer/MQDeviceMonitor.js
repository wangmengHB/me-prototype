import * as ActionTypes from '../constant/ActionTypes.js';
import * as DeviceTypes from '../constant/DeviceTypes.js';
import {fromJS, List} from 'immutable';


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
    Request_state: -1,  
}) 

const MAX_LOG_COUNT = 100;


const intialState = fromJS({
    logs: List(),
    devices:[
        getInitialDevice(DeviceTypes.CT),
        getInitialDevice(DeviceTypes.MW),
        getInitialDevice(DeviceTypes.HT),
        getInitialDevice(DeviceTypes.RT),
        getInitialDevice(DeviceTypes.RM),
        getInitialDevice(DeviceTypes.TR),
        getInitialDevice(DeviceTypes.BXM)
    ]
});


const updateLogin = (state, devices = []) => {

    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.get('devices').findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn(['devices', index, 'device_user'], device.device_user);
            nextState = nextState.setIn(['devices', index, 'device_id'], device.device_id);
        }
    });
    return nextState;
}


const updateStatus = (state, devices = []) => {

    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.get('devices').findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn(['devices', index, 'device_state'], device.device_state);
        }
    });
    return nextState;
}


const updateJudge = (state, devices = []) => {
    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.get('devices').findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn(['devices', index, 'judge_type'], device.judge_type);
        }
    });
    return nextState;
}


const updateStatistics = (state, devices = []) => {
    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.get('devices').findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn(['devices', index, 'history_total'], device.history_total);
            nextState = nextState.setIn(['devices', index, 'history_alarm'], device.history_alarm);
            nextState = nextState.setIn(['devices', index, 'realtime_total'], device.realtime_total);
            nextState = nextState.setIn(['devices', index, 'realtime_alarm'], device.realtime_alarm);
        }
    });
    return nextState;
}

const updateWorkLog = (state, devices = []) => {
    let nextState = state;
    devices.forEach((device) => {
        nextState = nextState.updateIn(['logs'], list => {
            if (list.size >= MAX_LOG_COUNT) {
                list = list.shift();
            }
            return list.push({
                device_type: device.device_type,
                log_time: device.log_time,
                device_log: device.device_log
            });
        })
    });
    return nextState;
}

const requestingWork = (state, devices = []) => {
    let nextState = state;
    devices.forEach((device) => {
        let index = nextState.get('devices').findIndex(val => val.get('device_type') == device.device_type);
        if (index > -1) {
            nextState = nextState.setIn(['devices', index, 'Request_state'], device.Request_state);
        }
    });
    return nextState;
};




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
        
        case ActionTypes.MQ_DEVICE_MONITOR_INFO_REQUESTING_WORK:
            return requestingWork(state, devices);
    }
    return state;
}

export default MQDeviceMonitor;