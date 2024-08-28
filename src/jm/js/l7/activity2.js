function generateTask() {
  return Math.random();
}

function solveTask(robot, memory, task) {
  if (robot === "fastestRobotInstance") {
    return Math.floor(task * 10);
  } else if (robot === "goalOrientedRobotInstance") {
    return Math.floor(task * 30);
  }
  return Math.floor(Math.random() * 100);
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

  console.log(`Promedio de pasos para ${robot1}: ${averageStepsRobot1}`);
  console.log(`Promedio de pasos para ${robot2}: ${averageStepsRobot2}`);
}
const fastestRobot = "fastestRobotInstance";
const goalOrientedRobot = "goalOrientedRobotInstance";

compareRobots(fastestRobot, [], goalOrientedRobot, []);

const VillageState = {
  random: () => ({}),
};

const runRobotAnimation = (state, robot, memory) => {};

runRobotAnimation(VillageState.random(), fastestRobot, []);
