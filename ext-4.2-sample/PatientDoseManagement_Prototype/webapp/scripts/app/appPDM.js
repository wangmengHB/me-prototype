
// this appPDM.js should be the only one js file included in the html
// and this is the entrance of the application


// step 1. set the namespace and script path for the application

 Ext.Loader.setConfig({
    enable: true,
    disableCaching: false,
    paths: {
        'PDM':'../scripts/app/PatientDoseManagement/'
    }
 });
         
// step 2. do some preparation before EXT-style application is built.
// It would be better to inlude js file through EXT mechanism, 
// but if you can not, you should follow this rule: 
// 1. other none-Ext style js files should be included through Ext.require Method, 
//    and be included only here.
// 2. global variable and function is strictly forbidden.
//    All global variable should be encapsulated in the only one object "global"
//    for example, global.setting.examlimitation = 1000000;
Ext.require('PDM.i18n.stringSettingByEN');
Ext.require('PDM.i18n.stringSettingByDE');
Ext.require('PDM.i18n.stringSettingByES');
Ext.require('PDM.i18n.stringSettingByFR');
Ext.require('PDM.i18n.stringSettingByIT');
Ext.require('PDM.i18n.stringSettingByJP');
Ext.require('PDM.i18n.stringSettingByNL');
Ext.require('PDM.i18n.stringSettingByPT');

Ext.require('PDM.global.storage');
Ext.require('PDM.global.constant');
Ext.require('PDM.global.setting');
Ext.require('PDM.global.current');

Ext.require('PDM.util.commonFun');

// if get setting fail, show a error message window
// and no need to build application.


Ext.onReady(function(){
// step 3. get setting from server, otherwise show blank and error dialog

    // set default i18n to be English, if failed to get setting from server
    // display error diaglog in English

    global.i18n.map = global.i18n.EN;

    getInitSettingFromServer();
    
    function getInitSettingFromServer() {
        var preUrlQueue = global.setting.prepareQueue;
        requestSeverInQueue(0);                            
        function requestSeverInQueue(index) {
            if (!preUrlQueue[index]) {
                 initApp();
                 return;
            }                           
            Ext.Ajax.request({
                 url: preUrlQueue[index][0],
                 params: preUrlQueue[index][1],
                 success: function(res){
                    if (preUrlQueue[index][2](res)){
                        requestSeverInQueue (index+1);
                    } else {
                        showErrorDialog({error:preUrlQueue[index][3]}); 
                    }        
                 },
                 failure: function(){
                    showErrorDialog({error:preUrlQueue[index][3]});
                 }                                        
            });                        
        }

        function showErrorDialog(errorCode){
            Ext.create('Ext.window.Window').show();
        }
    }
           
 
 // this is the application entrance!
    function initApp(){

        Ext.application({
             name: 'PDM',
             appFolder: '../scripts/app/PatientDoseManagement/', 
             controllers: global.constant.controllers,
             autoCreateViewport: true,
             launch: function() {
                console.log('application launch!');             
             }
        });
    }
      
});

