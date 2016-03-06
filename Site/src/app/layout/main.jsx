import React from 'react'
import Block from 'react-blocks';
import Style from './blockStyles'

import _ from 'lodash'

export const Main = React.createClass({
    propTypes: {},

    getDefaultProps(){
        return {};
    },

    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
    },

    render: function () {
        let { centered } = Style;
        const style = {
            width: 1000,
            paddingLeft: 10,
            paddingRight: 10,
            background: "0 0 rgba(255,255,255,.9)"
        };

        return (
            <Block style={style}>
                {this.props.children}
            </Block>
        );
    }
});
