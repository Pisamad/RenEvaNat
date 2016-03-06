/**
 * Stockage et gestion du cache des données de la session
 *
 */

export const Store={

    articles:{
        lastUpdate:0, // Date of last update
        list:[]
    },

    users:{
        lastUpdate:0, // Date of last update
        list:[]
    },

    events:{
        lastUpdate:0, // Date of last update
        list:[]
    },

    resetLogin:function(){
        this.login={
            id:0,
            name:'',
            profile:{}
        }
    },

    setLogin:function(login){
        this.login=login;
    }

}
