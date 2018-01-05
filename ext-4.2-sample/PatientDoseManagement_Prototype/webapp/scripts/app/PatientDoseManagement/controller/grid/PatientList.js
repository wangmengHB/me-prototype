Ext.define('PDM.controller.grid.PatientList', {
	extend: 'Ext.app.Controller',
	models: [
		'PDM.model.PatientList',
	],
	views: [
		'PDM.view.grid.PatientList',
		'PDM.view.home.BodyPanel',
		'PDM.view.home.HeaderPanel',
	],
	stores: [
		'PDM.store.PatientList',
	],
	refs: [
		{
			ref: 'GridPatientList',
			selector: 'gridpatientlist',
		}, {
			ref: 'HomeHeaderPanel',
			selector: 'homeheaderpanel',
		}, {
			ref: 'HomeBodyPanel',
			selector: 'homebodypanel',
		},
	],

	init: function(){
		var me = this;
		me.control({
			'gridpatientlist': {
				'itemclick': me.onPatientSelect,
				'itemdblclick': function(view, record, item, index, e){
					// alert('double click');
				},
			}
		});
	},

	onPatientSelect: function(view, record, item, index, e) {
		var me = this;
		if (global.current.modality !== 'ct' && global.current.modality !== 'xa') {
			return;
		}
		var homeheader = me.getHomeHeaderPanel();
		var homepagebody = me.getHomeBodyPanel();
		var grid = me.getGridPatientList();
		var singlepatientlist = homepagebody.down('gridsinglepatientlist');
		var historylist = homepagebody.down('gridhistorylist');
		grid.getSelectionModel().select(index);
		var item = grid.getSelectionModel().getLastSelected();
		var store = Ext.create('PDM.store.PatientList', {
			proxy: null,
			data: item.data,
		});
		homepagebody.patientListPanel.hide();
		singlepatientlist.updateColumns();
		historylist.updateColumns();
		
		singlepatientlist.reconfigure(store);
		homepagebody.singlePatientListPanel.show();
		homepagebody.historyListPanel.show();

		var historyStore = Ext.create('PDM.store.HistoryList');
		historyStore.load({
			params: {
				patientId: item.get('patientId'),
				modality: global.current.modality,
			},
			callback: function(a, b, success){
				if (success) {
					historylist.reconfigure(historyStore);
				}

			}
		});

		var items = homeheader.query('button[toggleGroup=modalityType]');
		Ext.Array.each(items, function(item) {
			item.setDisabled(true);
		});

	},





});