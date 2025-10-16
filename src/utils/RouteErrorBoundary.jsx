import React from "react";

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

export default ErrorBoundary;
