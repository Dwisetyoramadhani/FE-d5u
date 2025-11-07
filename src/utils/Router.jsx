import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const VisimisiPage = lazy(() => import("../pages/VisimisiPage"));
const JurusanPage = lazy(() => import("../pages/JurusanPage"));
const AlumniPage = lazy(() => import("../pages/AlumniPage"));
const BeritaPage = lazy(() => import("../pages/BeritaPages"));
const CekKelulusan = lazy(() => import("../pages/CekKelulusan"));
const PartnershipPage = lazy(() => import("../pages/PartnershipPage"));
const Feedback = lazy(() => import("../components/Feedback"));
const PrestasiPage = lazy(() => import("../pages/BeritaPages"));
const About = lazy(() => import("../components/About"));
const Sambutan = lazy(() => import("../components/Sambutan"));
const VisiMisi = lazy(() => import("../components/VisiMisi"));
const Jurusan = lazy(() => import("../components/Jurusan"));
const Alumni = lazy(() => import("../components/Alumni"));
import LazyMount from "../components/LazyMount";
const AlumniDetail = lazy(() => import("../pages/AlumniDetail"));
const News = lazy(() => import("../components/News"));
const NewsWatch = lazy(() => import("../pages/NewsWatch"));
import ErrorBoundary from "./RouteErrorBoundary";
import { LARAVEL_URL } from "./ConstantVariable";
const RplPage = lazy(() => import("../pages/RplPage"));
const GpPage = lazy(() => import("../pages/GpPage"));
const TpPage = lazy(() => import("../pages/TpPage"));
const PhPage = lazy(() => import("../pages/PhPage"));
const KlPage = lazy(() => import("../pages/KlPage"));
const AtrPage = lazy(() => import("../pages/AtrPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center">Memuat...</div>}>
            <>
              <Home />
              <LazyMount><About /></LazyMount>
              <LazyMount><Sambutan /></LazyMount>
              <LazyMount><VisiMisi /></LazyMount>
              <ErrorBoundary>
                <LazyMount><Jurusan /></LazyMount>
              </ErrorBoundary>
              <LazyMount><Alumni /></LazyMount>
              <LazyMount><News /></LazyMount>
              <LazyMount><Feedback /></LazyMount>
            </>
          </Suspense>
        ),
      },
      { path: "about", element: <Suspense fallback={<div>Memuat...</div>}><AboutPage /></Suspense> },
      { path: "visi-misi", element: <Suspense fallback={<div>Memuat...</div>}><VisimisiPage /></Suspense> },
      {
        path: "jurusan",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<div>Memuat...</div>}><JurusanPage /></Suspense>
          </ErrorBoundary>
        ),
      },
      { path: "alumni", element: <Suspense fallback={<div>Memuat...</div>}><AlumniPage /></Suspense> },
      
  { path: "news", element: <Suspense fallback={<div>Memuat...</div>}><BeritaPage /></Suspense> },
  { path: "cekkelulusan", element: <Suspense fallback={<div>Memuat...</div>}><CekKelulusan /></Suspense> },
  { path: "news/:slug", element: <Suspense fallback={<div>Memuat...</div>}><NewsWatch /></Suspense> },
  { path: "alumni/:id", element: <Suspense fallback={<div>Memuat...</div>}><AlumniDetail /></Suspense> },
  { path: "partnership", element: <Suspense fallback={<div>Memuat...</div>}><PartnershipPage /></Suspense> },
  { path: "feedback", element: <Suspense fallback={<div>Memuat...</div>}><Feedback /></Suspense> },
  { path: "prestasi", element: <Suspense fallback={<div>Memuat...</div>}><PrestasiPage /></Suspense> },
  { path:"rekayasa-perangkat-lunak" , element:<Suspense fallback={<div>Memuat...</div>}><RplPage/></Suspense> },
  { path:"geologi-pertambangan" , element:<Suspense fallback={<div>Memuat...</div>}><GpPage/></Suspense> },
  { path:"teknik-pengelasan" , element:<Suspense fallback={<div>Memuat...</div>}><TpPage/></Suspense> },
  { path:"perhotelan" , element:<Suspense fallback={<div>Memuat...</div>}><PhPage/></Suspense> },
  { path:"kuliner" , element:<Suspense fallback={<div>Memuat...</div>}><KlPage/></Suspense> },
  { path:"agribisnis-ternak-ruminansia" , element:<Suspense fallback={<div>Memuat...</div>}><AtrPage/></Suspense> }
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
