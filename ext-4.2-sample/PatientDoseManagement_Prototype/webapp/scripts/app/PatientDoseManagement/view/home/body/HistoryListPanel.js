Ext.define('PDM.view.home.body.HistoryListPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.homebodyhistorylistpanel',
	cls: 'home-body-historylistpanel',
	anchor: '100% 70%',
	layout: 'anchor',

	initComponent: function(){
		var me = this;
		me.callParent(arguments);
		var titlePanel = Ext.create('Ext.panel.Panel', {
			anchor: '100% 10%',
			minHeight: 80,
			layout: {
				type: 'hbox',
				align: 'middle',
				pack: 'begin',
			},
			items: [{
				xtype: 'label',
				text: 'History List',
				flex: 1,
			}, {
				xtype: 'tbspacer',
				flex: 5,
			}
			],
		});
		var contentPanel = Ext.create('Ext.panel.Panel', {
			anchor: '100% 100%',
			items: [{xtype:'gridhistorylist'}],
		});

		me.add([titlePanel, contentPanel]);
		
	},

});