
let diction = new Map();
let initialized = false;




const i18n = {
    init: languageId => new Promise((resolve, reject) => {
        let url = `resources/Language/UiResources${languageId}.xml`;
        fetch(url)
            .then( response => response.text())
            .then( text => {
                diction.clear();
                let parser = new DOMParser();
                let xml = parser.parseFromString(text, 'text/xml');
                let root = xml.documentElement;
                let count = root.childElementCount;
                for (let i = 0; i < count; i++) {
                    let node = root.children[i];
                    let key = node.getAttribute('key');
                    let value = node.getAttribute('value');
                    diction.set(key, value);
                }
                initialized = true;
                resolve();
            });
    }),
    get: (key) => {
        if (!initialized) {
            throw new Error('i18n is not initialized!');
        }
        return diction.get(key);
    }
}





export default i18n;