import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as P from "../pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <P.Layout />,
    children: [
      {
        path: "/",
        element: <P.About />,
      },
      {
        path: "/formacao",
        element: <P.Degree />,
      },
      {
        path: "/experiencia",
        element: <P.Experience />,
      },
      {
        path: "/hobbies",
        element: <P.Hobbies />,
      },
    ],
  },
]);

export function RouterProvi() {
  return <RouterProvider router={router} />;
}
