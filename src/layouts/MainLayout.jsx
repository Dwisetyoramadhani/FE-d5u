import React from "react";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import ChatButton from "../components/ChatButton";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
