Ext.define('PDM.global.storage', {});
var global = global || {};
global.storage = global.storage || {};

(function(){

	global.storage.cacheLocal = {
	    set: function (key, value) {
	        localStorage.setItem(key, value);
	    },
	    get: function (key) {
	        return localStorage.getItem(key);
	    },
	    setBoolean: function (key, value) {
	        localStorage.setItem(key, value);
	    },
	    getBoolean: function (key) {
	        var bool = false;
	        if (Ext.util.Format.uppercase(localStorage.getItem(key)) == "TRUE") {
	            bool = true;
	        }
	        return bool;
	    },
	    setObject: function (key, value) {
	        localStorage.setItem(key, Ext.encode(value));
	    },
	    getObject: function (key) {
	        var obj = localStorage.getItem(key);
	        return obj === undefined ? obj : Ext.decode(obj);
	    },
	    clear: function () {
	        localStorage.clear();
	    },
	    remove: function (key) {
	        localStorage.removeItem(key);
	    }
	};

	global.storage.report = {
	    _report: {},

	    _threshHold: 50,

	    setObject: function (id, val) {
	        return this._report[id] = Ext.encode(val);
	    },

	    getObject: function (id) {
	        return this._report.hasOwnProperty(id) ? Ext.decode(this._report[id]) : undefined;
	    },

	    checkObject: function (id) {
	        return this._report.hasOwnProperty(id);
	    },

	    remove: function (id) {
	        return delete this._report[id];
	    },

	    clear: function () {
	        return this._report = {};
	    }
	};


}());
