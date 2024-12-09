class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((member) => member !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(iterable) {
    const group = new this();
    for (let value of iterable) {
      group.add(value);
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
