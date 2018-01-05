Ext.define('PDM.store.PatientInfo', {
    extend: 'Ext.data.Store',
    model: 'PDM.model.PatientInfo',
    proxy: {
        type: 'ajax',
        url: 'getpatientinfo.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});