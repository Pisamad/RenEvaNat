import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'

import {Layout} from './layout/layout.jsx'
import {Articles} from './articles/articles.jsx'
import {Article} from './articles/article.jsx'
import {Planning} from './planning/planning.jsx'
import {Proverbe} from './proverbe/proverbe.jsx'
import {Facebook} from './facebook/facebook.jsx'

ReactDom.render(
    <Router history={hashHistory}>
        <Redirect from="/" to="accueil"/>
        <Route path="/" component={Layout}>
            <Route path="accueil" components={{main:Articles, right:()=><div><Proverbe/><Facebook/></div>}}/>
            <Route path="planning" components={{main:Planning}}/>
            <Route path="article/:id" components={{main:Article}}/>
        </Route>
    </Router>
    , document.getElementById('body'));
