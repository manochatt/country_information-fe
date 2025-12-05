// import { menu } from "@/configs";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    // children: menu,
  },
  {
    path: "*",
    element: <>Not Found</>,
  },
]);
