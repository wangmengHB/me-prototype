import {
    URL_HOME,
    URL_MONITOR, URL_MONITOR_DEVICE, URL_MONITOR_STATION, URL_MONITOR_DISK,
    URL_STATISTICS,
    URL_USER_MNG,
    URL_IMG_MNG, URL_IMG_MNG_PASSENGER,
    URL_ASSET_MNG,
    URL_TIP_MNG,
    URL_SYS_SETTING,
    URL_LOG_MNG,
    URL_MAINTAIN,
    URL_MYSPACE
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
    title: "Sytem Monitor",
    icon: IMG_MONITOR,
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