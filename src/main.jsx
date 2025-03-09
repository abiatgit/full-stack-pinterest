import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Homepage from "./routes/homepage/homepage.jsx";
import CreatePage from "./routes/createPage/CreatePage.jsx";
import Authpage from "./routes/authpage/Authpage.jsx";
import Postpage from "./routes/postpage/Postpage.jsx";
import ProfilePage from "./routes/profile/ProfilePage.jsx";
import SearchPage from "./routes/searchpage/SearchPage.jsx";
import MainLayout from "./routes/mainLayout/MainLayout.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Homepage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<Postpage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
