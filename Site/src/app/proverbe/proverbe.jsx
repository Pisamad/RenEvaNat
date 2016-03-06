import React from 'react'
var Ajax = require('ajax-promise')
import _ from 'lodash'

export const Proverbe = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {
            proverbe:{text:''}
        };
    },

    componentWillMount: function () {
        Ajax
            .get('http://new.renevanat.fr/request/proverbe').then(function (rep) {
            this.setState({proverbe: rep});
        }.bind(this));
    },


    render: function () {
        return (
            <div>
                {this.state.proverbe.text}
            </div>
        );
    }
});
