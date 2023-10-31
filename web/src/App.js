import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Footer />
    </div>
  );
}

export default App;
