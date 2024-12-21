// import logo from './logo.svg';
import {
  // Link,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Components/home';
import Experience from './Components/experience';
import Projects from './Components/projects';
import Games from './Components/games';
import Music from './Components/music';
import Repositories from './Components/repositories';
import Contact from './Components/contact';
import NavigationMenu from './Components/header';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import $ from 'jquery';
import './styles.css';

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <Routes>
          <Route path="/CS7025-portfolio" element={<Home />} />
          <Route path="/CS7025-portfolio/experience" element={<Experience />} />
          <Route path="/CS7025-portfolio/projects" element={<Projects />} />
          <Route path="/CS7025-portfolio/games" element={<Games />} />
          <Route path="/CS7025-portfolio/music" element={<Music />} />
          <Route path="/CS7025-portfolio/repositories" element={<Repositories />} />
          <Route path="/CS7025-portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>        
  );
}

export default App;
