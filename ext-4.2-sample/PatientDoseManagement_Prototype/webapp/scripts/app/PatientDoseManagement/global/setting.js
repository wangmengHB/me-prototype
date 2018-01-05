
Ext.define('PDM.global.setting', {});
var global =  global || {};

(function(){

	global.setting = global.setting || {};


    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

	
	global.setting.locale = "en-US";
	global.setting.dateformat = 1;
	global.setting.usergroup = 'Reviewer';
	global.setting.limitation = 1000000;
	global.setting.exportpath = '/temp/uat';


	global.setting.prepareQueue = [
		[
			'getinitsetting.action', 
			{'param':'xxx'}, 
			succesCallback1, 
			"error mesage"
		],

	];

	function succesCallback1 (res) {
		var resObj = JSON.parse(res.responseText);
		if (resObj) {
			global.setting.locale = resObj.locale.substring(0,2).toUpperCase();
			global.setting.dateformat = resObj.dateformat;
			global.setting.usergroup = resObj.usergroup;
			global.setting.limitation = resObj.limitation;
			global.setting.exportpath = resObj.exportpath;
		} else {
			return false;
		}
		if (global.i18n[global.setting.locale]) {
			global.i18n.map = global.i18n[global.setting.locale];
		} else {
			return false;
		}
		return true;
	}



}());
// jshint
// grunt




