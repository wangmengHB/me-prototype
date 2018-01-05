Ext.define('PDM.view.home.body.PatientListPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.homebodypatientlistpanel',
	cls: 'home-body-patientlistpanel',
	anchor: '100% 100%',
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
				text: 'Patient List',
				flex: 1,
			}, {
				xtype: 'tbspacer',
				flex: 5,
			}, {
				xtype: 'label',
				text: 'Search for list',
				flex: 1,
			}, {
				xtype: 'textfield',
				flex: 1,
			}, {
				xtype: 'tbspacer',
				flex: 1,
			}

			],
		});

		var contentPanel = Ext.create('Ext.panel.Panel', {
			anchor: '100% 90%',
			items: [{xtype:'gridpatientlist'}],
		});

		me.add([titlePanel, contentPanel]);

	},

});