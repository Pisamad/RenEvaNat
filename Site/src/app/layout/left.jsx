import React from 'react'
import Block from 'react-blocks';
import Style from './blockStyles'

import _ from 'lodash'
import {Button, IconButton} from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';

export const Left = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {
            active: false
        };
    },

    componentDidMount: function () {
    },

    handleToggle: function () {
        this.setState({active: !this.state.active});
    },

    render: function () {
        const style = {
            position: 'fixed',
            top: 0,
            left: 0
        };
        return (
            <Block >
                <Button style={style} icon='+'  accent onClick={this.handleToggle}/>
                <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
                    {this.props.children}
                </Drawer>
            </Block>
        );
    }
});
