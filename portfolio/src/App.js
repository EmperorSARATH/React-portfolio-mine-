
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Myproject from './components/Myproject';
import Section from './components/Section';

function App() {
  return (
    <div className="App" id="bg">
      <div className="navbar"><h1>Portfolio</h1>
      </div>
      <About/>
      {/* <br/><br/><br/><br/> */}
      <Section/>
      <Myproject/>
      <Section/>
      <Contact/>
    </div>
  );
}

export default App;
