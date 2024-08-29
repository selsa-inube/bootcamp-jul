function efficientRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let routes = parcels.map((parcel) => {
      if (parcel.place != place) {
        return {
          route: findRoute(roadGraph, place, parcel.place),
          pickUp: true,
        };
      } else {
        return {
          route: findRoute(roadGraph, place, parcel.address),
          pickUp: false,
        };
      }
    });

    let shortestRoute = routes.reduce((shortest, current) =>
      shortest.route.length < current.route.length ? shortest : current,
    ).route;
  }
  return { direction: route[0], memory: route.slice(1) };
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
compareRobots(goalOrientedRobot, [], efficientRobot, []);
