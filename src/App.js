import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Splash from './Components/Splash'
import Project from './Components/Project';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Splash />
    <Navbar />
    <Home />
    <About/>
    <Project />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
