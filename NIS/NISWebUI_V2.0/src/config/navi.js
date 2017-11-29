import {
    URL_HOME,
    URL_MONITOR, URL_MONITOR_DEVICE, URL_MONITOR_STATION, URL_MONITOR_DISK,
    URL_STATISTICS, URL_STATISTICS_DEVICE, URL_STATISTICS_PERSONEL, URL_STATISTICS_STATION, URL_STATISTICS_REPORT,
    URL_USER_MNG, URL_USER_MNG_GROUP, URL_USER_MNG_ACCOUNT, URL_USER_MNG_ROLE,
    URL_IMG_MNG, URL_IMG_MNG_PASSENGER,
    URL_ASSET_MNG, URL_ASSET_MNG_TUNNEL, URL_ASSET_MNG_EQUIP, URL_ASSET_MNG_STATION,
    URL_TIP_MNG, URL_TIP_MNG_LIBRARY, URL_TIP_MNG_EXAM_PLAN, URL_TIP_MNG_EXAM_RESULT,
    URL_SYS_SETTING, URL_SYS_SETTING_DEVICE_JUDGE_MAP, URL_SYS_SETTING_JUDGE_MAP, URL_SYS_SETTING_UNPACK, URL_SYS_SETTING_STORAGE, URL_SYS_SETTING_MODE,
    URL_LOG_MNG, URL_LOG_MNG_DEVICE, URL_LOG_MNG_SYS, URL_LOG_MNG_USER_OPERATION,
    URL_MAINTAIN, URL_MAINTAIN_UPGRADE, URL_MAINTAIN_UPGRADE_SETUP, URL_MAINTAIN_LOG,
    URL_MYSPACE, URL_MYSPACE_IMG, URL_MYSPACE_TIP, URL_MYSPACE_INFO
} from '../constant/url.js';

import {
    ID_HOME,
    ID_MONITOR, ID_MONITOR_DEVICE, ID_MONITOR_STATION, ID_MONITOR_DISK,
    ID_STATISTICS, ID_STATISTICS_DEVICE, ID_STATISTICS_PERSONEL, ID_STATISTICS_STATION, ID_STATISTICS_REPORT,
    ID_USER_MNG, ID_USER_MNG_GROUP, ID_USER_MNG_ACCOUNT, ID_USER_MNG_ROLE,
    ID_IMG_MNG, ID_IMG_MNG_PASSENGER,
    ID_ASSET_MNG, ID_ASSET_MNG_TUNNEL, ID_ASSET_MNG_EQUIP, ID_ASSET_MNG_STATION,
    ID_TIP_MNG, ID_TIP_MNG_LIBRARY, ID_TIP_MNG_EXAM_PLAN, ID_TIP_MNG_EXAM_RESULT,
    ID_SYS_SETTING, ID_SYS_SETTING_DEVICE_JUDGE_MAP, ID_SYS_SETTING_JUDGE_MAP, ID_SYS_SETTING_UNPACK, ID_SYS_SETTING_STORAGE, ID_SYS_SETTING_MODE,
    ID_LOG_MNG, ID_LOG_MNG_DEVICE, ID_LOG_MNG_SYS, ID_LOG_MNG_USER_OPERATION,
    ID_MAINTAIN, ID_MAINTAIN_UPGRADE, ID_MAINTAIN_UPGRADE_SETUP, ID_MAINTAIN_LOG,
    ID_MYSPACE, ID_MYSPACE_IMG, ID_MYSPACE_TIP, ID_MYSPACE_INFO
} from '../constant/naviId.js';

import Navi from '../model/Navi.js';

// active icons:
import IMG_HOME_A from '../component/desktop/images/ControlImg/tree_home_sel.png'
import IMG_MONITOR_A from '../component/desktop/images/ControlImg/tree_monitor_sel.png';
import IMG_STATISTICS_A from '../component/desktop/images/ControlImg/tree_statistics_sel.png';
import IMG_USER_MNG_A from '../component/desktop/images/ControlImg/tree_global_sel.png';
import IMG_IMG_MNG_A from '../component/desktop/images/ControlImg/tree_storage_sel.png';
import IMG_ASSET_A from '../component/desktop/images/ControlImg/tree_maintain_sel.png';
import IMG_TIP_A from '../component/desktop/images/ControlImg/tree_tip_sel.png';
import IMG_SYS_SETTING_A from '../component/desktop/images/ControlImg/tree_maintain_sel.png';
import IMG_LOG_A from '../component/desktop/images/ControlImg/tree_log_sel.png';
import IMG_MAINTAIN_A from '../component/desktop/images/ControlImg/tree_maintain_sel.png';
import IMG_MYSPACE_A from '../component/desktop/images/ControlImg/tree_myzone_sel.png';

