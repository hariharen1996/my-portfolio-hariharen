import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import FallbackLoad from "./components/FallbackLoad";
import Layout from "./components/Layout";
import Chatbot from "./components/Chatbot";
import Theme from "./components/Theme";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const PortfolioDetails = lazy(() => import("./pages/PortfolioDetails"));
const Certificates = lazy(() => import("./components/Certificate"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Theme />
          <Chatbot />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="skills"
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <Skills />
                </Suspense>
              }
            />
            <Route
              path="portfolio"
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <Portfolio />
                </Suspense>
              }
            />
            <Route
              path="portfolio-details/:id"
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <PortfolioDetails />
                </Suspense>
              }
            />
            <Route
              path="certificate"
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <Certificates />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
