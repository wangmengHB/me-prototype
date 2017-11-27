import React from 'react';
import PropTypes from 'prop-types';




export default class PageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {collapse} = this.props;

        return (
          <div className={`page-container${collapse?' collapse':''}`}>
              {this.props.children}
          </div>
        );
    }

}

PageContainer.propTypes = {
    collapse: PropTypes.bool.isRequired
};
