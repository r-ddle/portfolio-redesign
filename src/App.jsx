import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainProj from "./pages/MainProjects"
import MiniProj from "./pages/MiniProjects"
import ActiveProj from "./pages/ActiveProjects"
import MobileNotSupported from "./pages/Mobile404";
import { motion } from 'framer-motion';

function App() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <BrowserRouter>
            <Routes>
            {isMobile ? (
                <Route path="*" element={<MobileNotSupported />} />
            ) : (
                <>
                <Route
                    path="/"
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
                    path="/main-projects"
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
                    path="/mini-projects"
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
                    path="/active-projects"
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
                </>
            )}
            </Routes>
        </BrowserRouter>
        </motion.div>
    );
}

export default App;
