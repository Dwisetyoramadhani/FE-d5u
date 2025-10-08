import React from "react";
import Home from "./pages/Home";
import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import ChatButton from "./components/ChatButton";

const App = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <Home />
      <ChatButton />
    </>
  );
};

export default App;
