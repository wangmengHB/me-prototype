import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class NaviBlock extends React.Component {
    constructor(props) {
        super(props);
        this.renderItems.bind(this);
    }
    
    renderItems(subItems) {
        let res = [];
        subItems.forEach((item, index) => {
            let leaf = (
            <li key={`navi-block-${index}`}> 
                <div className="splitter"/>
                <Link to={item.url}>{item.title}</Link>
            </li>
            );
            res.push(leaf);
        });
        return res;
    }

    render() {
        let {title, activeIcon, url, subItems} = this.props;

        return (
            <div className="navi-block">
                <ul>
                    <span className="title">
                        <img src={activeIcon}/>
                        <Link to={url}>{title}</Link>
                    </span>
                    {this.renderItems(subItems)}
                </ul>
            </div>
        );
    }


}

