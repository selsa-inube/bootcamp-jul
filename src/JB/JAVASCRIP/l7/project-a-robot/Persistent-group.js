class PGroup {
  constructor(inputArray) {
    this.members = inputArray;
  }
  add(value) {
    if (this.has(value)) return this;
    return new PGroup([...this.members, value]);
  }
  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.members.filter((x) => x !== value));
  }
  has(value) {
    return this.members.includes(value);
  }
}
PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));
