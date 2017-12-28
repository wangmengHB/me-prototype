let express = require('express');
let app = express();
let http = require('http');
let path = require('path');
let port = 3005;
let publicPath = 'http://localhost:3005/';
let ws = require("nodejs-websocket");


let currentDir = path.join(process.cwd(), './public/dev');
app.use(express.static(currentDir));
require('./router.js')(app);
let server = http.createServer(app);
server.listen(port);

console.log(publicPath);


// mock a websocket server
let timer = null;

let ws_server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        console.log("Received " + str);
        if (!timer) {
            timer = setInterval(() => {
                let msg = ramdomMessage();

                conn.sendText(JSON.stringify(msg));
            }, 5000);
        }
    });
    conn.on("close", function (code, reason) {
        clearTimeout(timer);
        timer = null;
        console.log("Connection closed");
    })
}).listen(3006);


const info_types = [1,2,3,4];
const device_types = [1,2,3,4,5,6,7];
const device_ids = [
    'CT Device',
    'Micro Wave',
    'HT',
    'RT',
    'RM',
    'TR',
    'BXM'
];

const getRamdomNumber = (base) => Math.floor(Math.random() * base);

const getDevice = type => {
   return {device_id: device_ids[type-1], device_type: type}
};

const ramdomMessage = () => {

    let msgType = getRamdomNumber(6) + 1;
    let type = getRamdomNumber(7) + 1;
    let device = getDevice(type);
    let body = {};

    switch (msgType) {
        case 1:
            body = {
                device_user: 'user'.repeat(getRamdomNumber(5) + 1),
                ...device
            }
            break;
        
        case 2:
            body = {
                device_state: getRamdomNumber(10),
                ...device
            }
            break;
        
        case 3:
            body = {
                judge_type: getRamdomNumber(5),
                ...device
            }
            break;
        
        case 4:
            body = {
                history_total: getRamdomNumber(1000),
                history_alarm: getRamdomNumber(10000),
                realtime_total: getRamdomNumber(10000),
                realtime_alarm: getRamdomNumber(10000),
                ...device
            }
            break;

        case 5:
            body = {
                log_time: new Date().toDateString(),
                device_log: 'working...'.repeat(1 + Math.floor(Math.random * 10)),
                ...device
            }
            break;
    
        default:
            break;
    }


    return {
        operation: 'DeviceMonitorInfo',
        DeviceMonitorInfo: {
            info_type: msgType,
            info_content: [
                body
            ]

        }
    }


};




// info_type: 1. device login message
let mock_msg_type_1 = {
    operation: 'DeviceMonitorInfo',
    DeviceMonitorInfo: {
        info_type: 1,
        info_content: [
            {
                device_id: "microwave_body",
                device_user: 'alavana',
                device_type: 1
            }
        ]
    }
};


// info_type: 2. device status message
let mock_msg_type_2 = {
    operation: 'DeviceMonitorInfo',
    DeviceMonitorInfo: {
        info_type: 2,
        info_content: [
            {
                device_id: "microwave_body",
                // device_user: 'alavana',
                device_type: 1,
                device_state: 2
            }
        ]

    }
};

// info_type: 3. device judge image message
let mock_msg_type_3 = {
    operation: 'DeviceMonitorInfo',
    DeviceMonitorInfo: {
        info_type: 3,
        info_content: [
            {
                device_id: "microwave_body",
                // device_user: 'alavana',
                // device_type: 1,
                // device_state: 2,
                judge_type: 2
            }
        ]

    }
};

// info_type: 4. device statistics message
let mock_msg_type_4 = {
    operation: 'DeviceMonitorInfo',
    DeviceMonitorInfo: {
        info_type: 4,
        info_content: [
            {
                device_id: "microwave_body",
                // device_user: 'alavana',
                // device_type: 1,
                // device_state: 2,
                // judge_type: 2,
                history_total: 2,
                history_alarm: 3,
                realtime_total: 4,
                realtime_alarm: 5
            }
        ]

    }
};

let mock_message_pool = [
    mock_msg_type_1,
    mock_msg_type_2,
    mock_msg_type_3,
    mock_msg_type_4
];



