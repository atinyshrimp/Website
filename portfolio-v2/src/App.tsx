import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
// import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <Router basename="/portfolio-v2">
      <GlobalStyle />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
