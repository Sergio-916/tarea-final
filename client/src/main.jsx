import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import Bakery from "./pages/Bakery.jsx";
import Bread from "./pages/Bread.jsx";
import Cakes from "./pages/Cakes.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Favorites from "./pages/Favorites.jsx";
import "./index.css";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error 404 - Page not found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/bread",
        element: <Bread />,
      },
      {
        path: "shop/bakery",
        element: <Bakery />,
      },
      {
        path: "shop/cakes",
        element: <Cakes />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "about",
        element: <About />,
      },
      { path: "shopping-cart", element: <ShoppingCart /> },
      {
        path: "favorites",
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
