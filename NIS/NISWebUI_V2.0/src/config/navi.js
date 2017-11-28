
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

const KLS_HOME_A = 'home active';
const KLS_MONITOR_A = 'sys-monitor active';
const KLS_STATISTICS_A = 'sys-statistics active';
const KLS_USER_MNG_A = 'navi-user-mng active';

const NAVI_HOME = {
    url: URL_HOME,
    title: 'Home',
    icon: IMG_HOME,
    activeIcon: IMG_HOME_A,
    klass: KLS_HOME,
    activeKlass: KLS_HOME_A,
    subItems: []
};


const NAVI_MONITOR_DEVICE = {
    url: URL_MONITOR_DEVICE,
    title: 'Device Monitor',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: [],
};


const NAVI_MONITOR_STATION = {
    url: URL_MONITOR_STATION,
    title: 'STATION Monitor',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: [],
};

const NAVI_MONITOR_DISK = {
    url: URL_MONITOR_DISK,
    title: 'Disk Monitor',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: [],
};

const NAVI_MONITOR = {
    url: URL_MONITOR,
    title: 'system monitor',
    icon: IMG_MONITOR,
    activeIcon: IMG_MONITOR_A,
    klass: KLS_MONITOR,
    activeKlass: KLS_MONITOR_A,
    subItems: [NAVI_MONITOR_DEVICE, NAVI_MONITOR_STATION, NAVI_MONITOR_DISK]
};


