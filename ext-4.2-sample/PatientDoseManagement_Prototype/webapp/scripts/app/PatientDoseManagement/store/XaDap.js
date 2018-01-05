Ext.define('PDM.store.XaDap', {
    extend: 'Ext.data.Store',
    model: 'PDM.model.XaDap',
    proxy: {
        type: 'ajax',
        url: 'getxadap.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});