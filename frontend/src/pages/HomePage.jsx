import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Events from '../components/Events';
import Contact from '../components/Contact';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Events />
      <Contact />
    </div>
  );
}

export default App;
