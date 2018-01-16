import './_BusyIndicator.scss';
import React from 'react';
import PropTypes from 'prop-types';




export default class BusyIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.show = this.show.bind(this);
    }
    
    show(res) {
        this.setState({
            show: res
        });
    }

    render() {
        let {show} = this.state;
        return (
          <div className={`busy ${show? 'show': 'hide'}`}>
            <div className='icon'>
                Loading
            </div>
          </div>
        );
    }
}


BusyIndicator.propTypes = {

};