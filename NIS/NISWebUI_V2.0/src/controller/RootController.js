import { SHOW_BUSY} from '../constant/ActionTypes.js';

export default class AppController {
    constructor() {
        this._actionMap = new Map();
    }

    register(action, callback) {
        this._actionMap.set(action, callback);
    }

    unregister(action) {
        this._actionMap.delete(action);
    }

    unregisterAll() {
        this._actionMap.clear();
    }

    showBusy(show) {
        let callback = this._actionMap.get(SHOW_BUSY);
        if (typeof callback === 'function') {
            callback(show);
        }
    }

    init() {

    }

    
}

