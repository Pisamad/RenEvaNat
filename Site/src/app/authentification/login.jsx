import React from 'react'

import Input from 'react-toolbox/lib/input';

import {Store} from '../data/store.jsx'
import Db from '../data/db.js'
import md5 from 'js-md5'

export const Login = React.createClass({
    propTypes: {},

    getDefaultProps(){
        return {};
    },


    getInitialState: function () {
        return {
            login:false,
            logon: {
                login: '',
                passwd: ''
            },
            message: ''
        };
    },

    componentDidMount: function () {
    },

    tryAuthentification: function () {
        Store.resetLogin();
        $this.setState({message: ''});
        return Db.login($this.state.logon.login)
            .then(function (donnees) {
                let salt = donnees.salt;
                let passwd = md5($this.state.logon.passwd + salt);
                return Db.cnx(passwd)
            })
            .then(function (donnees) {
                if (donnees.authentif == 'OK') {
                    Store.setLogin(donnees);
                    $this.setState({
                        message : 'Bienvenue',
                        login: true
                    });
                }
                else {
                    $this.setState({
                        message : 'Login failed',
                        login: false
                    });
                }
            });
    },

    handleChange: function (name, value) {
        this.setState({[name]: value});
    },

    render: function () {
        if (this.state.login) {
            // User is logon
            return (
                <div>
                    Bonjour {this.state.logon.login}

                </div>
            );

        } else {
            // No user logon, guest mode
            return (
                <section>
                    <Input type='text' label='Login' name='name'/>
                    {(this.state.logon.login!=='') && <Input type='password' label='Mot de passe'/>}
                </section>
            );

        }

    }
});
