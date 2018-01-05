Ext.define('PDM.controller.grid.HistoryList', {
	extend: 'Ext.app.Controller',
	models: [
		'PDM.model.HistoryList',
	],
	views: [
		'PDM.view.grid.HistoryList',
		'PDM.view.grid.SinglePatientList',
	],
	stores: [
		'PDM.store.HistoryList',
		'PDM.store.PatientInfo',
		'PDM.store.Irradiation',
		'PDM.store.KeyFeature',
		'PDM.store.XaAk',
		'PDM.store.XaDap',
		'PDM.store.XaPsd',
		'PDM.store.XaProcTime',
	],
	refs: [
		{
			ref: 'GridHistoryList',
			selector: 'gridhistorylist',
		}, {
			ref: 'GridSinglePatientList',
			selector: 'gridsinglepatientlist',
		},
	],


	init: function(){
		var me = this;
		me.control({
			'gridhistorylist': {
				'itemclick': me.onHistorySelect,
			}
		});
	},

	onHistorySelect: function(view, record, item, index, e){
		var me = this;
		global.current.chart01 = new PDM.view.chart.XaAk;
		var dialog = Ext.widget('detailwindow', {
			modality: global.current.modality,
		});
		dialog.show();
	},



});