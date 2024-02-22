import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { ThemeProvider } from "./ThemeContext";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Blogpage from "./pages/blog/Blogpage";
import SingleBlog from "./pages/blog/SingleBlog";
import useKeepAlive from "./hooks/useKeepAlive";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import SkillsPage from "./pages/Skills";

function App() {
  const url = "https://blog-api-7i4w.onrender.com/keep-alive";
  useKeepAlive(url, 20000);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
