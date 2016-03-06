import React from 'react'
import Block from 'react-blocks';

import {Header} from './header.jsx'
import {Menu} from './menu.jsx'
import {Container} from './container.jsx'
import {Left} from './left.jsx'
import {Main} from './main.jsx'
import {Right} from './right.jsx'
import {Footer} from './footer.jsx'

export const Layout = React.createClass({
    propTypes: {},

    getDefaultProps(){
        return {
            right:[]
        };
    },


    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
    },


    render: function () {
        return (
            <Block>
                <Header>
                    <Menu/>
                </Header>
                <Container>
                    <Left ref="left"/>
                    <Main>
                        {this.props.main}
                    </Main>
                    <Right>
                        {this.props.right}
                    </Right>
                </Container>
                <Footer/>
            </Block>
        );
    }
});
