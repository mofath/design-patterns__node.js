class Customer {

    constructor(name) {
        this._name = name;
    }

    notify(storeName, discount) {
        console.log(`${this._name}, there is a sale at ${storeName}! ${discount}% off everything!`);
    }
}

module.exports = Customer;
