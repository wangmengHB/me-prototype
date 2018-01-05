Ext.define('PDM.store.PatientList', {
    extend: 'Ext.data.Store',
    model: 'PDM.model.PatientList',
    proxy: {
        type: 'ajax',
        url: 'getpatientlist.action',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});