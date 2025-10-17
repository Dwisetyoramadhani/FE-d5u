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
import News from "../components/News";

import ErrorBoundary from "./RouteErrorBoundary";

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
      { path: "partnership", element: <PartnershipPage /> },
      { path: "feedback", element: <Feedback /> },
      { path: "prestasi", element: <PrestasiPage /> },
    ],
  },
]);

export default router;