// normal icons:
import IMG_HOME from '../component/desktop/images/ControlImg/tree_home.png'
import IMG_MONITOR from '../component/desktop/images/ControlImg/tree_monitor.png';
import IMG_STATISTICS from '../component/desktop/images/ControlImg/tree_statistics.png';
import IMG_USER_MNG from '../component/desktop/images/ControlImg/tree_global.png';
import IMG_IMG_MNG from '../component/desktop/images/ControlImg/tree_storage.png';
import IMG_ASSET from '../component/desktop/images/ControlImg/tree_maintain.png';
import IMG_TIP from '../component/desktop/images/ControlImg/tree_tip.png';
import IMG_SYS_SETTING from '../component/desktop/images/ControlImg/tree_maintain.png';
import IMG_LOG from '../component/desktop/images/ControlImg/tree_log.png';
import IMG_MAINTAIN from '../component/desktop/images/ControlImg/tree_maintain.png';
import IMG_MYSPACE from '../component/desktop/images/ControlImg/tree_myzone.png';

// class name for every navi style
const KLS_HOME = 'navi-home';
const KLS_MONITOR = 'navi-monitor';
const KLS_STATISTICS = 'navi-statistics';
const KLS_USER_MNG = 'navi-user-mng';
const KLS_IMG_MNG = 'navi-img-mng';
const KLS_ASSET = 'navi-asset';
const KLS_TIP = 'navi-tip';
const KLS_SYS_SETTING = 'navi-sys-setting';
const KLS_LOG = 'navi-log';
const KLS_MAINTAIN = 'navi-maintain';
const KLS_MYSPACE = 'navi-myspace';






const NAVI_HOME = new Navi(
    ID_HOME,
    URL_HOME,
    'Home',
    [],
    IMG_HOME,
    IMG_HOME_A,
    KLS_HOME
);


const NAVI_MONITOR_DEVICE = new Navi(
    ID_MONITOR_DEVICE,
    URL_MONITOR_DEVICE,
    'Device Monitor'
);


const NAVI_MONITOR_STATION = new Navi(
    ID_MONITOR_STATION,
    URL_MONITOR_STATION,
    'STATION Monitor'
);

const NAVI_MONITOR_DISK = new Navi(
    ID_MONITOR_DISK,
    URL_MONITOR_DISK,
    'Disk Monitor'
);

const NAVI_MONITOR = new Navi(
    ID_MONITOR,
    URL_MONITOR,
    'system monitor',
    [
        NAVI_MONITOR_DEVICE,
        NAVI_MONITOR_STATION,
        NAVI_MONITOR_DISK
    ],
    IMG_MONITOR,
    IMG_MONITOR_A,
    KLS_MONITOR 
);


const NAVI_STATISTICS_DEVICE = new Navi (
    ID_STATISTICS_DEVICE,
    URL_STATISTICS_DEVICE,
    'device statistics',
);

const NAVI_STATISTICS_PERSONEL = new Navi (
    ID_STATISTICS_PERSONEL,
    URL_STATISTICS_PERSONEL,
    'personel statistics'
);

const NAVI_STATISTICS_REPORT = new Navi (
    ID_STATISTICS_REPORT,
    URL_STATISTICS_REPORT,
    'report statistics'
);

const NAVI_STATISTICS_STATION = new Navi (
    ID_STATISTICS_STATION,
    URL_STATISTICS_STATION,
    'station statistics'
);



const NAVI_STATISTICS = new Navi (
    ID_STATISTICS,
    URL_STATISTICS,
    'system statistics',
    [
        NAVI_STATISTICS_DEVICE,
        NAVI_STATISTICS_PERSONEL,
        NAVI_STATISTICS_STATION,
        NAVI_STATISTICS_REPORT
    ],
    IMG_STATISTICS,
    IMG_STATISTICS_A,
    KLS_STATISTICS   
);


