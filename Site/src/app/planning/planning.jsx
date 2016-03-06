import React from 'react'
import {Link} from 'react-router'
import _ from 'lodash'
import {Data} from '../data/data.jsx'

export const Planning = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {
            list: []
        };
    },

    componentWillMount: function () {
        Data.getEvents()
            .then(function (list) {
                this.setState({list: list});
            }.bind(this));
    },


    render: function () {
        return (
            <div>
                {this.state.list
//                    .slice(-50)
                    .map((event)=>(
                        <div key={event.id} >
                            <Link to={'event/'+event.id}>Edit</Link>
                            <span> {event.content.date}</span>
                            <h3 dangerouslySetInnerHTML={{__html:event.content.title}}></h3>
                            <div dangerouslySetInnerHTML={{__html:event.content.content}}></div>
                        </div>
                    ))
                }
            </div>
        );
    }
});
