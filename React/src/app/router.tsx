import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RootLayout";
import { LoginPage } from "../pages/Login/LoginPage";
import { HomePage } from "../pages/Home/HomePage";
import { RegistrationPage } from "../pages/Registration/RegistrationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegistrationPage />,
      },
    ],
    errorElement: <div>Упс, что-то пошло не так</div>,
  },
]);
