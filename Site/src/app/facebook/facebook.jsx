import React from 'react'
import _ from 'lodash'

export const Facebook = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
    },

    render: function () {
        return (
            <iframe
                src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Frenevanat&amp;width=300&amp;height=590&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=true&amp;header=true"
                scrolling="no" frameBorder="0" style={{border: 'none', overflow: 'hidden', width: 300, height: 590}}
                allowTransparency="true" width="300px" height="590px">
            </iframe>
        );
    }
});
