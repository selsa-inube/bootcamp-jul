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
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

function runRobot(state, robot, memory) {
  console.log(state.parcels);
  console.log(`start of ${robot.name} robot.`);
  // console.log(map[state.place]);
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      console.log(`end of ${robot.name} robot.`);
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
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
};

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
  if (memory === undefined || memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

// runRobotAnimation(VillageState.random(), routeRobot, []);

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

function goalOrientedRobot({ place, parcels }, route) {
  console.log(route);
  console.log({ place, parcels });
  if (route === undefined || route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}
function compareRobots(robot1, memory1, robot2, memory2) {
  let totalTurnsRobot1 = 0;
  let totalTurnsRobot2 = 0;
  const NUM_SIMULATIONS = 100;
  for (let i = 0; i < NUM_SIMULATIONS; i++) {
    let state = VillageState.random();
    totalTurnsRobot1 += runRobot(state, robot1, memory1);
    console.log(totalTurnsRobot1);
    totalTurnsRobot2 += runRobot(state, robot2, memory2);
  }
  console.log(
    `Robot 1 () promedio: ${totalTurnsRobot1 / NUM_SIMULATIONS} turnos`,
  );
  console.log(
    `Robot 2 () promedio: ${totalTurnsRobot2 / NUM_SIMULATIONS} turnos`,
  );
}
function findPackageAtConnections(state = "Post Office", map = roadGraph, key) {
  const connections = map[state];
  return connections.includes(key.place);
}

function myRobot({ place, parcels }, route, map = roadGraph) {
  for (const key of parcels) {
    let packageAtConnection = findPackageAtConnections(place, map, key);
    if (packageAtConnection) {
      return { direction: key.place };
    }
  }

  if (route === undefined || route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

compareRobots(myRobot, [], goalOrientedRobot, []);
//console.log(roadGraph);

//runRobot(VillageState.random(), goalOrientedRobot, []);
//runRobot(VillageState.random(), myRobot, []);
