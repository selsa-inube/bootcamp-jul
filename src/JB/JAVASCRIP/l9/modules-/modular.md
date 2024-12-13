# A modular robot

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

If you were to write that project as a modular program, what modules would you create? Which module would depend on which other module, and what would their interfaces look like?

- I would create 5 modules (Graph, Routes, Village State, Robots, Simulation Engine).
  Graph would not depend on any other module.
  Routes depends on the Graph module to construct the graph from the connections between locations.Village State depends on the Routes module to use the graph (roadGraph) and perform movements within the village.Robots depends on the Village State module to get and update the state, and also depends on the Graph module to calculate optimal routes between locations.Simulation Engine depends on the Village State module to initialize and update the state, and also depends on the Robots module to execute specific strategies during the simulation.

Which pieces are likely to be available prewritten on NPM?

- You'll probably find some components on npm for robot-specific logic, like path following or goal planning.

Would you prefer to use an NPM package or write them yourself?

- It depends on the context. If the project is small it is better to write it, but if it is a large project or one that needs optimization, use an npm package to save time.

---

The require function given earlier in this chapter supports this type of dependency cycle. Can you see how it handles cycles?

- The feature requires handling cyclic dependencies using a cache. When a module A depends on B and vice versa, it avoids infinite reloads by storing partially loaded modules in the cache. Thus, when a module is loaded, its exports are accessible even if the execution is in the middle of a cyclic load.
