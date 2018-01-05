
Ext.define('PDM.controller.home.BodyPanel', {
	extend: 'Ext.app.Controller',
	views: [
		'PDM.view.home.HeaderPanel',
		'PDM.view.home.BodyPanel',
		'PDM.view.home.body.PatientListPanel',
		'PDM.view.home.body.SinglePatientListPanel',
		'PDM.view.home.body.HistoryListPanel',
		'PDM.view.grid.PatientList',
		'PDM.view.grid.SinglePatientList',
		'PDM.view.grid.HistoryList',
		
	],
	refs: [
		{
			ref: 'HomeBodySinglePatientListPanel',
			selector: 'homebodysinglepatientlistpanel',
		}, {
			ref: 'HomeBodyPanel',
			selector:'homebodypanel',	
		}, {
			ref: 'HomeHeaderPanel',
			selector:'homeheaderpanel',	
		}
	],



	init: function(){
		var me = this;
		me.callParent();
		me.control({
			'homebodysinglepatientlistpanel button[cls=singlepatientlistpanel-backBtn]': {
				click: me.goBackToPatientList
			}
		});
	},

	goBackToPatientList: function(){
		var me = this;
		var homebody = me.getHomeBodyPanel();
		var homeheader = me.getHomeHeaderPanel();
		var singlepatientlist = homebody.down('gridsinglepatientlist');
		var historylist = homebody.down('gridhistorylist');
		singlepatientlist.reconfigure(null);
		historylist.reconfigure(null);
		homebody.singlePatientListPanel.hide();
		homebody.historyListPanel.hide();
		homebody.patientListPanel.show();
		var items = homeheader.query('button[toggleGroup=modalityType]');
		Ext.Array.each(items, function(item) {
			item.setDisabled(false);
		});
	},


});