import * as ActionTypes from '../constant/ActionTypes.js';


let getInitialDevice = (id) => ({
    device_id: "",
    device_user: '',
    device_type: id,
    device_state: -1,
    judge_type: -1,
    history_total: -1,
    history_alarm: -1,
    realtime_total: -1,
    realtime_alarm: -1
}) 


const intialState = [
    getInitialDevice(1),
    getInitialDevice(2),
    getInitialDevice(3),
    getInitialDevice(4),
    getInitialDevice(5),
    getInitialDevice(6),
    getInitialDevice(7)
];


const updateLogin = (state, devices = []) => {
    if (devices.length == 0) {
        return state;
    }
    let nextState = [...state];
    devices.forEach((device) => {
        nextState.filter(item => item.device_type === device.device_type).forEach((item) => {
            item.device_user = device.device_user;
            item.device_id = device.device_id;
        })
    });
    return nextState;
}


const updateStatus = (state, devices = []) => {
    if (devices.length == 0) {
        return state;
    }
    let nextState = [...state];
    devices.forEach((device) => {
        nextState.filter(item => item.device_type === device.device_type).forEach((item) => {
            item.device_state = device.device_state;
            // item.device_id = device.device_id;
        })
    });
    return nextState;
}


const updateJudge = (state, devices = []) => {
    if (devices.length == 0) {
        return state;
    }
    let nextState = [...state];
    devices.forEach((device) => {
        nextState.filter(item => item.device_type === device.device_type).forEach((item) => {
            item.judge_type = device.judge_type;
        })
    });
    return nextState;
}


const updateStatistics = (state, devices = []) => {
    if (devices.length == 0) {
        return state;
    }
    let nextState = [...state];
    devices.forEach((device) => {
        nextState.filter(item => item.device_type === device.device_type).forEach((item) => {
            item.history_total = device.history_total;
            item.history_alarm = device.history_alarm;
            item.realtime_total = device.realtime_total;
            item.realtime_alarm = device.realtime_alarm;
        })
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

    
        default:
            return state;
            break;
    }
}

export default MQDeviceMonitor;