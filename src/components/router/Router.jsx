import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import WelcomePage from "../pages/WelcomePage";
import SearchMethodPage from "../pages/SearchMethodPage";
import CreateMethodPage from "../pages/CreateMethodPage";

const MainRouter = ({ children }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchMethodPage />} />
        <Route path="/create" element={<CreateMethodPage />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
