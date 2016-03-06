import React from 'react'
import {Link} from 'react-router'
import _ from 'lodash'
import {Data} from '../data/data.jsx'

export const Articles = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {
            list: []
        };
    },

    componentWillMount: function () {
        Data.getArticles()
            .then(function (list) {
                this.setState({list: list});
            }.bind(this));
    },


    render: function () {
        return (
            <div>
                {this.state.list
                    .slice(-3)
                    .reverse()
                    .map((article)=>(
                        <div key={article.id} >
                            <Link to={'article/'+article.id}>Edit</Link>
                            <div dangerouslySetInnerHTML={{__html:article.data.content}}></div>
                        </div>
                    ))
                }
            </div>
        );
    }
});
