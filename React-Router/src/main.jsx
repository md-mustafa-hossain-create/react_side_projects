import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import User from "./components/User/User";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Contact } from "./components";
import Github, { githubInfoLoader } from "./components/Github/Github";

// Alternative router configuration using an array of route objects
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },

//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  //
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="about" element={<About />} />

      <Route path="contact" element={<Contact />} />

      <Route path="user/:userid" element={<User />} />

      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
