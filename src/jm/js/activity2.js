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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
