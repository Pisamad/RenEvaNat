import React from 'react'
import Block from 'react-blocks';
import Style from './blockStyles'

import _ from 'lodash'
import {Login} from '../authentification/login.jsx'


export const Right = React.createClass({
    propTypes: {
    },

    getInitialState: function () {
        return {
        };
    },

    componentDidMount: function () {
    },


    render: function () {
        return (
            <Block>
                <Login/>
                {this.props.children}
            </Block>
        );
    }
});
