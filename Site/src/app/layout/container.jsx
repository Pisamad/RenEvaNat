import React from 'react'
import Block from 'react-blocks';
import Style from './blockStyles'

import _ from 'lodash'
import fond from '../img/Fond1.jpg'

export const Container = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
    },


    render: function () {
        const style = {
            bg: {
                minHeight: '100%',
                minWidth: 1024,
                width: '100%',
                height: 'auto',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1000
            }
        };
        return (
            <Block layout horizontal justifyCenter  >
                <img style={style.bg} src={fond}/>
                {this.props.children}
            </Block>
        );
    }
});
