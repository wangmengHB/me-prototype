import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index.js';
import config from './config/index.js';
import i18n from './i18n/index.js';
import notifier from './notifier/index.js';
import App from './component/app.jsx';



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
