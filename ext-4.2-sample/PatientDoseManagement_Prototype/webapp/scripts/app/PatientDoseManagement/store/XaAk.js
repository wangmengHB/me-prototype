Ext.define('PDM.store.XaAk', {
    extend: 'Ext.data.Store',
    model: 'PDM.model.XaAk',
    proxy: {
        type: 'ajax',
        url: 'getxaak.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});