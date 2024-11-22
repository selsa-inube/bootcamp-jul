class PGroup {
  constructor(values) {
    this.values = values;
  }

  has(value) {
    return this.values.includes(value);
  }

  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.values.concat(value));
  }

  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.values.filter((v) => v !== value));
  }

  static get empty() {
    if (!PGroup._empty) {
      PGroup._empty = new PGroup([]);
    }
    return PGroup._empty;
  }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));
