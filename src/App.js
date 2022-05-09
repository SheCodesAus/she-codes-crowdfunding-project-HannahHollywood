import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav/Nav";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectFormPage from "./pages/ProjectPage/ProjectFormPage/ProjectFormPage";
import EditProjectPage from "./pages/EditProjectPage/EditProjectPage";

import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import EditProfilePage from "./pages/UserPage/EditProfileForm/EditProfileForm";

import BadgeIconPage from "./pages/UserPage/BadgeIconPage/BadgeIconPage";
import PledgePage from "./pages/PledgePage/PledgePage";
import CategoryPage from "./pages/ProjectPage/CategoryPage/CategoryPage";

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
          <Route path="/projects/edit-invention/:id" element={<EditProjectPage />} />

          <Route path="/pledges/:id" element={<PledgePage />} />
          <Route path="/category/:slug" element={<CategoryPage/>} />

          <Route path="/users/" element={<GeniusListPage />} />

          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/users/:id/edit-profile" element={<EditProfilePage />} />
          <Route path="/users/badges/:id" element={<BadgeIconPage />} />
          <Route path="/users/register/" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