const NAVI_USER_MNG_GROUP = new Navi (
    ID_USER_MNG_GROUP,
    URL_USER_MNG_GROUP,
    'Group'
);


const NAVI_USER_MNG_ACCOUNT = new Navi (
    ID_USER_MNG_ACCOUNT,
    URL_USER_MNG_ACCOUNT,
    'Account'
);


const NAVI_USER_MNG_ROLE = new Navi (
    ID_USER_MNG_ROLE,
    URL_USER_MNG_ROLE,
    'Role'
);


const NAVI_USER_MNG = new Navi (
    ID_USER_MNG,
    URL_USER_MNG,
    'User Management',
    [
        NAVI_USER_MNG_GROUP,
        NAVI_USER_MNG_ACCOUNT,
        NAVI_USER_MNG_ROLE
    ],
    IMG_USER_MNG,
    IMG_USER_MNG_A,
    KLS_USER_MNG   
);

const NAVI_IMG_MNG_PASSENGER = new Navi (
    ID_IMG_MNG_PASSENGER,
    URL_IMG_MNG_PASSENGER,
    'passenger'
);

const NAVI_IMG_MNG = new Navi (
    ID_IMG_MNG,
    URL_IMG_MNG,
    'Image Management',
    [
        NAVI_IMG_MNG_PASSENGER
    ],
    IMG_IMG_MNG,
    IMG_IMG_MNG_A,
    KLS_IMG_MNG,
);


const NAVI_ASSET_EQUIP = new Navi (
    ID_ASSET_MNG_EQUIP,
    URL_ASSET_MNG_EQUIP,
    'equipment'
);

const NAVI_ASSET_TUNNEL = new Navi (
    ID_ASSET_MNG_TUNNEL,
    URL_ASSET_MNG_TUNNEL,
    'tunnel'
);

const NAVI_ASSET_STATION = new Navi (
    ID_ASSET_MNG_STATION,
    URL_ASSET_MNG_STATION,
    'station'
);

const NAVI_ASSET = new Navi (
    URL_ASSET_MNG,
    URL_ASSET_MNG,
    'asset',
    [
        NAVI_ASSET_EQUIP,
        NAVI_ASSET_STATION,
        NAVI_ASSET_TUNNEL
    ],
    IMG_ASSET,
    IMG_ASSET_A,
    KLS_ASSET
);

const NAVI_TIP_EXAM_PLAN = new Navi (
    ID_TIP_MNG_EXAM_PLAN,
    URL_TIP_MNG_EXAM_PLAN,
    'exam plan'
);

const NAVI_TIP_EXAM_RESULT = new Navi (
    ID_TIP_MNG_EXAM_RESULT,
    URL_TIP_MNG_EXAM_RESULT,
    'exam result'
);

const NAVI_TIP_LIBRARY = new Navi (
    ID_TIP_MNG_LIBRARY,
    URL_TIP_MNG_LIBRARY,
    'library'
);

const NAVI_TIP = new Navi (
    ID_TIP_MNG,
    URL_TIP_MNG,
    'TIP',
    [
        NAVI_TIP_EXAM_PLAN,
        NAVI_TIP_EXAM_RESULT,
        NAVI_TIP_LIBRARY
    ],
    IMG_TIP,
    IMG_TIP_A,
    KLS_TIP
);

const NAVI_SYS_SETTING_DEVICE_JUDGE_MAP = new Navi (
    ID_SYS_SETTING_DEVICE_JUDGE_MAP,
    URL_SYS_SETTING_DEVICE_JUDGE_MAP,
    'device map'
);

const NAVI_SYS_SETTING_JUDGE_MAP = new Navi (
    ID_SYS_SETTING_JUDGE_MAP,
    URL_SYS_SETTING_JUDGE_MAP,
    'judge map'
);

const NAVI_SYS_SETTING_MODE = new Navi (
    ID_SYS_SETTING_MODE,
    URL_SYS_SETTING_MODE,
    'mode'
);

const NAVI_SYS_SETTING_STORAGE = new Navi (
    ID_SYS_SETTING_STORAGE,
    URL_SYS_SETTING_STORAGE,
    'storage'
);

const NAVI_SYS_SETTING_UNPACK = new Navi (
    ID_SYS_SETTING_UNPACK,
    URL_SYS_SETTING_UNPACK,
    'unpack'
);

