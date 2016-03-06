import React from 'react'
import _ from 'lodash'

export const Footer = React.createClass({
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
            <div>
                Footer
                {this.props.children}
            </div>
        );
    }
});
