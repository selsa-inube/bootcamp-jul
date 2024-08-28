const SCRIPTS = [
  {
    name: "Latin",
    ranges: [
      [65, 91],
      [97, 123],
    ],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_alphabet",
  },
  {
    name: "Arabic",
    ranges: [
      [1536, 1541],
      [1542, 1548],
      [1549, 1563],
      [1564, 1565],
      [1566, 1567],
      [1568, 1595],
      [1600, 1611],
      [1622, 1645],
      [1646, 1748],
      [1749, 1757],
      [1758, 1791],
      [1792, 1872],
      [1873, 1920],
    ],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script",
  },
];

function dominantDirection(text) {
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => code >= from && code < to)) {
        return script;
      }
    }
    return null;
  }

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex((current) => current.name == name);
      if (known == -1) {
        counts.push({ name, count: 1 });
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  function characterDirection(char) {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }

  let counted = countBy(text, (char) => {
    let direction = characterDirection(char);
    return direction;
  }).filter(({ name }) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
