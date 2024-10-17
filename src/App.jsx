import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainProj from "./pages/MainProjects";
import MiniProj from "./pages/MiniProjects";
import ActiveProj from "./pages/ActiveProjects";
import MobileNotSupported from "./pages/Mobile404";
import { motion } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/portfolio-redesign"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/portfolio-redesign/main-projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <MainProj />
            </motion.div>
          }
        />
        <Route
          path="/portfolio-redesign/mini-projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <MiniProj />
            </motion.div>
          }
        />
        <Route
          path="/portfolio-redesign/active-projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ActiveProj />
            </motion.div>
          }
        />
        <Route
          path="/portfolio-redesign/mobile-404"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <MobileNotSupported />
            </motion.div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
