import React from 'react';
import PropTypes from 'prop-types';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Layout/>
            </div>
        );
    }

}