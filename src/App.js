// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Games from "./components/games";
import Music from "./components/music";
import Repositories from "./components/repositories";
import Contact from "./components/contact";
import NavigationMenu from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/games" element={<Games />} />
        <Route path="/projects/music" element={<Music />} />
        <Route path="/projects/repositories" element={<Repositories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <autoScrollToTop />
      <Footer></Footer>
    </div>
  );
}

export default App;
