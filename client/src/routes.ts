import { createBrowserRouter, type RouteObject } from "react-router"
import App from "./app/App"
import Home from "./app/features/home/Home"
import TennisPickleball from "./app/features/tennis-pickleball/TennisPickleball"
import Badminton from "./app/features/badminton/Badminton"
import NotFound from "./app/features/not-found/NotFound"

export default createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "tennis-pickleball",
        Component: TennisPickleball
      },
      {
        path: "badminton",
        Component: Badminton
      },
    ],
    ErrorBoundary: NotFound
  } satisfies RouteObject,
]);
