Ext.define('PDM.view.window.SingleFrame', {
	extend: 'Ext.window.Window',
	alias: 'widget.windowsingleframe',
    cls: 'window-singleframe',
    
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
                    text: 'Patient Information',
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
                            me.close();    
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
        });

        
        return body;
    },

	
});