import * as MQAction from '../action/MQAction.js';


const handleDeviceMonitorInfo = (info, dispatch, getState) => {
    
    switch (info.info_type) {
        // device login
        case 1:
            dispatch(MQAction.deviceLogin(info.info_content));
            break;
        
        // device status
        case 2:
            dispatch(MQAction.deviceStatus(info.info_content));
            break;
        
        // device judge image
        case 3:
            dispatch(MQAction.deviceJudge(info.info_content));
            break;
        
        // device statistics
        case 4:
            dispatch(MQAction.deviceStatistics(info.info_content));
            break;
    
        default:
            break;
    }
}

export default handleDeviceMonitorInfo;