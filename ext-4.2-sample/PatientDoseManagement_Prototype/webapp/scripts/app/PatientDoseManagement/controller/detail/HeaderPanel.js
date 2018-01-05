Ext.define('PDM.controller.detail.HeaderPanel', {
	extend: 'Ext.app.Controller',
	views: [
		'PDM.view.detail.HeaderPanel',
		'PDM.view.detail.WestPanel',
		'PDM.view.detail.CenterPanel',
		'PDM.view.detail.ChartLayout',
	], 
	refs: [
		{
			ref: 'DetailHeaderPanel',
			selector: 'detailheaderpanel',
		}, {
			ref: 'DetailChartLayout',
			selector: 'detailchartlayout',
		}
	],



	init: function(){
		var me = this;
		me.control({
			'detailheaderpanel button[toggleGroup=trendType]': {
				click: me.onChangeTrendType
			},
			'detailheaderpanel button[toggleGroup=analysisCondition]': {
				click: me.onChangeAnalysisConditon
			},

		});

	},


	onChangeTrendType: function(btn) {
		var me = this;
		var chartlayout = me.getDetailChartLayout();
		chartlayout.getLayout().setActiveItem(1);
		var thumbnailHalf01 = $('#'+ global.constant.chart.thumbnailId.half01)[0];
		var thumbnailHalf02 = $('#'+ global.constant.chart.thumbnailId.half02)[0];
		thumbnailHalf01.height = thumbnailHalf01.parentElement.clientHeight;
		thumbnailHalf01.width = thumbnailHalf01.parentElement.clientWidth;
		thumbnailHalf02.height = thumbnailHalf02.parentElement.clientHeight;
		thumbnailHalf02.width = thumbnailHalf02.parentElement.clientWidth;
		if (btn.cls == 'trend-chart01') {
			thumbnailHalf01.src = global.current.thumbnailJPEG.half01;
		} else if (btn.cls === 'trend-chart02') {
			thumbnailHalf01.src = global.current.thumbnailJPEG.half02;
		} else if (btn.cls === 'trend-chart03') {
			thumbnailHalf01.src = global.current.thumbnailJPEG.half03;
		}
		thumbnailHalf02.src = global.current.thumbnailJPEG.half04;
	},


	onChangeAnalysisConditon: function(btn) {
		var me = this;
		var chartlayout = me.getDetailChartLayout();
		if (btn.cls == 'thisPatient') {
			chartlayout.getLayout().setActiveItem(0);
		}
	},



});