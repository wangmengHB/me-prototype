Ext.define('PDM.controller.detail.WestPanel', {
	extend: 'Ext.app.Controller',
	views: [
		'PDM.view.detail.HeaderPanel',
		'PDM.view.detail.WestPanel',
		'PDM.view.detail.CenterPanel',
	], 
	refs: [
		{
			ref: 'DetailWindow',
			selector: 'detailwindow',
		},
	],



	init: function(){
		var me = this;
		me.control({

		});


	},



});