import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import VisimisiPage from "../pages/VisimisiPage";
import JurusanPage from "../pages/JurusanPage";
import AlumniPage from "../pages/AlumniPage";
import BeritaPage from "../pages/BeritaPages";
import CekKelulusan from "../pages/CekKelulusan";
import PartnershipPage from "../pages/PartnershipPage";
import Feedback from "../components/Feedback";
import PrestasiPage from "../pages/BeritaPages";
import About from "../components/About";
import Sambutan from "../components/Sambutan";
import VisiMisi from "../components/VisiMisi";
import Jurusan from "../components/Jurusan";
import Alumni from "../components/Alumni";
import AlumniDetail from "../pages/AlumniDetail";
import News from "../components/News";
import NewsWatch from "../pages/NewsWatch";
import ErrorBoundary from "./RouteErrorBoundary";
import { LARAVEL_URL } from "./ConstantVariable";
import RplPage from "../pages/RplPage";
import GpPage from "../pages/GpPage";
import TpPage from "../pages/TpPage";
import PhPage from "../pages/PhPage";
import KlPage from "../pages/KlPage";
import AtrPage from "../pages/AtrPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <About />
            <Sambutan />
            <VisiMisi />
            <ErrorBoundary>
              <Jurusan />
            </ErrorBoundary>
            <Alumni />
            <News />
            <Feedback />
          </>
        ),
      },
      { path: "about", element: <AboutPage /> },
      { path: "visi-misi", element: <VisimisiPage /> },
      {
        path: "jurusan",
        element: (
          <ErrorBoundary>
            <JurusanPage />
          </ErrorBoundary>
        ),
      },
      { path: "alumni", element: <AlumniPage /> },
      
      { path: "news", element: <BeritaPage /> },
      { path: "cekkelulusan", element: <CekKelulusan /> },
      { path: "news/:slug", element: <NewsWatch /> },
      {path: "alumni/:id", element: <AlumniDetail />},
      { path: "partnership", element: <PartnershipPage /> },
      { path: "feedback", element: <Feedback /> },
      { path: "prestasi", element: <PrestasiPage /> },
      {path:"rekayasa-perangkat-lunak" , element:<RplPage/>},
      {path:"geologi-pertambangan" , element:<GpPage/>},
      {path:"teknik-pengelasan" , element:<TpPage/>},
      {path:"perhotelan" , element:<PhPage/>},
      {path:"kuliner" , element:<KlPage/>},
      {path:"agribisnis-ternak-ruminansia" , element:<AtrPage/>}
    ],
  },
  {
    path: "admin",
    element: <AdminRedirect />,
  },
  {
    path: "admin/*",
    element: <AdminRedirect />,
  },
]);

function AdminRedirect() {
  React.useEffect(() => {
    const url  = `${LARAVEL_URL}/admin`;
    console.log(url)
    window.location.replace(url);
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-950">
      <div className="text-white text-center">
        <p className="text-xl">Redirecting to admin panel...</p>
      </div>
    </div>
  );
}

export default router;
