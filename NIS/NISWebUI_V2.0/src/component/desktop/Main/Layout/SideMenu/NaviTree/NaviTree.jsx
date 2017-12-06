import './_NaviTree.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import getDefaultNavi, {getTreeNavi} from '../../../../../../config/navi.js';




export default class NaviTree extends React.Component {
    constructor(props) {
        super(props);
        this.renderTree = this.renderTree.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleItem = this.toggleItem.bind(this);
        let tree = getTreeNavi();
        this.state = {
            tree: tree
        }
    }

    toggleItem(navi, e) {
        e.stopPropagation();
        e.preventDefault();
        let {tree} = this.state;
        let clone = JSON.parse(JSON.stringify(tree));
        clone.filter((item) => item.url === navi.url).forEach((item) => item.__collapsed = !item.__collapsed);
        this.setState({
            tree: clone
        });
        // let {router} = this.context;
        // if (router.route.location.pathname === navi.url) {
        //     router.history.replace(navi.url);
        // } else {
        //     router.history.push(navi.url);
        // }
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
        let len = subItems.length;
        let collapsed = navi.__collapsed;
        return (
            <li key={key}>
                <div className="wrapper" onClick={this.toggleItem.bind(null, navi)}>
                    <i className={`node${len == 0 ? '' : (collapsed ? ' collapse' : ' expand')}` }></i>
                    <NavLink
                      to={navi.url} 
                      activeClassName={'active'} 
                      className={`${navi.klass} link`}
                    >
                      {navi.title}
                    </NavLink>
                </div>
                <ul className={collapsed?'hide': 'show'}>
                    {subItems}
                </ul>
            </li>
        );
    }

    render() {
        let {tree} = this.state;
        let nodes = this.renderTree(tree);

        return (
            <ul className="navi-tree">
                {nodes}
            </ul>
        );
    }

}

NaviTree.contextTypes = {
    router: PropTypes.object.isRequired
};

NaviTree.propTypes = {

};
