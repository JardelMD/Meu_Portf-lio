import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutMePage } from "../pages/AboutPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ContactsPage } from "../pages/ContactsPage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    );
};