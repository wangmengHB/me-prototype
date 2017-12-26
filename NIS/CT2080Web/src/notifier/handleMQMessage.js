import * as ActionTypes from '../constant/ActionTypes.js';
import * as MQAction from '../action/MQAction.js';
import handleDeviceMonitorInfo from './handleDeviceMonitorInfo.js';

let handleMQMessage = (msg = {body:{operation:''}}, dispatch, getState) => {
    let data = JSON.parse(msg.body);
    console.log("GetMsg-operation:" + data.operation);
    switch (data.operation) {
        case ActionTypes.MQ_CLIENT_HEART:
            dispatch(MQAction.clientHeart(data));
            break;

        case ActionTypes.MQ_SYNC_TIP_STATE:
            dispatch(MQAction.syncTipState(data));
            break;

        case ActionTypes.MQ_DEVICE_EVENT:
            dispatch(MQAction.deviceEvent(data));
            break;

        case ActionTypes.MQ_CONNECT_RET:
            dispatch(MQAction.connectRet(data));
            break;

        case ActionTypes.MQ_TRAIN_ADD_IMAGE_SINGLE:
            dispatch(MQAction.trainAddImageSingle(data))
            break;

        case ActionTypes.MQ_TRAIN_ADD_IMAGE_BATCH:
            dispatch(MQAction.trainAddImageBatch(data))
            break;

        case ActionTypes.MQ_EXPORT_RESULT:
            dispatch(MQAction.exportResult(data));
            break;

        case ActionTypes.MQ_IMPORT_USER_EXCEL:
            dispatch(MQAction.importUserExcel(data));
            break;

        case ActionTypes.MQ_UPLOAD_SOFTWARE:
            dispatch(MQAction.uploadSoftware(data));
            break;

        case ActionTypes.MQ_IMPORT_TIP_STANDARD_LIB:
            dispatch(MQAction.importTipStandardLib(data));
            break;

        case ActionTypes.MQ_IMPORT_TIP_CUSTOM_LIB:
            dispatch(MQAction.importTipCustomLib(data));
            break;

        case ActionTypes.MQ_EXPORT_TIP_LIB:
            dispatch(MQAction.exportTipLib(data));
            break;

        case ActionTypes.MQ_SYSTEM_BUSY_INDEX:
            dispatch(MQAction.systemBusyIndex(data));
            break;

        case ActionTypes.MQ_IMPORT_TRAIN_STANDARD_LIB:
            dispatch(MQAction.importTrainStandardLib(data));
            break;

        case ActionTypes.MQ_IMPORT_TRAIN_CUSTOM_LIB:
            dispatch(MQAction.importTrainCustomLib(data));
            break;

        case ActionTypes.MQ_CHANGE_VM_STATUS:
            dispatch(MQAction.changeVmStatus(data));
            break;

        case ActionTypes.MQ_IMPORT_TEMPLATE:
            dispatch(MQAction.importTemplate(data));
            break;

        case ActionTypes.MQ_REQUEST_DEVICE_IMAGE:
            dispatch(MQAction.requestDeviceImage(data));
            break;

        case ActionTypes.MQ_DEVICE_MONITOR_INFO:
            handleDeviceMonitorInfo(data.DeviceMonitorInfo, dispatch, getState);
            break;
    }
};


export default handleMQMessage;