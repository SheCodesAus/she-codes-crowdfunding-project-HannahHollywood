import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav/Nav";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectFormPage from "./pages/ProjectFormPage/ProjectFormPage";
import EditProjectFormPage from "./pages/ProjectFormPage/EditProjectFormPage";

import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import EditProfilePage from "./pages/UserPage/EditProfileForm/EditProfileForm";

import PledgePage from "./pages/PledgePage/PledgePage";

import InventionsPage from "./pages/InventionsPage/InventionsPage";
import GeniusListPage from "./pages/GeniusListPage/GeniusListPage";

// Styles
import "./App.css";

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/projects/" element={<InventionsPage />} />
          <Route path="/projects/create" element={<ProjectFormPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/projects/edit-invention/:id" element={<EditProjectFormPage />} />

          <Route path="/pledges/:id" element={<PledgePage />} />

          <Route path="/users/" element={<GeniusListPage />} />

          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/users/:id/edit-profile" element={<EditProfilePage />} />
          <Route path="/users/register/" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
