import React from "react";
import { RouterProvider } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import ChatButton from "./components/ChatButton";
import Footer from "./components/Footer";

import router from "./utils/Router";

const App = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <ChatButton />

      <main>
        <RouterProvider router={router} />
      </main>

      <Footer />
    </>
  );
};

export default App;
