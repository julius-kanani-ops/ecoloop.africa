import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import App from "./App.tsx";

// Pages
import HomePage from "./pages/HomePage.tsx";
import About from "./pages/About.tsx";
import Testimonials from "./components/home/Testimonials.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

// Global stylesheet
import "./index.css";
import HowItWorks from "./components/home/HowItWorks.tsx";
import Signup from "./pages/auth/Signup.tsx";
import Login from "./pages/auth/Login.tsx";
import Feed from "./pages/content/Feed.tsx";
import JoinPage from "./pages/auth/JoinPage.tsx";

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage />, },
      { path: "about", element: <About />, },
      { path: "testimonials", element: <Testimonials />,   },
      { path: "how-it-works", element: <HowItWorks /> },
      { path:"contact", element: <ContactPage /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "feed", element: <Feed /> },
      { path: "*", element: <NotFoundPage />, },
      { path: "join", element: <JoinPage />}
    ],
  },
]);

// Mount the app
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
