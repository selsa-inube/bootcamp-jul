class PGroup {
  constructor(values) {
    this.values = values;
  }

  add(value) {
    return new PGroup(new Set(this.values).add(value));
  }

  delete(value) {
    let newValues = new Set(this.values);
    newValues.delete(value);
    return new PGroup(newValues);
  }

  has(value) {
    return this.values.has(value);
  }

  static get empty() {
    return new PGroup(new Set());
  }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));
