Ext.define('PDM.controller.detail.ChartLayout', {
	extend: 'Ext.app.Controller',
	views: [
		'PDM.view.detail.HeaderPanel',
		'PDM.view.detail.ChartLayout',
		'PDM.view.window.Chart01Frame',
		'PDM.view.window.Chart02Frame',
		'PDM.view.window.Chart03Frame',
		'PDM.view.window.Chart04Frame',
	], 
	refs: [
		{
			ref: 'DetailChartLayout',
			selector: 'detailchartlayout',
		}, {
			ref: 'DetailHeaderPanel',
			selector: 'detailheaderpanel',
		},
	],

	init: function(){
		var me = this;
		me.control({
			'detailchartlayout panel[id=quarterchart01] button[cls=detail-centerpanel-openbtn]': {
				click: me.onOpenQuartChart01,
				afterrender: me.onQuarterChart01Render,
			},
			'detailchartlayout panel[id=quarterchart02] button[cls=detail-centerpanel-openbtn]': {
				click: me.onOpenQuartChart02,
				afterrender: me.onQuarterChart02Render,
			},
			'detailchartlayout panel[id=quarterchart03] button[cls=detail-centerpanel-openbtn]': {
				click: me.onOpenQuartChart03,
				afterrender: me.onQuarterChart03Render,
			},
			'detailchartlayout panel[id=quarterchart04] button[cls=detail-centerpanel-openbtn]': {
				click: me.onOpenQuartChart04,
				afterrender: me.onQuarterChart04Render,
			},
			'detailchartlayout panel[id=halfchart01] button[cls=detail-centerpanel-openbtn]': {
				click: me.showHalf01Frame
			},
			'detailchartlayout panel[id=halfchart02] button[cls=detail-centerpanel-openbtn]': {
				click: me.showHalf02Frame
			},
		});

	},

	onQuarterChart01Render: function() {
		var me = this;
		var store = global.current.chartStore.store01 = new PDM.store.XaAk;
		me.createChartFrame('window_chart01frame', 'windowchart01frame', store, 1);

	},

	onOpenQuartChart01: function() {
		var me = this;
		me.showChartFrame('window_chart01frame');
	},

	onQuarterChart02Render: function() {
		var me = this;
		var store = global.current.chartStore.store02 = new PDM.store.XaAk;
		me.createChartFrame('window_chart02frame', 'windowchart02frame', store, 2);

	},

	onOpenQuartChart02: function() {
		var me = this;
		me.showChartFrame('window_chart02frame');
	},

	onQuarterChart03Render: function() {
		var me = this;
		var store = global.current.chartStore.store03 = new PDM.store.XaAk;
		me.createChartFrame('window_chart03frame', 'windowchart03frame', store, 3);

	},

	onOpenQuartChart03: function() {
		var me = this;
		me.showChartFrame('window_chart03frame');
	},

	onQuarterChart04Render: function() {
		var me = this;
		var store = global.current.chartStore.store04 = new PDM.store.XaAk;
		me.createChartFrame('window_chart04frame', 'windowchart04frame', store, 4);

	},

	onOpenQuartChart04: function() {
		var me = this;
		me.showChartFrame('window_chart04frame');
	},

	createChartFrame: function(chartFrameId, chartFrameXtype, store, chartIndex) {
		var me = this;
		var chartlayout = me.getDetailChartLayout();
		var chartframe = Ext.getCmp(chartFrameId);
		if (!chartframe) {
			chartframe = Ext.widget(chartFrameXtype, {
				store: store,
			}).show().hide();
		} else {
			console.log('error, last chart frame is not destroyed.');
		}

		store.on('load', function(){
			chartframe.drawChart();
			chartframe.exportChartThumbnail();
			chartlayout.showThumbnail(chartIndex);
		});

		store.load({
			params: {
				xxx:'xxx'
			}
		});
	},

	showChartFrame: function(chartFrameId) {
		var me = this;
		var chartframe = Ext.getCmp(chartFrameId);
		if (!chartframe) {
			console.log('chart frame not exist.');
		}
		chartframe.show();
		chartframe.drawChart();
	},

	showHalf01Frame: function() {
		var me = this;
		var btnCls = '';
		var detailheaderpanel = me.getDetailHeaderPanel();
		var btns = detailheaderpanel.query('button[toggleGroup=trendType]');
		Ext.Array.each(btns, function(btn) {
			if (btn.pressed) {
				btnCls = btn.cls;
			}
		});
		if (btnCls.indexOf('chart01') > -1) {
			me.showChartFrame('window_chart01frame');
		} else if (btnCls.indexOf('chart02') > -1) {
			me.showChartFrame('window_chart02frame');
		} else if (btnCls.indexOf('chart03') > -1) {
			me.showChartFrame('window_chart03frame');
		} else {
			console.log('error occurs, trendy type button is not pressed');
		}

	},

	showHalf02Frame: function() {
		var me = this;
		me.showChartFrame('window_chart04frame');
	}


});