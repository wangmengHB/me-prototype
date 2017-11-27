import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header.jsx';
import SideMenu from './SideMenu/SideMenu.jsx';
import PageContainer from './PageContainer/PageContainer.jsx';
import './_Layout.scss';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
        this.handleCollapse = this.handleCollapse.bind(this);
    }

    handleCollapse() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        let {collapse} = this.state;
        return (
            <div className="layout">
                <Header/>
                <div className="body">
                    <SideMenu collapse={collapse} onCollapse={this.handleCollapse}/>
                    <PageContainer collapse={collapse}>
                        {this.props.children}
                    </PageContainer>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {

};