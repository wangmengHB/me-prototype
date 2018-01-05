Ext.define('PDM.store.Irradiation', {
    extend: 'Ext.data.Store',
    model: 'PDM.model.Irradiation',
    proxy: {
        type: 'ajax',
        url: 'getirradiation.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});