Ext.define('PDM.view.detail.HeaderPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.detailheaderpanel',
	cls: 'detail-headerpanel',
	layout: {
		type: 'hbox',
		align: 'stretch',
	},
	
	modality: '', 


	initComponent:function(){
		var me = this;
		me.callParent(arguments);

		if (me.modality !== "ct" && me.modality !== "xa") {
			console.log('modality is invalid');
			return;
		}

		var titlePanel = Ext.widget('panel', {
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'bottom',
			},
			items: [
				{
					xtype: 'panel',
					flex: 3,
					border: 0,
					height: '100%',
					layout: {
						type: 'vbox',
						align: 'left'
					},
					items: [
						{
							xtype: 'tbspacer',
							flex: 1,
						}, {
							xtype: 'label',
							text: me.modality =='XA'?'XA Anaylsis':'CT Analysis',
							flex: 1,
						}, {
							xtype: 'label',
							text: 'Trends',
							flex: 1,
						}, {
							xtype: 'tbspacer',
							flex: 1,

						}
					],
				}, {
					xtype: 'image',
					src: '../resources/app/PatientDoseManagement/images/title/ct.png',
					minWidth: 50,
					minHeight: 50,
					flex: 1,
				}
			]
		});

		var toolPanel = Ext.widget('panel', {
			flex: 5,
			layout: {
				type: 'vbox',
				align: 'stretch',
			},
			items: [
				{
					xtype: 'panel',
					flex: 1,
					layout: {
						type: 'hbox',
						align: 'stretch',
					},
					items: [
						{
							xtype: 'button',
							text: 'MENU',
							flex: 1,
						}, {
							xtype: 'tbspacer',
							flex: 7,
						}
					],
				}, {
					xtype: 'panel',
					flex: 2,
					layout: {
						type: 'hbox',
						align: 'middle',
					},
					items: [
						{
							xtype: 'tbspacer',
							flex: 1,
						}, {
							xtype: 'label',
							text: 'Analysis Condition: ',
							flex: 2,
						}, {
							xtype: 'button',
							text: 'All <br/> Patients',
							toggleGroup: 'analysisCondition',
							flex: 1,
						}, {
							xtype: 'button',
							text: 'This <br/> Patient',
							toggleGroup: 'analysisCondition',
							cls: 'thisPatient',
							flex: 1,
						}, {
							xtype: 'button',
							text: 'User <br/> Specific',
							toggleGroup: 'analysisCondition',
							flex: 1,
						}, {
							xtype: 'tbspacer',
							flex: 1,
						},  {
							xtype: 'label',
							text: 'Trend Type: ',
							flex: 2,
						}, {
							xtype: 'button',
							text: 'PSD <br/> (mGy)',
							flex: 1,
							cls: 'trend-chart01',
							toggleGroup: 'trendType',
						}, {
							xtype: 'button',
							text: 'AK <br/> (mGy)',
							flex: 1,
							cls: 'trend-chart02',
							toggleGroup: 'trendType',
						}, {
							xtype: 'button',
							text: 'DAP <br/> (cGy.cm<sup>2</sup>)',
							flex: 1,
							cls: 'trend-chart03',
							toggleGroup: 'trendType',
						}, {
							xtype: 'tbspacer',
							flex: 1,
						}
					],
				}
			],
		});

		
		me.add([titlePanel, toolPanel]);


	},


});