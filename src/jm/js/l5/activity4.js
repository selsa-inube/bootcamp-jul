function characterScript(code) {
  const scripts = [
    {
      name: "Latin",
      direction: "ltr",
      ranges: [
        [65, 90],
        [97, 122],
      ],
    },
    { name: "Arabic", direction: "rtl", ranges: [[1536, 1791]] },
    { name: "Chinese", direction: "ttb", ranges: [[19968, 40959]] },
  ];

  for (let script of scripts) {
    for (let [from, to] of script.ranges) {
      if (code >= from && code <= to) return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let codes = Array.from(text).map((ch) => ch.codePointAt(0));

  let directionCounts = countBy(codes, (code) => {
    let script = characterScript(code);
    return script ? script.direction : "unknown";
  });

  let dominant = directionCounts.reduce(
    (max, dir) => (dir.count > max.count ? dir : max),
    { name: "unknown", count: 0 }
  );

  return dominant.name;
}
console.log(dominantDirection("¡Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
