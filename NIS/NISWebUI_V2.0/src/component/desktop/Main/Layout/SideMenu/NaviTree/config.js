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
} from '../../../../constant/url.js';

import IMG_MONITOR from '../../images/ControlImg/tree_monitor_sel.png';
import IMG_STATISTICS from '../../images/ControlImg/tree_statistics_sel.png';
import IMG_USER_MNG from '../../images/ControlImg/tree_global_sel.png';
import IMG_IMG_MNG from '../../images/ControlImg/tree_storage_sel.png';
import IMG_ASSET from '../../images/ControlImg/tree_maintain_sel.png';
import IMG_TIP from '../../images/ControlImg/tree_tip_sel.png';
import IMG_SYS_SETTING from '../../images/ControlImg/tree_maintain_sel.png';
import IMG_LOG from '../../images/ControlImg/tree_log_sel.png';
import IMG_MAINTAIN from '../../images/ControlImg/tree_maintain_sel.png';
import IMG_MYSPACE from '../../images/ControlImg/tree_myzone_sel.png';



let naviItem = {
    title: "Sytem Monitoring",
    klass: 'monitor',
    nodeUrl: URL_MONITOR,
    subItems: [{
        title: 'Device Monitor',
        url: URL_MONITOR_DEVICE
    }, {
        title: 'Station Monitor',
        url: URL_MONITOR_STATION
    }, {
        title: 'Disk Monitor',
        url: URL_MONITOR_DISK
    }]
};



let navi = [
    naviItem, naviItem, naviItem, naviItem, naviItem, naviItem, naviItem, naviItem, naviItem, naviItem,
];




export default navi;