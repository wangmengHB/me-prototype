import * as ActionTypes from '../constant/ActionTypes.js';
import * as MQAction from '../action/MQAction.js';

let dispatch = null;
let sessionId = '';



let handleMQMessage = (data = '') => {
    data = JSON.parse(data.body);
    console.log("GetMsg-operation:" + data.operation)
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
    }
};



const getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};

const notifier = {
    register: (fn) => dispatch = fn,
    init: (config) => {
        let clientID = getQueryString("clientId_inner");
        if (clientID == void (0) || clientID == "")
            return;
        // var sendConnettion = "/exchange/amq.topic/" + "Browse_MNS3D_5065F32F0A6E" + ".local.in";
        var sendConnettion = "/exchange/amq.topic/" + "Browse_" + clientID + ".local.in";
        // Stomp.js boilerplate
        if (location.search == '?ws') {
            var ws = new WebSocket('ws://' + config.get("WebSocketIp") + ':15674/ws');
        } else {
            var ws = new SockJS('http://' + config.get("WebSocketIp") + ':15674/stomp');
        }

        // Init Client
        var client = Stomp.over(ws);

        client.heartbeat.outgoing = 0;
        client.heartbeat.incoming = 0;

        var on_connect = function (x) {
            client.subscribe(sendConnettion, function (message) {
                me.HandleMQMessage(message);
            });
            NISWebUI.util.CookieUtil.setCookie("socketConnet", "true");
        };
        var on_error = function () {
            NISWebUI.util.CookieUtil.setCookie("socketConnet", "false")
        };

        client.connect('guest', 'guest', on_connect, on_error, '/');
    }
}


export default notifier;