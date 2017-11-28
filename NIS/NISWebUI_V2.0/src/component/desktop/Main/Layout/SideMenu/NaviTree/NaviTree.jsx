import './_NaviTree.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
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
} from '../../../../../../constant/url.js';

import getDefaultNavi from '../../../../../../config/navi.js';




export default class NaviTree extends React.Component {
    constructor(props) {
        super(props);
        this.renderTree = this.renderTree.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }


    renderTree(config) {
        let res = [];
        config.forEach((item, index) => {
            let navi = this.renderItem(item, `tree-${index}`);
            res.push(navi);
        });
        return res;
    }


    renderItem(navi, key) {
        let subItems = [], subContent = null;
        navi.subItems.forEach((item, index) => {
            let node = this.renderItem(item, `${key}-node-${index}`);
            subItems.push(node);
        });
        if (subItems.length > 0) {
            subContent = (
                <ul>
                    {subItems}
                </ul>
            );
        }

        return (
            <li key={key}>
                
                <NavLink to={navi.url} activeClassName={'active'} className={navi.klass}>
                    {/* <div className={navi.klass}> */}
                        {navi.title}
                    {/* </div> */}
                    </NavLink>
                
                {subContent}
            </li>
        );
    }

    render() {
        let config = getDefaultNavi();
        let nodes = this.renderTree(config);

        return (
            <ul className="navi-tree">
                {nodes}
            </ul>
        );
    }

}


function renderTree(config) {
    let res = [];
    config.forEach((navi, index) => {
        let item = renderItem(navi, `tree-${index}`);
        res.push(item);
    });
    return res;
}


function renderItem(navi, key) {
    let subItems = [], subContent = null;
    navi.subItems.forEach((item, index) => {
        let node = renderItem(item, `${key}-node-${index}`);
        subItems.push(node);
    });    
    if (subItems.length > 0) {
        subContent = (
            <ul>
                {subItems}
            </ul>
        );
    }

    return (
        <li key={key}>
            <NavLink to={navi.url}>navi.title</NavLink>
            {subContent}
        </li>
    );
}


const STYLE = {
    color: 'red',
    fontSize: '24px'
}