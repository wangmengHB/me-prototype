Ext.define('PDM.view.detail.PatientInfoPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.detailpatientinfopanel',
	cls: 'detail-patientinfopanel',
	border: 1,
	paddingBorder: 0,
	layout: 'anchor',

	modality: '',
	
	initComponent:function(){
		var me = this;
		me.callParent(arguments);
        if (me.modality !== "ct" && me.modality !== "xa") {
            console.log('patient info panel modality is invalid');
            return;
        }

        var titlePanel = Ext.widget('panel', {
			anchor: '100% 15%',
			layout: {
				type: 'hbox',
				align: 'stretch',
			},
			items: [
				{
					xtype: 'label',
					text: 'Patient Information',
					flex: 7,
				}, {
					xtype: 'button',
					text: 'open',
					cls: 'detail-centerpanel-openbtn',
					flex: 1,
				}
			],        	
        });

        var tablePanel = Ext.widget('panel', {
        	html: 'table shows here.',
        	anchor: '100% 85%',
        	border: 0,
        });

        me.add([titlePanel, tablePanel]);
	},


});