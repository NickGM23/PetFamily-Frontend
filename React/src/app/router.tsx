import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RootLayout";
import { LoginPage } from "../pages/Login/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
    errorElement: <div>Упс, что-то пошло не так</div>,
  },
]);
