class Singleton {
  constructor(name = "") {
    if (!Singleton.instance) {
      this.name = name;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  getName() {
    return this.name;
  }
}

module.exports = Singleton;
