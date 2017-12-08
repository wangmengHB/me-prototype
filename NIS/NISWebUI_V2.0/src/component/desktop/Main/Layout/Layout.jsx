import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header.jsx';
import SideMenu from './SideMenu/SideMenu.jsx';
import PageContainer from './PageContainer/PageContainer.jsx';
import './_Layout.scss';
import RedirectToLogin from '../../Login/RedirectToLogin.jsx';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isLogin: true,
        };
        this.handleCollapse = this.handleCollapse.bind(this);
    }

    handleCollapse() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        let {collapse, isLogin} = this.state;
        return (
            <div className="layout">
                <Header {...this.props}/>
                <div className="body">
                    <SideMenu 
                      {...this.props} 
                      collapse={collapse} 
                      onCollapse={this.handleCollapse}
                    />
                    <PageContainer 
                      {...this.props} 
                      collapse={collapse}
                    >
                        {this.props.children}
                    </PageContainer>
                </div>
                {!isLogin && <RedirectToLogin />}
            </div>
        );
    }
}

Layout.propTypes = {

};