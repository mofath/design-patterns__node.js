class Iterator {
  constructor(items = []) {
    this._index = 0;
    this._items = items;
  }

  first() {
    const [first] = this._items;
    return first;
  }

  last() {
    const [last] = [...this._items].reverse();
    return last;
  }

  hasNext() {
    return this._index < this._items.length - 1;
  }

  current() {
    return this._items[this._index];
  }

  next() {
    if (this.hasNext()) {
      this._index += 1;
    }
    return this.current();
  }

  prev() {
    if (this._index !== 0) {
      this._index -= 1;
    }
    return this.current();
  }
}

module.exports = Iterator;
