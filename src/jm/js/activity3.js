class Group {
  constructor() {
    this.items = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.items.push(value);
      return true;
    }
    return false;
  }

  delete(value) {
    const index = this.items.indexOf(value);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  has(value) {
    return this.items.indexOf(value) !== -1;
  }

  static from(iterable) {
    const group = new Group();
    for (const item of iterable) {
      group.add(item);
    }
    return group;
  }

  [Symbol.iterator]() {
    let index = 0;
    let items = this.items;

    return {
      next() {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
