
Ext.define('PDM.global.constant', {});

var global = global || {};
global.constant = global.constant || {};

(function(){


	global.constant.controllers = [
		'PDM.controller.home.HeaderPanel',
		'PDM.controller.home.BodyPanel',
		'PDM.controller.grid.PatientList',
		'PDM.controller.grid.HistoryList',
		
		'PDM.controller.detail.Window',
		'PDM.controller.detail.HeaderPanel',
		'PDM.controller.detail.WestPanel',
		'PDM.controller.detail.CenterPanel',
		'PDM.controller.detail.ChartLayout',

		
	];

	global.constant.chart = {
		thumbnailId: {
			quarter01: 'AnalysisTrendThumbnailQuarter01',
			quarter02: 'AnalysisTrendThumbnailQuarter02',
			quarter03: 'AnalysisTrendThumbnailQuarter03',
			quarter04: 'AnalysisTrendThumbnailQuarter04',
			half01: 'AnalysisTrendThumbnailHalf01',
			half02: 'AnalysisTrendThumbnailHalf02',
		},
		id: {
			chart01:'AnalysisTrendChart01',
			chart02:'AnalysisTrendChart02',
			chart03:'AnalysisTrendChart03',
			chart04:'AnalysisTrendChart04',
		},
	};


	
	global.constant.constWithContrast = 'Diagnostic radiography with contrast media';
	global.constant.constWithoutContrast = 'CT without contrast';
	global.constant.chartColorArray = [
		'#2f7ed8',
		'#D54679',
		'#8bbc21',
		'#910000',
		'#1aadce',
		'#492970',
		'#f28f43',
		'#77a1e5',
		'#c42525',
		'#4F94CD',
		'#4572A7',
		'#AA4643',
		'#89A54E',
		'#80699B',
		'#3D96AE',
		'#DB843D',
		'#92A8CD',
		'#A47D7C',
		'#B5CA92',
		'#7cb5ec',
		'#434348',
		'#90ed7d',
		'#f7a35c',
		'#8085e9',
		'#f15c80',
		'#e4d354',
		'#8085e8',
		'#8d4653',
		'#91e8e1',
		'#0d233a'
	];

	global.constant.chartScatterColorArray = [
	    '#2f7ed8',
	    '#0d233a',
	    '#8bbc21',
	    '#910000',
	    '#1aadce',
	    '#492970',
	    '#f28f43',
	    '#77a1e5',
	    '#c42525',
	    '#4F94CD',
	    '#4572A7',
	    '#AA4643',
	    '#89A54E',
	    '#80699B',
	    '#3D96AE',
	    '#DB843D',
	    '#92A8CD',
	    '#A47D7C',
	    '#B5CA92',
	    '#7cb5ec',
	    '#434348',
	    '#90ed7d',
	    '#f7a35c',
	    '#8085e9',
	    '#f15c80',
	    '#e4d354',
	    '#8085e8',
	    '#8d4653',
	    '#91e8e1',
	    '#D54679'
	];


}());


