import React from 'react';
import PropTypes from 'prop-types';
// import config from './config.js';
import './_Home.scss';
import NaviBlock from './NaviBlock/NaviBlock.jsx';
import getDefaultNavi from '../../../../config/navi.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let items = getDefaultNavi();
        let nodes = [];
        items.forEach((item, index) => {
        let block = (
          <NaviBlock 
            title={item.title} 
            activeIcon={item.activeIcon} 
            url={item.url}
            subItems={item.subItems}
            key={`home-navi-${index}`}
          />
        );
            nodes.push(block);
        });

        return (
            <div className="home">
                {nodes}
            </div>
        );
    }
}

Home.propTypes = {

};