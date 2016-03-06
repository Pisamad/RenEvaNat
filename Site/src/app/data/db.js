var Ajax =  require('ajax-promise')

const base = 'http://localhost:3080';
//var base = 'http://new.renevanat.fr';

module.exports = {
    dbStatus: {},

    toQueryString: function (param) {
        if (!param)
            return '';
        return '?' + Object.keys(param).map(function (key) {
                if (param[key] === undefined)
                    return '';
                return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
            }).join('&');
    },

    check: function (table) {
        var newStatus = {};
        return Ajax
            .get(base + '/request/status/' + table)
            .then(function (rep) {
                newStatus[table] = rep.data[0];
                if (dbStatus[table] === newStatus[table]) {
                    return true;
                }
                dbStatus[table] = newStatus[table];
                return false;
            });
    },

    get: function (table, id) {
        return Ajax
            .get(base + '/request/' + table + '/' + id, {cache: true}).then(function (rep) {
                return rep;
            })
            .catch(function (err) {
                console.error('errors in response', err);
            });
    },

    list: function (table, param) {
        var query = '';//toQueryString(param);
        var request = '/request/' + table + query;
        return Ajax
            .get(base + request, {cache: true}).then(function (rep) {
                return rep;
            });
    },

    remove: function (table, id) {
        return Ajax
            .delete(base + '/request/' + table + '/' + id).then(function (rep) {
                return rep.data;
            });
    },

    update: function (table, elts) {
        return Ajax
            .post(base + '/request/' + table, elts).then(function (rep) {
                return rep.data;
            });
    },

    lock: function (table, id) {
    }
};
