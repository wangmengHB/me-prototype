
Ext.define('PDM.global.current', {});

var global = global || {};
global.current = global.current || {};

(function(){

	global.current = {
		modality: 'all',

		thumbnailJPEG: {
			quarter01: null,
			quarter02: null,
			quarter03: null,
			quarter04: null,
			half01: null,
			half02: null,
			half03: null,
			half04: null
		},

		chartStore: {
			store01: null,
			store02: null,
			store03: null,
			store04: null,
		},
	};



}());


