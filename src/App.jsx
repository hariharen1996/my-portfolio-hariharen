import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import FallbackLoad from "./components/FallbackLoad";
import Layout from "./components/Layout";
import Chatbot from "./components/Chatbot";
import Theme from "./components/Theme";
import "./index.css";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Career = lazy(() => import("./pages/Career/Career"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Credentials = lazy(() => import("./pages/Credentials/Credentials"));

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
              path="career"
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <Career />
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
              path="credentials"
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <Credentials />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<FallbackLoad />}>
                  <div>
                    <Navigate to="/" replace />
                  </div>
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
