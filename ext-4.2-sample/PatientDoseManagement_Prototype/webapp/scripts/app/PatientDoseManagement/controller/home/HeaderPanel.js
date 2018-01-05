
Ext.define('PDM.controller.home.HeaderPanel', {
	extend: 'Ext.app.Controller',
	views: [
		'PDM.view.home.HeaderPanel',
		'PDM.view.home.BodyPanel',
	],
	refs: [
		{
			ref: 'GridPatientList',
			selector: 'gridpatientlist',
		}, {
			ref: 'HomeHeaderPanel',
			selector:'homeheaderpanel',	
		},
	],

	init: function(){
		var me = this;
		me.callParent();
		me.control({
			'homeheaderpanel': {
				afterrender: me.onHomePageRender,
			},
			'gridpatientlist': {
				afterrender: me.onRefresh,
			}, 
			'homeheaderpanel button[cls=refreshBtn]': {
				click: me.onRefresh,
			},
			'homeheaderpanel button[toggleGroup=modalityType]': {
				click: me.onChangeModalityType
			},
		});
	},

	onHomePageRender: function(panel) {
		var me = this;
		var header = me.getHomeHeaderPanel();
		var modalityBtn = header.down('button[cls=modality-all]');
		modalityBtn.toggle(true);
		global.current.modality = 'all';

	},

	onRefresh: function() {
		var me = this;
		var header = me.getHomeHeaderPanel();
		var grid = me.getGridPatientList();
		var refreshLabel = header.down('label[cls=refreshLabel]');
		var store = grid.store;
		store.load({
			params: {
				modality: global.current.modality,
			},
			callback: function(a, b, success){
				if (success) {
					var date = new Date();
					refreshLabel.setText(date.toTimeString().substring(0, 8));
				}

			}
		});

	},

	onChangeModalityType: function(btn) {
		var me = this;
		btn.toggle(true);
		if (btn.cls.indexOf('all') > -1) {
			global.current.modality = 'all';
		} else if (btn.cls.indexOf('xa') > -1) {
			global.current.modality = 'xa';
		} else if (btn.cls.indexOf('ct') > -1) {
			global.current.modality = 'ct';
		} else {
			console.log('invalid modality type button');
		}

		me.changeGridColumns();
	},

	changeGridColumns: function() {
		var me = this;
		var grid = me.getGridPatientList();
		grid.updateColumns();

	},


});