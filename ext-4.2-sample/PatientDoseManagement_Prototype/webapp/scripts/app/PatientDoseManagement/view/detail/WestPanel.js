Ext.define('PDM.view.detail.WestPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.detailwestpanel',
	cls: 'detail-westpanel',
	border: 0,
	paddingBorder: 0,
	layout: {
		type: 'vbox',
		align: 'center',
		pack: 'start',
	},
	
	modality: '',



	initComponent:function(){
		var me = this;
		me.callParent(arguments);
        if (me.modality !== "ct" && me.modality !== "xa") {
            console.log('analysis detail westpanel modality is invalid');
            return;
        }
        me.add([
        	me.createStudyDescriptionPanel(), {
				xtype: 'tbspacer',
				flex: 6,
        	}, {
				xtype: 'button',
				flex: 1,
				width: '80%',
				text: 'Show PSD Image',
				margin: '0 0 20 0',
        	}, {
				xtype: 'button',
				flex: 1,
				width: '80%',
				text: 'Show RDSR info',
        	}, {
				xtype: 'tbspacer',
				flex: 1
        	}
    	]);

	},


	createStudyDescriptionPanel:function(modality) {
		var studyDesPanel = Ext.widget('panel', {
			title: 'study description',
			flex: 10,
			margin: '10 0 0 0',
			width: '80%',
		});
		return studyDesPanel;
	},  


});