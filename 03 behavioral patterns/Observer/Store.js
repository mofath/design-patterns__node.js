class Store {

    constructor(name) {
        this._name = name;
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    sale(discount) {
        console.log('\x1b[33m%s\x1b[0m', `Anounce sale at ${this._name}, ${discount}% off`);  
        this.subscribers.forEach(observer => observer.notify(this._name, discount));
    }

}

module.exports = Store;
