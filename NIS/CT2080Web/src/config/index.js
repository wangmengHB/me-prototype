


const url = "resources/config.json";

let diction = null;

const config = {
    init: () => new Promise((resolve, reject) => {
        fetch(url)
            .then( response => response.json())
            .then( json => {
                diction = json;
                resolve();
            }) 
    }),
    get: (name) => {
        if (!diction) {
            throw new Error('config is not initialized!!');
        }
        return JSON.parse(JSON.stringify(diction[name]));
    },
    getAddressBarUrl: () => {
        if (process.env.NODE_ENV !== 'production') {
            return `http://${window.location.host}/`;
        } else {
            return `http://10.0.254.103:89/`
        }
        
    }
};


export default config;