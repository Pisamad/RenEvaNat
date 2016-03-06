/**
 * Point d'entrée pour l'acquisition de données
 * Si possible, rafraichi les données en temps réel
 */
import {Store} from './store.jsx'
import Db from './db.js'

export const Data={

    getArticles:function(option){
        return Db.list('articles')
            .then(function (list) {
                Store.articles.list = list;
                return list;
            }.bind(this));
    },

    getEvents:function(option){
        return Db.list('events')
            .then(function (list) {
                Store.events.list = list;
                return list;
            }.bind(this));
    },

    getArticle:function(id, option){
        return Db.get('article', id)
            .then(function (article) {
                return article;
            }.bind(this));
    }

}
