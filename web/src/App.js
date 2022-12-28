import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
