class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(Vec2) {
    const xSum = this.x + Vec2.x;
    const ySum = this.y + Vec2.y;
    return new Vec(xSum, ySum);
  }
  minus(Vec2) {
    const xMinus = this.x - Vec2.x;
    const yMinus = this.y - Vec2.y;
    return new Vec(xMinus, yMinus);
  }
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  dot(Vec2) {
    const xMinus = this.x * Vec2.x;
    const yMinus = this.y * Vec2.y;
    return xMinus + yMinus;
  }
}
/*console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);*/
console.log(Math.sqrt(new Vec(3, 4).dot(new Vec(3, 4))));
class Group {
  constructor() {
    this.contained = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.contained.push(value);
    }
  }
  delete(value) {
    if (this.has(value)) {
      this.contained.shift(value);
    }
  }
  has(value) {
    return this.contained.includes(value);
  }
  static from(iterable) {
    const group = new Group();
    for (const value of iterable) {
      group.add(value);
    }
    return group;
  }
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.contained.length) {
          return { value: this.contained[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}
let group = Group.from([10, 20]);
//console.log(group);
//console.log(group.has(10));
console.log(group);
group.add(10);
console.log(group);
group.add(30);
console.log(group);
/*group.delete(10);

console.log(group.has(10));
console.log(group.has(30));
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
*/
