Ext.define('PDM.view.grid.HistoryList', {
	alias: 'widget.gridhistorylist',
	extend: 'Ext.grid.Panel', 
	store: 'PDM.store.HistoryList',
    enableColumnResize: false,
    enableColumnMove: false,
    closeAction: 'destroy',
    padding: '10 10 0 10',
    columns: [
        {text: 'Exam Date',  dataIndex: 'examDate', flex:2 },
        {text: 'Operator', dataIndex: 'operator', flex: 2},
        {text: 'Room', dataIndex: 'room', flex: 1 },
        {text: ' Study <br/> Description', dataIndex: 'studyDescription', flex:1},
        {text: 'Protocol <br/> Name', dataIndex: 'protocolName', flex:2},
        {text: ' CTDlvol <br/> (mGy)', dataIndex: 'ctdlvol', flex:2} ,
        {text: ' SSDE <br/> (mGy)', dataIndex: 'ssde', flex: 2},
        {text: ' DLP <br/> (mGy .m<sup>2</sup>)', dataIndex: 'dlp', flex: 2},
        {text: 'Procedure Time', dataIndex: 'procedureTime', flex: 2},
        {text: ' AK <br/> (mGy)', dataIndex: 'ak', flex:2} ,
        {text: ' PSD <br/> (mGy)', dataIndex: 'psd', flex: 2},
        {text: ' DAP <br/> (cGy cm <sup>2</sup>)', dataIndex: 'dap', flex: 2},
        {text: 'Fluoro Time', dataIndex: 'fluoroTime', flex: 2}
    ],



    initComponent: function() {
    	var me = this;
    	me.callParent(arguments);
    },

    updateColumns: function() {
        var me = this;
        if (global.current.modality === 'ct') {
            me.columns[9].setVisible(false);
            me.columns[10].setVisible(false);
            me.columns[11].setVisible(false);
            me.columns[12].setVisible(false);
            me.columns[5].setVisible(true);
            me.columns[6].setVisible(true);
            me.columns[7].setVisible(true);
            me.columns[8].setVisible(true);    
        } else if (global.current.modality === 'xa') {
            me.columns[5].setVisible(false);
            me.columns[6].setVisible(false);
            me.columns[7].setVisible(false);
            me.columns[8].setVisible(false);
            me.columns[9].setVisible(true);
            me.columns[10].setVisible(true);
            me.columns[11].setVisible(true);
            me.columns[12].setVisible(true);
        } else {
            console.log('error occurs, historylist does not support Modality type: all.');
        }
    },
});