Ext.define('PDM.controller.detail.Window', {
	extend: 'Ext.app.Controller',
	views: [
		'PDM.view.detail.Window',
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
			'detailwindow button[cls=closeBtn]': {
				click: function(){
					var detailWin = me.getDetailWindow();
					Ext.getCmp('window_chart01frame').close();
					Ext.getCmp('window_chart02frame').close();
					Ext.getCmp('window_chart03frame').close();
					Ext.getCmp('window_chart04frame').close();
					global.current.chartStore.store01 = null;
					global.current.chartStore.store02 = null;
					global.current.chartStore.store03 = null;
					global.current.chartStore.store04 = null;
					detailWin.close();
				},
			}
		});

	},



});