const NAVI_STATISTICS_DEVICE = {
    url: URL_STATISTICS_DEVICE,
    title: 'device statistics',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_STATISTICS_PERSONEL = {
    url: URL_STATISTICS_PERSONEL,
    title: 'personel statistics',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_STATISTICS_REPORT = {
    url: URL_STATISTICS_REPORT,
    title: 'report statistics',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_STATISTICS_STATION = {
    url: URL_STATISTICS_STATION,
    title: 'station statistics',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};



const NAVI_STATISTICS = {
    url: URL_STATISTICS,
    title: 'system statistics',
    icon: IMG_STATISTICS,
    activeIcon: IMG_STATISTICS_A,
    klass: KLS_STATISTICS,
    activeKlass: KLS_STATISTICS_A,
    subItems: [
        NAVI_STATISTICS_DEVICE, 
        NAVI_STATISTICS_PERSONEL, 
        NAVI_STATISTICS_STATION, 
        NAVI_STATISTICS_REPORT
    ]
};


const NAVI_USER_MNG_GROUP = {
    url: URL_USER_MNG_GROUP,
    title: 'Group Management',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};


const NAVI_USER_MNG_ACCOUNT = {
    url: URL_USER_MNG_ACCOUNT,
    title: 'Account Management',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};


const NAVI_USER_MNG_ROLE = {
    url: URL_USER_MNG_ROLE,
    title: 'Role Management',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};


const NAVI_USER_MNG = {
    url: URL_USER_MNG,
    title: 'User Management',
    icon: IMG_USER_MNG,
    activeIcon: IMG_USER_MNG_A,
    klass: KLS_USER_MNG,
    activeKlass: '',
    subItems: [NAVI_USER_MNG_GROUP, NAVI_USER_MNG_ACCOUNT, NAVI_USER_MNG_ROLE]
};

const NAVI_IMG_MNG_PASSENGER = {
    url: URL_IMG_MNG_PASSENGER,
    title: 'passenger',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_IMG_MNG = {
    url: URL_IMG_MNG,
    title: 'Image Management',
    icon: IMG_IMG_MNG,
    activeIcon: IMG_IMG_MNG_A,
    klass: KLS_IMG_MNG,
    activeKlass: '',
    subItems: [NAVI_IMG_MNG_PASSENGER]
};


const NAVI_ASSET_EQUIP = {
    url: URL_ASSET_MNG_EQUIP,
    title: 'equipment',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_ASSET_TUNNEL = {
    url: URL_ASSET_MNG_TUNNEL,
    title: 'tunnel',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_ASSET_STATION = {
    url: URL_ASSET_MNG_STATION,
    title: 'station',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_ASSET = {
    url: URL_ASSET_MNG,
    title: 'asset',
    icon: IMG_ASSET,
    activeIcon: IMG_ASSET_A,
    klass: KLS_ASSET,
    activeKlass: '',
    subItems: [NAVI_ASSET_EQUIP, NAVI_ASSET_STATION, NAVI_ASSET_TUNNEL]
};

const NAVI_TIP_EXAM_PLAN = {
    url: URL_TIP_MNG_EXAM_PLAN,
    title: 'exam plan',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_TIP_EXAM_RESULT = {
    url: URL_TIP_MNG_EXAM_RESULT,
    title: 'exam result',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_TIP_LIBRARY = {
    url: URL_TIP_MNG_LIBRARY,
    title: 'library',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_TIP = {
    url: URL_TIP_MNG,
    title: 'TIP',
    icon: IMG_TIP,
    activeIcon: IMG_TIP_A,
    klass: KLS_TIP,
    activeKlass: '',
    subItems: [NAVI_TIP_EXAM_PLAN, NAVI_TIP_EXAM_RESULT, NAVI_TIP_LIBRARY]
};

const NAVI_SYS_SETTING_DEVICE_JUDGE_MAP = {
    url: URL_SYS_SETTING_DEVICE_JUDGE_MAP,
    title: 'device map',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_SYS_SETTING_JUDGE_MAP = {
    url: URL_SYS_SETTING_JUDGE_MAP,
    title: 'judge map',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_SYS_SETTING_MODE = {
    url: URL_SYS_SETTING_MODE,
    title: 'mode',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_SYS_SETTING_STORAGE = {
    url: URL_SYS_SETTING_STORAGE,
    title: 'storage',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_SYS_SETTING_UNPACK = {
    url: URL_SYS_SETTING_UNPACK,
    title: 'unpack',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_SYS_SETTING = {
    url: URL_SYS_SETTING,
    title: 'system setting',
    icon: IMG_SYS_SETTING,
    activeIcon: IMG_SYS_SETTING_A,
    klass: KLS_SYS_SETTING,
    activeKlass: '',
    subItems: [
        NAVI_SYS_SETTING_DEVICE_JUDGE_MAP, 
        NAVI_SYS_SETTING_JUDGE_MAP,
        NAVI_SYS_SETTING_MODE,
        NAVI_SYS_SETTING_STORAGE,
        NAVI_SYS_SETTING_UNPACK
    ]
};

const NAVI_LOG_DEVICE = {
    url: URL_LOG_MNG_DEVICE,
    title: 'device log',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_LOG_SYS = {
    url: URL_LOG_MNG_SYS,
    title: 'system log',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_LOG_USER_OPERATION = {
    url: URL_LOG_MNG_USER_OPERATION,
    title: 'user operation',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_LOG = {
    url: URL_LOG_MNG,
    title: 'log',
    icon: IMG_LOG,
    activeIcon: IMG_LOG_A,
    klass: KLS_LOG,
    activeKlass: '',
    subItems: [
        NAVI_LOG_DEVICE,
        NAVI_LOG_SYS,
        NAVI_LOG_USER_OPERATION
    ]
};


const NAVI_MAINTAIN_LOG = {
    url: URL_MAINTAIN_LOG,
    title: 'maintain log',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_MAINTAIN_UPGRADE = {
    url: URL_MAINTAIN_UPGRADE,
    title: 'maintain upgrade',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_MAINTAIN_UPGRADE_SETUP = {
    url: URL_MAINTAIN_UPGRADE_SETUP,
    title: 'upgrade setup',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_MAINTAIN = {
    url: URL_MAINTAIN,
    title: 'maintain',
    icon: IMG_MAINTAIN,
    activeIcon: IMG_MAINTAIN_A,
    klass: KLS_MAINTAIN,
    activeKlass: '',
    subItems: [
        NAVI_MAINTAIN_LOG,
        NAVI_MAINTAIN_UPGRADE,
        NAVI_MAINTAIN_UPGRADE_SETUP
    ]
};


const NAVI_MYSPACE_IMG = {
    url: URL_MYSPACE_IMG,
    title: 'my image',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_MYSPACE_TIP = {
    url: URL_MYSPACE_TIP,
    title: 'my TIP',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_MYSPACE_INFO = {
    url: URL_MYSPACE_INFO,
    title: 'my info',
    icon: '',
    activeIcon: '',
    klass: '',
    activeKlass: '',
    subItems: []
};

const NAVI_MYSPACE = {
    url: URL_MYSPACE,
    title: 'my image',
    icon: IMG_MYSPACE,
    activeIcon: IMG_MYSPACE_A,
    klass: KLS_MYSPACE,
    activeKlass: '',
    subItems: [
        NAVI_MYSPACE_IMG,
        NAVI_MYSPACE_TIP,
        NAVI_MYSPACE_INFO
    ]
};















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