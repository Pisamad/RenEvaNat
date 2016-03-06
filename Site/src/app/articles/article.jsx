import React from 'react'
//import CSSModules from 'react-css-modules'
import styles from './article.scss'
import _ from 'lodash'
import TinyMCE from 'react-tinymce';
import {Data} from '../data/data.jsx'

export const Article = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {
            article: {
                data: {
                    content: "... loading ..."
                }
            }
        };
    },

    componentWillMount: function () {
        Data.getArticle(this.props.params.id)
            .then(function (article) {
                this.setState({article: article});
            }.bind(this));
    },

    componentWillUpdate: function (nextProps, nextState) {
        tinymce.EditorManager.get(0).setContent(nextState.article.data.content)
    },


    handleEditorChange(e) {
//        console.log(e.target.getContent());
    },

    render() {
        const style={p:{backgroundColor:'red'}};
        return (
            <TinyMCE
                content={this.state.article.data.content}
                config={{
                        content_style:styles, //'p{background-color:red}',
                          plugins: 'autolink autoresize link image imagetools lists media save code table',
                          toolbar: 'save | code | undo redo | bold italic | table | alignleft aligncenter alignright | media image',
                          save_onsavecallback: function () { console.log('Saved'); },
//                          imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions",
                          media_live_embeds: true
//                          inline:true
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
});

