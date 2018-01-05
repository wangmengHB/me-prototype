Ext.define('PDM.view.Viewport', {
	extend:'Ext.container.Viewport',
	layout: 'border',
	autoScroll: false,
	margin: '10 10 10 10',
	cls: 'viewport',

	// build the main page	
	initComponent: function() {
		var me = this;
		me.callParent(arguments);
		me.add([
			{
				region: 'north',
				xtype: 'homeheaderpanel',
				flex: 1,
			}, {
				region: 'center',
				xtype: 'homebodypanel',
				flex: 6			
			}
		]);

	},


});