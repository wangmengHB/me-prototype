Ext.define('PDM.controller.detail.CenterPanel', {
	extend: 'Ext.app.Controller',
	views: [
		'PDM.view.detail.CenterPanel',
		'PDM.view.detail.PatientInfoPanel',
		'PDM.view.detail.IrradiationPanel',
		'PDM.view.detail.KeyFeaturePanel',
		'PDM.view.detail.ChartLayout',
		'PDM.view.window.SingleFrame',
		'PDM.view.chart.XaAk',
	], 
	refs: [
		{
			ref: 'DetailCenterPanel',
			selector: 'detailcenterpanel',
		}, {
			ref: 'DetailPatientInfoPanel',
			selector: 'detailpatientinfopanel',
		}, {
			ref: 'DetailIrradiationPanel',
			selector: 'detailirradiationpanel',
		}, {
			ref: 'DetailKeyFeaturePanel',
			selector: 'detailkeyfeaturepanel',
		}, {
			ref: 'DetailChartLayout',
			selector: 'detailchartlayout',
		},
	],



	init: function(){
		var me = this;
		me.control({
			'detailpatientinfopanel button[cls=detail-centerpanel-openbtn]': {
				click: me.onOpenPatientInfoWin
			},
			'detailirradiationpanel button[cls=detail-centerpanel-openbtn]': {
				click: me.onOpenIrradiationWin
			},
			'detailkeyfeaturepanel button[cls=detail-centerpanel-openbtn]': {
				click: me.onOpenKeyFeatureWin
			},

		});

	},


	onOpenPatientInfoWin: function(btn) {
		var me = this;
		var infoWin = Ext.widget('windowsingleframe', {
			initConfig: {
			},
		});
		infoWin.show();
	},


	onOpenIrradiationWin: function(btn) {
		var me = this;
		alert('irradiation');
	},

	onOpenKeyFeatureWin: function(btn) {
		var me = this;
		alert('key feature');
	},






});