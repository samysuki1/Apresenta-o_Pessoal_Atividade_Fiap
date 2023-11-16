import { createBrowserRouter } from "react-router-dom";
import * as P from "../pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <P.Layout />,
    errorElement: <P.ErrorPage />,
    children: [
      {
        path: "/",
        element: <P.About />,
      },
      {
        path: "/hobbies",
        element: <P.Hobbies />,
      },
      {
        path: "/xp",
        element: <P.Xp />,
      },
      {
        path: "/formacao",
        element: <P.Formacao />,
      },
    ]
  }
]);