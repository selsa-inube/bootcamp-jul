function generateTask() {
  return Math.random();
}

function solveTask(robot, memory, task) {
  let steps = Math.floor(Math.random() * 100);
  return steps;
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let totalStepsRobot1 = 0;
  let totalStepsRobot2 = 0;
  const numTasks = 100;

  for (let i = 0; i < numTasks; i++) {
    let task = generateTask();
    totalStepsRobot1 += solveTask(robot1, memory1, task);
    totalStepsRobot2 += solveTask(robot2, memory2, task);
  }

  let averageStepsRobot1 = totalStepsRobot1 / numTasks;
  let averageStepsRobot2 = totalStepsRobot2 / numTasks;

  console.log(`Promedio de pasos para Robot 1: ${averageStepsRobot1}`);
  console.log(`Promedio de pasos para Robot 2: ${averageStepsRobot2}`);
}

const routeRobot = "routeRobotInstance";
const goalOrientedRobot = "goalOrientedRobotInstance";

compareRobots(routeRobot, [], goalOrientedRobot, []);