const NAVI_SYS_SETTING = new Navi (
    ID_SYS_SETTING,
    URL_SYS_SETTING,
    'system setting',
    [
        NAVI_SYS_SETTING_DEVICE_JUDGE_MAP,
        NAVI_SYS_SETTING_JUDGE_MAP,
        NAVI_SYS_SETTING_MODE,
        NAVI_SYS_SETTING_STORAGE,
        NAVI_SYS_SETTING_UNPACK
    ],
    IMG_SYS_SETTING,
    IMG_SYS_SETTING_A,
    KLS_SYS_SETTING
);

const NAVI_LOG_DEVICE = new Navi (
    ID_LOG_MNG_DEVICE,
    URL_LOG_MNG_DEVICE,
    'device log'
);

const NAVI_LOG_SYS = new Navi (
    ID_LOG_MNG_SYS,
    URL_LOG_MNG_SYS,
    'system log'
);

const NAVI_LOG_USER_OPERATION = new Navi (
    ID_LOG_MNG_USER_OPERATION,
    URL_LOG_MNG_USER_OPERATION,
    'user operation'
);

const NAVI_LOG = new Navi (
    ID_LOG_MNG,
    URL_LOG_MNG,
    'log',
    [
        NAVI_LOG_DEVICE,
        NAVI_LOG_SYS,
        NAVI_LOG_USER_OPERATION
    ],
    IMG_LOG,
    IMG_LOG_A,
    KLS_LOG   
);


const NAVI_MAINTAIN_LOG = new Navi (
    ID_MAINTAIN_LOG,
    URL_MAINTAIN_LOG,
    'maintain log'
);

const NAVI_MAINTAIN_UPGRADE = new Navi (
    ID_MAINTAIN_UPGRADE,
    URL_MAINTAIN_UPGRADE,
    'maintain upgrade'
);

const NAVI_MAINTAIN_UPGRADE_SETUP = new Navi (
    ID_MAINTAIN_UPGRADE_SETUP,
    URL_MAINTAIN_UPGRADE_SETUP,
    'upgrade setup'
);

const NAVI_MAINTAIN = new Navi (
    ID_MAINTAIN,
    URL_MAINTAIN,
    'maintain',
    [
        NAVI_MAINTAIN_LOG,
        NAVI_MAINTAIN_UPGRADE,
        NAVI_MAINTAIN_UPGRADE_SETUP
    ],
    IMG_MAINTAIN,
    IMG_MAINTAIN_A,
    KLS_MAINTAIN   
);


const NAVI_MYSPACE_IMG = new Navi (
    ID_MYSPACE_IMG,
    URL_MYSPACE_IMG,
    'my image'
);

const NAVI_MYSPACE_TIP = new Navi (
    ID_MYSPACE_TIP,
    URL_MYSPACE_TIP,
    'my TIP'
);

const NAVI_MYSPACE_INFO = new Navi (
    ID_MYSPACE_INFO,
    URL_MYSPACE_INFO,
    'my info'
);

const NAVI_MYSPACE = new Navi (
    ID_MYSPACE,
    URL_MYSPACE,
    'my zone',
    [
        NAVI_MYSPACE_IMG,
        NAVI_MYSPACE_TIP,
        NAVI_MYSPACE_INFO
    ],
    IMG_MYSPACE,
    IMG_MYSPACE_A,
    KLS_MYSPACE
);









const defaultNaviConfig = [
    NAVI_HOME,
    NAVI_MONITOR,
    NAVI_STATISTICS,
    NAVI_USER_MNG,
    NAVI_IMG_MNG,
    NAVI_ASSET,
    NAVI_TIP,
    NAVI_SYS_SETTING,
    NAVI_LOG,
    NAVI_MAINTAIN,
    NAVI_MYSPACE
];


export default function getDefaultNavi() {
    return JSON.parse(JSON.stringify(defaultNaviConfig));
};




export function getTreeNavi() {
    let clone = JSON.parse(JSON.stringify(defaultNaviConfig));
    // inject __collapsed int Navi Model
    clone.forEach((item) => injectCollapsed(item));
    return clone;
}

const COLLAPSED = '__collapsed';
function injectCollapsed(navi) {
    navi[COLLAPSED] = true;
    navi.subItems.forEach((item) => injectCollapsed(item));
}