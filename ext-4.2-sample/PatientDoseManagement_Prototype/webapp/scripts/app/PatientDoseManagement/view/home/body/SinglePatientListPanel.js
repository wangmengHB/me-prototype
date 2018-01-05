Ext.define('PDM.view.home.body.SinglePatientListPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.homebodysinglepatientlistpanel',
	cls: 'home-body-singlepatientlistpanel',
	anchor: '100% 30%',
	minHeight: 180,
	layout: 'anchor',
	margin: '0 0 20 0',

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
				text: 'Patient List',
				flex: 1,
			}, {
				xtype: 'tbspacer',
				flex: 7,
			}, {
				xtype: 'button',
				text: 'Back',
				margin: '0 20 0 0',
				cls: 'singlepatientlistpanel-backBtn',
				flex: 1,
			}
			],
		});
		var contentPanel = Ext.create('Ext.panel.Panel', {
			anchor: '100% 100%',
			items: [{xtype:'gridsinglepatientlist'}],
		});

		me.add([titlePanel, contentPanel]);
		
	},
	
});