Ext.define('PDM.view.detail.ChartLayout', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.detailchartlayout',
	cls: 'detail-chartlayout',
	border: 0,
	paddingBorder: 0,

    layout: 'card',
    activeItem: 0,  

	modality: '',


	initComponent: function() {
		var me = this;
		me.callParent(arguments);
		if (me.modality !== "ct" && me.modality !== "xa") {
			console.log('modality is invalid');
			return;
		}

		me.add([me.create2x2Layout(), me.create2x1Layout()]);

	},

	create2x2Layout: function() {
		var me = this;
		var panel = Ext.widget('panel', {
			border: 0,
			layout: 'anchor',
		});

		var topPanel = Ext.widget('panel', {
			anchor: '100% 50%',
			border: 0,
			margin: '0 0 10 0',
			layout: {
				type: 'hbox',
				align: 'stretch',
			},
			items: [
				me.createQuarterPanel(
					me.modality=='ct'?'CTDIvol Analysis':'AK Analysis',
					'quarterchart01', 
					'quarterchartthumbnail',
					global.constant.chart.thumbnailId.quarter01
				), {
					xtype: 'tbspacer',
					flex: 1,
				}, 
				me.createQuarterPanel(
					me.modality=='ct'?'DLP Analysis':'DAP Analysis',
					'quarterchart02',
					'quarterchartthumbnail',
					global.constant.chart.thumbnailId.quarter02
				)
			]
		});
		var botPanel = Ext.widget('panel', {
			anchor: '100% 50%',
			border: 0,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [
				me.createQuarterPanel(
					me.modality=='ct'?'SSDE Analysis':'PSD Analysis',
					'quarterchart03',
					'quarterchartthumbnail',
					global.constant.chart.thumbnailId.quarter03
				), {
					xtype: 'tbspacer',
					flex: 1,
				}, 
				me.createQuarterPanel(
					'Procedures Time Analysis',
					'quarterchart04',
					'quarterchartthumbnail',
					global.constant.chart.thumbnailId.quarter04
				)
			],
		});
		panel.add([topPanel, botPanel]);

		return panel;
	},




	create2x1Layout: function(){
		var me = this;
		var panel = Ext.widget('panel', {
			border: 0,
			layout: 'anchor',
		});
		var topPanel = Ext.widget('panel', {
			anchor: '100% 50%',
			border: 1,
			margin: '0 0 10 0',
			layout: 'fit',
		});

		
		var botPanel = Ext.widget('panel', {
			anchor: '100% 50%',
			border: 1,
			layout: 'fit',
		});

		topPanel.add(me.createHalfPanel(
			'',
			'halfchart01',
			'halfchartthumbnail',
			global.constant.chart.thumbnailId.half01
		));
		botPanel.add(me.createHalfPanel(
			'Procedures Time Analysis',
			'halfchart02',
			'halfchartthumbnail',
			global.constant.chart.thumbnailId.half02
		));

		panel.add([topPanel, botPanel]);


		return panel;
	},

	createQuarterPanel: function(title,id, cls, thumbnailId) {
		var me = this;
		var panel = Ext.widget('panel', {
			flex: 16,
			border: 1,
			cls: cls,
			id: id,
			layout: 'anchor',
		});
		var header = Ext.widget('panel', {
			anchor: '100% 15%',
			layout: {
				type: 'hbox',
				align: 'stretch',
			},
			items: [{
				xtype: 'label',
				text: title,
				id: 'chartlayout_' + id + '_title',
				flex: 5,
			}, {
				xtype: 'button',
				text: 'open',
				cls: 'detail-centerpanel-openbtn',
				flex: 1,
			}],
		});

		var body = Ext.widget('panel', {
			anchor: '100% 85%',
			border: 0,
			layout: 'fit',
			html: '<image id="' + thumbnailId +'"></image>',
		});

		panel.add([header, body]);

		return panel;
	},


	createHalfPanel: function(title, id, cls, thumbnailId) {
		var me = this;
		var panel = Ext.widget('panel', {
			id: id,
			cls: cls,
			layout: 'anchor',
		});
		var header = Ext.widget('panel', {
			anchor: '100% 15%',
			layout: {
				type: 'hbox',
				align: 'stretch',
			},
			items: [{
				xtype: 'label',
				text: title,
				flex: 7,
			}, {
				xtype: 'button',
				text: 'open',
				cls: 'detail-centerpanel-openbtn',
				flex: 1,
			}],
		});
		var body = Ext.widget('panel', {
			anchor: '100% 85%',
			border: 0,
			layout: 'fit',
			html: '<image id="' + thumbnailId +'"></image>',

		});

		panel.add([header, body]);

		return panel;

	},


	showThumbnail: function(chartIndex){
		var me = this;
		var thumbnailQuarter01 = $('#'+ global.constant.chart.thumbnailId.quarter01)[0];
		var thumbnailQuarter02 = $('#'+ global.constant.chart.thumbnailId.quarter02)[0];
		var thumbnailQuarter03 = $('#'+ global.constant.chart.thumbnailId.quarter03)[0];
		var thumbnailQuarter04 = $('#'+ global.constant.chart.thumbnailId.quarter04)[0];
		switch (chartIndex) {
			case 1:
				thumbnailQuarter01.src = global.current.thumbnailJPEG.quarter01;
				thumbnailQuarter01.height = thumbnailQuarter01.parentElement.clientHeight;
				thumbnailQuarter01.width = thumbnailQuarter01.parentElement.clientWidth;
				break;
			case 2:
				thumbnailQuarter02.src = global.current.thumbnailJPEG.quarter02;
				thumbnailQuarter02.height = thumbnailQuarter01.parentElement.clientHeight;
				thumbnailQuarter02.width = thumbnailQuarter01.parentElement.clientWidth;
				break;
			case 3:
				thumbnailQuarter03.src = global.current.thumbnailJPEG.quarter03;
				thumbnailQuarter03.height = thumbnailQuarter01.parentElement.clientHeight;
				thumbnailQuarter03.width = thumbnailQuarter01.parentElement.clientWidth;
				break;
			case 4:
				thumbnailQuarter04.src = global.current.thumbnailJPEG.quarter04;
				thumbnailQuarter04.height = thumbnailQuarter01.parentElement.clientHeight;
				thumbnailQuarter04.width = thumbnailQuarter01.parentElement.clientWidth;
				break;
			default:
				break;								
		}


	},


});