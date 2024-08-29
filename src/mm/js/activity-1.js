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
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some((w) => w.at === place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length === 0) {
    let parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

const roadGraph = {
  "Alice's House": ["Bob's House", "Cabin", "Post Office"],
  "Bob's House": ["Alice's House", "Town Hall"],
  Cabin: ["Alice's House"],
  "Post Office": ["Alice's House", "Marketplace"],
  "Town Hall": ["Bob's House", "Daria's House", "Marketplace"],
  "Daria's House": ["Town Hall", "Ernie's House"],
  "Ernie's House": ["Daria's House", "Grete's House"],
  "Grete's House": ["Ernie's House", "Farm", "Shop"],
  Farm: ["Grete's House"],
  Shop: ["Grete's House", "Marketplace"],
  Marketplace: ["Post Office", "Town Hall", "Shop"],
};

function countSteps(state, robot, memory) {
  for (let steps = 0; ; steps++) {
    if (state.parcels.length === 0) {
      return steps;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let totalStepsRobot1 = 0;
  let totalStepsRobot2 = 0;

  for (let i = 0; i < 100; i++) {
    let task = VillageState.random();

    totalStepsRobot1 += countSteps(task, robot1, memory1.slice());
    totalStepsRobot2 += countSteps(task, robot2, memory2.slice());
  }

  console.log(`Robot 1 needed ${totalStepsRobot1 / 100} steps per task`);
  console.log(`Robot 2 needed ${totalStepsRobot2 / 100} steps per task`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
