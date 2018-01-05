Ext.define('PDM.view.grid.PatientList', {
    extend: 'Ext.grid.Panel', 
	alias: 'widget.gridpatientlist',
    cls: 'grid-patientlist',
	store: 'PDM.store.PatientList',
    padding: '10 10 0 10',
    enableColumnResize: false,
    enableColumnMove: false,
    cls: 'patientlist',
    columns: [
        {text: 'Patient ID',  dataIndex: 'patientId', flex:2 },
        {text: 'Patient Name', dataIndex: 'patientName', flex: 2},
        {text: 'Gender', dataIndex: 'gender', flex: 1 },
		{text: 'Age', dataIndex: 'age', flex:1},
		{text: 'Birth Date', dataIndex: 'birthDate', flex:2},
		{text: 'BMI' + '<br/>' + '(Kg/m' + '<sup>2</sup>' +')', dataIndex: 'bmi', flex:2} ,
		{text: '# of XA Studies', dataIndex: 'XAStudy', flex: 2},
		{text: 'PSD <br/> (mGy)', dataIndex: 'PSD', flex: 2},
		{text: '# of CT Studies', dataIndex: 'CTStudy', flex: 2},
		{text: 'Total CTDlvol <br/> (mGy)', dataIndex: 'totalCTDlvol', flex: 2}
    ],

    initComponent:function(){
    	var me = this;
    	me.callParent(arguments);
    },

    updateColumns: function() {
        var me = this;
        if (global.current.modality === 'ct') {
            me.columns[6].setVisible(false);
            me.columns[7].setVisible(false);
            me.columns[8].setVisible(true);
            me.columns[9].setVisible(true);           
        } else if (global.current.modality === 'xa') {
            me.columns[8].setVisible(false);
            me.columns[9].setVisible(false);
            me.columns[6].setVisible(true);
            me.columns[7].setVisible(true);
        } else if (global.current.modality === 'all') {
            me.columns[6].setVisible(true);
            me.columns[7].setVisible(true);
            me.columns[8].setVisible(true);
            me.columns[9].setVisible(true);
        }
    },

});