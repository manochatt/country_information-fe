import { createBrowserRouter } from "react-router-dom";
// import LandingPage from "../pages/LandingPage";
import { EventPage } from "@/pages/eventPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <EventPage />,
  },
  {
    path: "*",
    element: <>Not Found</>,
  },
]);
