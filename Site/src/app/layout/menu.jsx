import React from 'react'
import {Link} from 'react-router'
//import CSSModules from 'react-css-modules'
import _ from 'lodash'
//import styles from './menu.scss'
import Button from 'react-toolbox/lib/button';

export const Menu = React.createClass({
    propTypes: {},
    getDefaultProps(){
        return {};
    },

    getInitialState() {
        return {
            menus: [{
                label: 'Accueil',
                route: 'accueil'
            }, {
                label: 'Planning',
                route: 'planning'
            }, {
                label: 'Coin lecture',
                route: 'article({article:"CoinLecture"})'
            }, {
                label: 'Trombinoscope',
                route: 'trombi'
            }, {
                label: 'Ma page',
                route: 'article({article:"PagePerso"})'
//            }, {
//                label: 'Administration',
//                route: 'admin'
            }]
        };
    },

    render() {
        const style = {
            nav: {
                position: 'absolute',
                //top: -16,
                right: 0,
                background: '0 0 rgba(255,255,255,.5)'
            },
            link: {
                display: 'inline-block'
            },
            button: {
                textDecoration: 'none',
                //color: '#fff',
                cursor: 'default',
                fontWeight: 'bold',
                //fontSize: '100%',
                textTransform: 'none',
                //width: '100%',
                fontFamily: 'Arial'
            }
        };
        return (
            <nav style={style.nav}>
                {this.state.menus.map(function (menu, i) {
                    return (
                        <Link key={i} style={style.link} to={menu.route} activeStyle={{backgroundColor: '#47891F'}}>
                            <Button style={style.button} label={menu.label}> </Button>
                        </Link>
                    )
                }.bind(this))}
            </nav>
        );
    }
});


//export default CSSModules(Menu, styles);