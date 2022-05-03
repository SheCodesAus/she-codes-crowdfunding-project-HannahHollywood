import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav/Nav";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PledgePage from "./pages/PledgePage/PledgePage";
import UserPage from "./pages/UserPage/UserPage";
import InventionsPage from "./pages/InventionsPage/InventionsPage";
import GeniusListPage from "./pages/GeniusListPage/GeniusListPage";
import ProjectFormPage from "./pages/ProjectFormPage/ProjectFormPage";

// Styles
import "./App.css";

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/projects/" element={<InventionsPage />} />
          <Route path="/project/create" element={<ProjectFormPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/pledges/:id" element={<PledgePage />} />
          <Route path="users/" element={<GeniusListPage />} />
          <Route path="users/:id" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
