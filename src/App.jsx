import React from "react";
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
    <>
      <TopNavbar />
      <MainNavbar />
      <Home />
      <ChatButton />
      <About />
      <Sambutan />
      <VisiMisi />
      <ErrorBoundary>
        <Jurusan />
      </ErrorBoundary>
      <Alumni />
      <News />
      <Feedback />
      <Footer />
    </>
  );
};

export default App;
