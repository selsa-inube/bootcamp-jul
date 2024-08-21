function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    typeof a === "object" &&
    a !== null &&
    typeof b === "object" &&
    b !== null
  ) {
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    return (
      keysA.length === keysB.length &&
      keysA.every((key) => keysB.includes(key) && deepEqual(a[key], b[key]))
    );
  }

  return false;
}

console.log(deepEqual("5", "5"));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
