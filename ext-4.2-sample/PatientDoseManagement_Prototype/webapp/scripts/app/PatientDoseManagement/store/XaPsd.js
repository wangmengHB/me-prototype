Ext.define('PDM.store.XaPsd', {
    extend: 'Ext.data.Store',
    model: 'PDM.model.XaPsd',
    proxy: {
        type: 'ajax',
        url: 'getxapsd.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});