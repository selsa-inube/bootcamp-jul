Module a Robot.

- roads
- buildGraph
- roadGraph
- VillageState
- runRobot
- randomPick
- randomRobot
- mailRoute
- routeRobot
- findRoute
- goalOrientedRobot

I'll create a module for the buildGraph that uses roads to create the roadGraph.
One more module will handle the VillageState, which includes the .move and .random methods and uses the roadGraph.
Another module will be for runRobot, which needs to import the VillageState and robot modules.
The next module will be randomPick, which contains the logic for this robot.
Then, a routeRobot module will include the mailRoute.
One more module will be findRoute, which will be exported for the goalOrientedRobot module.

Which pieces are likely to be available prewritten on NPM?

In NPM, we can probably find the logic for building graphs and the logic for robots to find the best route.

Would you prefer to use an NPM package or write them yourself?

It depends. NPM can be very helpful by importing dependencies to improve and evolve my code, but sometimes, when I'm writing something specific, I need to control the flow.

The require function given earlier in this chapter supports this type of dependency cycle. Can you see how it handles cycles?

- When you first require a module, Node.js begins to load it.
- Node.js maintains an internal cache of all required modules in memory.
- In the case of such a cycle, Node.js does not start from scratch when loading the second module. Instead, it uses the partially completed module that is already in the process of being loaded.
- In a circular dependency, the first time a module is required, Node.js starts loading it. If the module imports another module that depends on the first module, Node.js uses the partially filled export object to avoid infinite recursion.
