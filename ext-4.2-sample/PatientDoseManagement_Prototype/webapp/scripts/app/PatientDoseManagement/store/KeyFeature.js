Ext.define('PDM.store.KeyFeature', {
    extend: 'Ext.data.Store',
    model: 'PDM.model.KeyFeature',
    proxy: {
        type: 'ajax',
        url: 'getkeyfeature.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});