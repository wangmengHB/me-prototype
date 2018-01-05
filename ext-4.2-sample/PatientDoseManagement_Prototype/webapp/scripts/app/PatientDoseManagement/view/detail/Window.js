Ext.define('PDM.view.detail.Window', {
	extend: 'Ext.window.Window',
	alias: 'widget.detailwindow',
    cls: 'detail-window',

	width: '95%',
	height: '95%',

	modal: true,
    shadow: false,  
    frame: true,
    padding: 0,
    bodyPadding: 0,
    draggable: false,
    resizable: true, 
    bodyBorder: false,
    border: false,
    closable: false,
    header: false,
    plain: true,
    closeAction: 'destroy',
    
    layout: 'border',

    modality: '',  


	initComponent: function(){
		var me = this;
		me.callParent(arguments);
        if (me.modality !== "ct" && me.modality !== "xa") {
            console.log('analysis detail window modality is invalid');
            return;
        }
        var header = Ext.widget('detailheaderpanel', {
            region: 'north',
            modality: me.modality,
            height: '15%',
        });

        var center = Ext.widget('detailcenterpanel', {
            region: 'center',
            border: 0,
            height: '80%',
            width: '80%',
            modality: me.modality,
        });

        var west = Ext.widget('detailwestpanel', {
            region: 'west',
            border: 0,
            height: '80%',
            width: '20%',
            modality: me.modality,
        });

        var footer = Ext.widget('panel', {
            region: 'south',
            height: '5%',
            border: 0,
            layout: {
                type: 'hbox',
                pack: 'end',
                align: 'middle',
            },
            items: [
                 {
                    xtype: 'tbspacer',
                    flex: 11,
                },{
                    xtype: 'button',
                    cls: 'closeBtn',
                    text: 'Close',
                    flex: 1,
                    margin: '0 10 0 0',
                },
            ],

        });

        me.add([header, center, west, footer]);

        me.focus();
	},


});