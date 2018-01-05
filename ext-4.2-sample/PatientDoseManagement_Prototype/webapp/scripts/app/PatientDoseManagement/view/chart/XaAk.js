Ext.define('PDM.view.chart.XaAk', {
	extend: 'Ext.chart.Chart',
	alias: 'chartxaak',
	cls: 'chart-xaak',

	store: 'PDM.store.XaAk',

	axes: [{
		type: 'Numeric',
		position: 'left',
		fields: ['axisY1', 'axisY2'],
		title: 'AK',
	}, {
		type: 'Category',
		position: 'bottom',
		fields: ['axisX'],
		title: 'Past 1 Year from selected study date'
	}],

	legend: {
		position: 'bottom',
	},

	series: [{
		type: 'column',
		axis: 'left',
		xField: 'axisX',
		yField: ['axisY1', 'axisY2'],
		title: ['AK', 'contrast'],
		// label: {
		// 	field: ['axisY1', 'axisY2'],
		// 	display: 'outside',
		// 	renderer: function(v) {
		// 		return v + ' (mGy)';
		// 	},
		// },
	}],


	initComponent: function(){
		var me = this;
		me.callParent(arguments);

	},


});