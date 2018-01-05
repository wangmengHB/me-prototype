/*!
 * JS Click Panel 
 * Copyright :Copyright(c) 2013 TOSHIBA MEDICAL SYSTEMS CORPORATION All Rights
 * 
 * Company:TOSHIBA MEDICAL SYSTEMS CORPORATION
 */
/**
 * @class DM.util.DelayedTask
 * @extends Ext.app.Controller
 */



 
Ext.define('PDM.util.DelayedTask', {
    extend      : 'Ext.app.Controller',    
    
    singleton   : true,
    
    fn          : null,
    
    delay : function(times, fn)
    {
        var me = this;
        if(fn != null)
        {
            me.fn = fn;
        }
        var task = new Ext.util.DelayedTask(me.fn);
        task.delay(times);
    }
});