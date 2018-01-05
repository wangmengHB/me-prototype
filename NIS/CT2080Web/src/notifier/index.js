import handleMQMessage from './handleMQMessage.js';
import config from '../config';
// import Stomp from 'stompjs';
// import SockJS from 'sockjs-client';
let Stomp = window.Stomp;
let SockJS = window.SockJS;



const getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};

let isConnected = false;

const CLIENT_ID = 'ct2080mobile001';

// stomp init
let stompInit = (dispatch, getState) => {
    // let clientID = getQueryString("clientId_inner");
    // if (clientID == void (0) || clientID == "")
    //     return;
    let clientID = CLIENT_ID;
    let sendConnettion = `/exchange/amq.topic/Browse_${clientID}.local.in`;
    let ws = null;
    // Stomp.js boilerplate
    if (location.search == '?ws') {
        ws = new WebSocket('ws://' + config.get("WebSocketIp") + ':15674/ws');
    } else {
        ws = new SockJS('http://' + config.get("WebSocketIp") + ':15674/stomp');
    }

    // Init Client
    let client = Stomp.over(ws);

    client.heartbeat.outgoing = 0;
    client.heartbeat.incoming = 0;

    var on_connect = function (x) {
        client.subscribe(sendConnettion, function (message) {
            handleMQMessage(message, dispatch, getState);
        });
        isConnected = true;
    };
    var on_error = function () {
        isConnected = false;
        stompInit(dispatch, getState);
    };

    client.connect('guest', 'guest', on_connect, on_error, '/');
}


let mock_init = (dispatch, getState) => {
    let ws = new WebSocket('ws://localhost:3006');
    ws.onopen = (e) => {
        ws.send('client connected!');
    }

    ws.onmessage = (e) => {

        let data = JSON.parse(e.data);
  
        let msg = {
            body: JSON.stringify(data)
        }

        handleMQMessage(msg, dispatch, getState);


        // ws.send(msg);
    }

    ws.onclose = (e) => {
        ws.send('client Closed!');
    }

    ws.onerror = (e) => {
        // try to re-connect

    }
}




let sessionId = '';

const notifier = {
    init: (dispatch, getState) => {
        
        if (process.env.NODE_ENV !== 'production') {
            mock_init(dispatch, getState);
        } else {
            stompInit(dispatch, getState);
        }
    },
    sendMessage: (msg) => {

    }
}


export default notifier;
