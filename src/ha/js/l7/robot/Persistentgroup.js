class PGroup {
  constructor(values) {
    this.values = values; // Internal representation of the group
  }

  // Check if the group contains a value
  has(value) {
    return this.values.includes(value);
  }

  // Return a new PGroup with the value added
  add(value) {
    if (this.has(value)) return this; // Return the same instance if the value is already present
    return new PGroup(this.values.concat(value));
  }

  // Return a new PGroup with the value removed
  delete(value) {
    if (!this.has(value)) return this; // Return the same instance if the value is not present
    return new PGroup(this.values.filter((v) => v !== value));
  }

  // Static empty property to represent an empty group
  static get empty() {
    // Ensure the empty PGroup is a single shared instance
    if (!PGroup._empty) {
      PGroup._empty = new PGroup([]);
    }
    return PGroup._empty;
  }
}

// Example usage:
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b")); // → true
console.log(a.has("b")); // → false
console.log(b.has("a")); // → false
