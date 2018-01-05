Ext.define('PDM.view.home.HeaderPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.homeheaderpanel',
	cls: 'home-headerpanel',
	border: 1,
	minHeight: 150,
    layout: {
        type: 'hbox',
        align: 'stretchmax',
        pack: 'begin',
    },

	
	initComponent: function(){
		var me = this;
		me.callParent(arguments);
		me.add([
			me.createAppTitle(),
			me.createToolPanel()
		]);
	},

	createAppTitle: function(){
		var me = this;
		var appImg = Ext.create('Ext.Img', {
			src: '../resources/app/PatientDoseManagement/images/title/appPDM.png',
			minWidth: 100,
			minHeight: 100,
		});
		var titlePanel = Ext.create('Ext.panel.Panel', {
			minHeight: 150,
			minWidth: 200,
			border: 0,
			layout: { 
				type: 'vbox',
				align: 'left',
				pack: 'start',
			},
			items: [{
					xtype: 'tbspacer',
					flex: 1
				}, {
					xtype: 'label',
					text: 'Patient Dose',
					flex: 1,
				}, {
					xtype: 'label',
					text: ' Management',
					flex: 1,
				}, {
					xtype: 'tbspacer',
					flex: 1,
				},
			]
		});

		var appTitlePanel = Ext.create('Ext.panel.Panel', {
			minHeight: 150,
			minWidth: 300,
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'middle',
			},
			items: [appImg, titlePanel],
		});
		return appTitlePanel;

	},

	createToolPanel: function() {
		var me = this;
		var toolPanel = Ext.create('Ext.panel.Panel', {
			border: 1,
			flex: 5,
			items: [
				me.createMenuPanel(),
				me.createModalityPanel()
			],
		});	
		return toolPanel;
	},

	createMenuPanel: function() {
		var me = this;
		var refreshLabel = Ext.create('Ext.panel.Panel', {
			flex: 1,
			border: 0,
			minHeight: 50,
			minWidth: 80,
			layout: {
				type: 'vbox',
				align: 'left',
				pack: 'start',

			},
			items: [{
				xtype: 'label',
				text: 'Last Updated',
			}, {
				xtype: 'label',
				cls: 'refreshLabel',
				text: '',	
			}],
		});
		var menuPanel = Ext.create('Ext.panel.Panel', {
			minHeight: 50,
    		border: 1,
			layout: {
				type: 'hbox',
				align: 'stretch',
				pack: 'begin',
			},
			items: [
				{
					xtype: 'button',
					text: 'MENU',
					flex: 2,
				}, {
					xtype: 'tbspacer',
					flex: 5,
				}, {
					flex: 1,
					xtype: 'button',
					text: 'refresh',
					cls: 'refreshBtn',
				}, refreshLabel
			]
		});
		return menuPanel;
	},

	createModalityPanel: function () {
		var me = this;
		var panel = Ext.create('Ext.panel.Panel', {
    		border: 1,
    		minHeight: 100,
			layout: {
				type: 'hbox',
				align: 'middle',
				pack: 'begin',
			},

			items: [{
				xtype: 'tbspacer',
				flex: 1,
			}, {
				xtype: 'label',
				text: 'Modality: ',
				flex: 1,
			}, {
				xtype: 'button',
				text: 'All',
				toggleGroup: 'modalityType',
				cls: 'modality-all',
				flex: 1,
			}, {
				xtype: 'button',
				text: 'CT',
				toggleGroup: 'modalityType',
				cls: 'modality-ct',
				flex: 1,
			}, {
				xtype: 'button',
				text: 'XA',
				toggleGroup: 'modalityType',
				cls: 'modality-xa',
				flex: 1,
			}, {
				xtype: 'tbspacer',
				flex: 5,
			},

			]
		});
		return panel;
	},

});