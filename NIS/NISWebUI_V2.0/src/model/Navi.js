export default class Navi {
    constructor() {
        this.url = url;
        this.title = title;
        this.icon = icon;
        this.activeIcon = activeIcon;
        this.klass = klass;
        this.subItems = [];
    }

    addSub(navi) {
        this.subItems.push(navi);
    }

}