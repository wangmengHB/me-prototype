Ext.define('PDM.view.detail.CenterPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.detailcenterpanel',
	cls: 'detail-centerpanel',
	border: 0,
	paddingBorder: 0,
	layout: 'anchor',

    modality: '', 

	initComponent:function(){
		var me = this;
		me.callParent(arguments);
        if (me.modality !== "ct" && me.modality !== "xa") {
            console.log('analysis detail center modality is invalid');
            return;
        }

        var topPanel = Ext.widget('panel', {
			anchor: '100% 33%',
			margin: '10 10 10 10',
			border: 0,
			layout: {
				type: 'hbox',
				align: 'stretch',
			},
			items: [
				{
					xtype: 'detailpatientinfopanel',
					flex: 16,
					modality: me.modality,
				}, {
					xtype: 'tbspacer',
					flex: 1,
				}, {
					xtype: 'detailirradiationpanel',
					flex: 33,
					modality: me.modality,
				}
			],
        });

        var centerPanel = Ext.widget('panel', {
			margin: '10 10 10 10',
			border: 0,
			anchor: '100% 67%',
			layout: {
				type: 'hbox',
				align: 'stretch',
			},
			items: [
				{
					xtype: 'detailchartlayout',
					flex: 33,
					border: 0,
					modality: me.modality,
				}, {
					xtype: 'tbspacer',
					flex: 1,
				}, {
					xtype: 'detailkeyfeaturepanel',
					flex: 16,
					modality: me.modality,
				}
			],
        });

		me.add([topPanel, centerPanel]);

	},


});

