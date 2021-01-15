var { writeFile, existsSync, readFileSync, unlink } = require("fs");

class LocalStorage {
  constructor() {
    if (existsSync("localStorage.json")) {
      console.log("Loading items from localStorage.json");
      var txt = readFileSync("localStorage.json");
      this._items = JSON.parse(txt);
    } else {
      this._items = {};
    }
  }

  get length() {
    return Object.keys(this._items).length;
  }

  getItem(key) {
    return this._items[key];
  }

  setItem(key, value) {
    this._items[key] = value;
    writeFile("localStorage.json", JSON.stringify(this._items), (error) => {
      if (error) {
        console.error(error);
      }
    });
  }

  clear() {
    this._items = {};
    unlink("localStorage.json", () => {
      console.log("localStorage file removed");
    });
  }
}

module.exports = new LocalStorage();
