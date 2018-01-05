Ext.define('PDM.store.XaProcTime', {
    extend: 'Ext.data.Store',
    model: 'PDM.model.XaProcTime',
    proxy: {
        type: 'ajax',
        url: 'getxaproctime.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});