export default class Navi {
    constructor(id, url, title, subItems = [], icon = '', activeIcon = '', klass = '') {
        // required
        this.id = id;
        this.url = url;
        this.title = title;
        // optional
        this.icon = icon;
        this.activeIcon = activeIcon;
        this.klass = klass;
        this.subItems = [];

        subItems.forEach((item) => {
            if (item instanceof Navi) {
                this.subItems.push(item);
            }
        });
    }

    clone() {
        let obj = new Navi();
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                if (this[key] instanceof Array) {
                    this[key].forEach((item) => {
                        let sub = item.clone();
                        obj[key].push(sub);
                    })
                } else {
                    obj[key] = this[key]
                }
            }
        }
        return obj;
    }


}