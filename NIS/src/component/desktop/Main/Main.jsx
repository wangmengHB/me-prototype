import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import RedirectToLogin from '../Login/RedirectToLogin.jsx';
import WrapperRoute from '../../toolkit/WrapperRoute.jsx';
import Layout from './Layout/Layout.jsx';
import {
    URL_HOME,
    URL_MONITOR,
    URL_STATISTICS,
    URL_USER_MNG,
    URL_IMG_MNG,
    URL_ASSET_MNG,
    URL_TIP_MNG,
    URL_SYS_SETTING,
    URL_LOG_MNG,
    URL_MAINTAIN,
    URL_MYSPACE
} from '../../../constant/url.js';
import Home from './Home/Home.jsx';
import SysMonitor from './SysMonitor/SysMonitor.jsx';
import SysStatistics from './SysStatistics/SysStatistics.jsx';
import UserMng from './UserMng/UserMng.jsx';
import ImageMng from './ImageMng/ImageMng.jsx';
import AssetMng from './AssetMng/AssetMng.jsx';
import TIPMng from './TIPMng/TIPMng.jsx';
import SysSetting from './SysSetting/SysSetting.jsx';
import LogMng from './LogMng/LogMng.jsx';
import MaintainMng from './MaintainMng/MaintainMng.jsx';
import MySpace from './MySpace/MySpace.jsx';





export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log('home destroy!');
    }

    render() {
        let {match, location, history, ...rest} = this.props;
    
        return (
          <Layout>
            <Switch>
                <WrapperRoute path={URL_HOME} component={Home} {...rest}/>
                <WrapperRoute path={URL_MONITOR} component={SysMonitor} {...rest} />
                <WrapperRoute path={URL_STATISTICS} component={SysStatistics} {...rest} />
                <WrapperRoute path={URL_USER_MNG} component={UserMng} {...rest} />
                <WrapperRoute path={URL_IMG_MNG} component={ImageMng} {...rest} />
                <WrapperRoute path={URL_ASSET_MNG} component={AssetMng} {...rest} />
                <WrapperRoute path={URL_TIP_MNG} component={TIPMng} {...rest} />
                <WrapperRoute path={URL_SYS_SETTING} component={SysSetting} {...rest} />
                <WrapperRoute path={URL_LOG_MNG} component={LogMng} {...rest} />
                <WrapperRoute path={URL_MAINTAIN} component={MaintainMng} {...rest} />
                <WrapperRoute path={URL_MYSPACE} component={MySpace} {...rest} />
            </Switch>
          </Layout>
        );
    }
}








const page1 = () => {
    return (
        <div> page1 </div>
    );
}





const page2 = () => {
    return (
        <div> page2 </div>
    );
}



const page3 = () => {
    return (
        <div> page3 </div>
    );
}


const page4 = (props) => {
    debugger;
    return (
        <div> page4 </div>
    );
}





