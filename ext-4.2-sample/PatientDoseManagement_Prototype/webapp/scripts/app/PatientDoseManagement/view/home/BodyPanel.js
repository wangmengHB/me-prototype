
Ext.define('PDM.view.home.BodyPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.homebodypanel',
	cls: 'home-bodypanel',
	border: 1,
	padding: '10 10 10 10',

	layout: 'anchor',

	patientListPanel: null,
	singlePatientListPanel: null,
	historyListPanel: null,


	initComponent: function() {
		var me = this;
		me.callParent(arguments);
		me.patientListPanel = Ext.widget('homebodypatientlistpanel');
		me.singlePatientListPanel = Ext.widget('homebodysinglepatientlistpanel');
		me.historyListPanel = Ext.widget('homebodyhistorylistpanel');
		me.add([
			me.patientListPanel,
			me.singlePatientListPanel,
			me.historyListPanel,
		]);
		me.singlePatientListPanel.hide();
		me.historyListPanel.hide();

	},



});