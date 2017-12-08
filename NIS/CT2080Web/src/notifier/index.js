import handleMQMessage from './handleMQMessage.js';



const getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};

// stomp init
let previous = () => {
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
            handleMQMessage(message);
        });
        NISWebUI.util.CookieUtil.setCookie("socketConnet", "true");
    };
    var on_error = function () {
        NISWebUI.util.CookieUtil.setCookie("socketConnet", "false")
    };

    client.connect('guest', 'guest', on_connect, on_error, '/');
}


let mock_init = () => {
    let ws = new WebSocket('ws://localhost:3006');
    ws.onopen = (e) => {
        ws.send('client connected!');
    }

    ws.onmessage = (e) => {

        let data = JSON.parse(e.data);

        handleMQMessage(data, dispatch, getState);


        // ws.send(msg);
    }

    ws.onclose = (e) => {
        ws.send('client Closed!');
    }

    ws.onerror = (e) => {
        // try to re-connect

    }
}



let dispatch = null;
let getState = null
let sessionId = '';

const notifier = {
    register: (fn1, fn2) => { 
        dispatch = fn1;
        getState = fn2;
    },
    init: () => {
        mock_init();
    },
    sendMessage: (msg) => {

    }
}


export default notifier;
