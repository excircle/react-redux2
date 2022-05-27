import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./common/header";
import HomePage from './home/HomePage';
import CoursesPage from './courses/CoursesPage';
import ManageCoursePage from './courses/ManageCoursePage';
import AboutPage from './about/AboutPage';
import NotFoundPage from './NotFoundPage';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course/:slug" element={<ManageCoursePage />} />
        <Route path="/course/" element={<ManageCoursePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about-page" element={<Navigate replace to="/about" />} />
      </Routes>
    </div>
  );
}

export default App;