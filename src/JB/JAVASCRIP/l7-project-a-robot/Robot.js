const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place !== this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place !== p.address);
      return new VillageState(destination, parcels);
    }
  }
  static random(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place === address);
      parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
  }
}

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

// exercise 1
// let first = new VillageState("Post Office", [
//   { place: "Post Office", address: "Alice's House" },
// ]);
// let next = first.move("Alice's House");
// console.log(next.place); // → Alice's House
// console.log(next.parcels); // → []
// console.log(first.place); // → Post Office

// exercise 2
// let object = Object.freeze({ value: 5 });
// object.value = 10;
// console.log(object.value); // → 5

// exercise 3 and 4
// function runRobot(state, robot, memory) {
//   for (let turn = 0; ; turn++) {
//     if (state.parcels.length === 0) {
//       console.log(`Done in ${turn} turns`);
//       break;
//     }
//     let action = robot(state, memory);
//     state = state.move(action.direction);
//     memory = action.memory;
//     console.log(`Moved to ${action.direction}`);
//   }
// }
// console.log("Try the fixed path robot:");
// runRobot(VillageState.random(), routeRobot, []);

// console.log("Try the goal-oriented robot:");
// runRobot(VillageState.random(), goalOrientedRobot, []);

// Measuring a robot
function runRobot(state, robot, memory) {
  let steps = 0;
  while (state.parcels.length > 0) {
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    steps++;
  }
  return steps;
}
function compareRobots(robot1, memory1, robot2, memory2) {
  const tasks = 100;
  let totalStepsRobot1 = 0;
  let totalStepsRobot2 = 0;
  for (let i = 0; i < tasks; i++) {
    let state = VillageState.random();
    totalStepsRobot1 += runRobot(state, robot1, memory1);
    totalStepsRobot2 += runRobot(state, robot2, memory2);
  }
  console.log(
    `Robot 1 (${robot1.name}): Average steps per task: ${
      totalStepsRobot1 / tasks
    }`,
  );
  console.log(
    `Robot 2 (${robot2.name}): Average steps per task: ${
      totalStepsRobot2 / tasks
    }`,
  );
}
compareRobots(routeRobot, [], goalOrientedRobot, []); //Please comment on this part so that I can properly execute the Robot efficiency.

// Robot efficiency
// function efficientRobot({ place, parcels }, route) {
//   if (route.length == 0) {
//     let routes = parcels.map((parcel) => {
//       if (parcel.place !== place) {
//         return {
//           route: findRoute(roadGraph, place, parcel.place),
//           pickUp: true,
//         };
//       } else {
//         return {
//           route: findRoute(roadGraph, place, parcel.address),
//           pickUp: false,
//         };
//       }
//     });
//     routes.sort((a, b) => {
//       if (a.route.length !== b.route.length) {
//         return a.route.length - b.route.length;
//       }
//       return a.pickUp ? -1 : 1;
//     });

//     route = routes[0].route;
//   }
//   return { direction: route[0], memory: route.slice(1) };
// }
// console.log("Comparing robots:");
// compareRobots(goalOrientedRobot, [], efficientRobot, []);
// runRobot(VillageState.random(), efficientRobot, []);
