import './App.css';
import { Contect } from './components/Contect';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import {About} from './components/About';
import {Fotter} from './components/Fotter';
import {Projects} from './components/Projects';
import {Skills} from './components/Skills';
import { Menu } from './components/Menu';




function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/projects' element={<Projects/>}/>
      <Route exact path='/skills' element={<Skills/>}/>
      <Route exact path='/contect' element={<Contect/>}/>
      </Routes>
      <Fotter/>
     {/* <Home/>
     <About/>
     <Projects/>
     <Skills/>
     <Contect/>
     <Fotter/> */}
    </div>
  );
}

export default App;
