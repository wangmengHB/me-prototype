Ext.define('PDM.store.HistoryList', {
	extend: 'Ext.data.Store',
	model: 'PDM.model.HistoryList',
    proxy: {
        type: 'ajax',
        url: 'gethistorylist.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});