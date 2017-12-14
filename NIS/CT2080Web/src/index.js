import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index.js';
import config from './config/index.js';
import i18n from './i18n/index.js';
import notifier from './notifier/index.js';
import App from './component/app.jsx';
import Immutable,{fromJS, is} from 'immutable';



config.init().then(() => {

    let languageId = config.get("NIS_Language");
    return i18n.init(languageId);

}).then(() => {

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app-container')
    );

    notifier.register(store.dispatch, store.getState);
    notifier.init();

}).catch((err) => {
    console.error('init application failed');
    throw new Error(err);
});


let $$data1 = fromJS({a:{x:1,y:1}});
let $$data2 = fromJS({a:{x:1, y:1}});
let $$data3 = fromJS([1,3,4, {a:{b:{c:5}}}]);
Immutable.Map.isMap($$data1);
window.Immutable = Immutable;
window.data3 = $$data3;

debugger;

// console.log('data.is' + $$data1.is($$data2));
console.log('Immutable.is ' + is($$data1, $$data2));