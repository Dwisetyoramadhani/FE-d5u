import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import ChatButton from "./components/ChatButton";
import About from "./components/About";
import Sambutan from "./components/Sambutan";
import VisiMisi from "./components/VisiMisi";
import Jurusan from "./components/Jurusan";
import Alumni from "./components/Alumni";
import News from "./components/News";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import VisimisiPage from "./pages/VisimisiPage";
import JurusanPage from "./pages/JurusanPage";
import AlumniPage from "./pages/AlumniPage";
import PrestasiPage from "./pages/BeritaPages";
import CekKelulusan from "./pages/CekKelulusan";
import PartnershipPage from "./pages/PartnershipPage";
import BeritaPage from "./pages/BeritaPages";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center mt-20 text-red-600">
          <h2>Terjadi kesalahan saat memuat halaman.</h2>
          <p>Silakan refresh halaman atau coba lagi nanti.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <MainNavbar />
      <ChatButton />

      <Routes>
        <Route
          path="/"
          element={
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
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/visi-misi" element={<VisimisiPage />} />
        <Route
          path="/jurusan"
          element={
            <ErrorBoundary>
              <JurusanPage />
            </ErrorBoundary>
          }
        />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/news" element={<BeritaPage />} />
        <Route path="/cekkelulusan" element={<CekKelulusan />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/prestasi" element={<PrestasiPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
