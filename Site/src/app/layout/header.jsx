import React from 'react'
import _ from 'lodash'
import bandeau from '../img/bandeau.png'
import AppBar from 'react-toolbox/lib/app_bar';


export const Header = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
    },


    render: function () {
        const style = {
            bandeau: {
                position: 'fixed',
                backgroundImage: 'url(' + bandeau + ')',
                backgroundRepeatY: 'no-repeat',
                minHeight: 105,
                width: "calc(100% - 15px)"
            },
            calle:{
                minHeight: 105,
                width: "calc(100% - 15px)"
            }
        };
        return (
            <div>
                <div style={style.bandeau}>
                    {this.props.children}
                </div>
                <div style={style.calle}>
                </div>
            </div>
        );
    }
});

