Ext.define('PDM.view.window.Chart04Frame', {
	extend: 'Ext.window.Window',
	alias: 'widget.windowchart04frame',
	width: '80%',
	height: '70%',

	modal: true,
    shadow: false,  
    frame: false,
    padding: 0,
    bodyPadding: 0,
    draggable: false,
    resizable: false, 
    bodyBorder: false,
    border: false,
    closable: false,
    header: false,
    plain: true,
    closeAction: 'destroy',

    id: 'window_chart04frame',

    layout: {
    	type: 'vbox',
    	align: 'stretch',
    },

    initConfig: {
        modality: '',
        title: '',
        bodyContent: '',
    },

    initComponent: function(){
    	var me = this;
    	me.callParent(arguments);
        if (!me.checkInitConfig()) {
            console.log('initconfig of SingleFrame is invalid');
            return;
        }
        var header = Ext.widget('panel', {
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'label',
                    text: 'Chart 04 Trend analysis',
                    flex: 1,
                }
            ],

        });

        var footer = Ext.widget('panel', {
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'end',
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Close',
                    width: '10%',
                    margin: '0 10 0 0',
                    listeners:{
                        'click': function() {
                            me.hide();                
                        }
                    } 
                },
            ],

        });
        me.add([header, me.createBody(), footer]);
    	me.focus();
    },


    checkInitConfig: function() {
        var me = this;

        return true;
    },


    createBody: function() {
        var me = this;
        var body = Ext.widget('panel', {
            flex: 7,
            layout: 'fit',
            minWidth: 700,
            minHeight: 400,
            html: '<div id="' + global.constant.chart.id.chart04 +'"></div>',
        });

        
        return body;
    },

    drawChart: function() {
        var me = this;
        var store = me.store;
        var axisXArray = [], axisYArray = [];
        for (var i = 0; i < store.data.items.length; i++) {
            axisXArray.push(store.data.items[i].data["axisX"]);
            axisYArray.push(store.data.items[i].data["axisY1"]);
        }
        
        $('#' + global.constant.chart.id.chart04).highcharts({
            chart: {
                type: 'column',
                animation: false
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'chart 04 Analysis'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: false,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                series: {
                    animation: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

            }]
        });


    },

    exportChartThumbnail: function() {
        var me = this;
        var svgHtml = $('#' + global.constant.chart.id.chart04 +' .highcharts-container')[0].innerHTML;
        var svgHtml_trimmed = svgHtml.substring(svgHtml.indexOf('<svg '),svgHtml.indexOf('</svg>')+6);
        var canvas = document.createElement('canvas');
        canvg(canvas, svgHtml_trimmed.trim());
        var image = {};
        image.width = canvas.width;
        image.height = canvas.height;
        image.data = canvas.toDataURL("image/jpeg");
        global.current.thumbnailJPEG.quarter04 = image.data;
        global.current.thumbnailJPEG.half04 = image.data;
    },

	
});