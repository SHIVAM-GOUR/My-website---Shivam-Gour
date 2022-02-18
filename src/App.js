import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Work from './Components/Work';

function App() {
  return (
   <Router>
     <Navbar/>
     <Routes>
       <Route path='/*' element={<Home/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/resume' element={<Resume/>}/>
       <Route path='/works' element={<Work/>}/>
       <Route path='/skills' element={<Skills/>}/>
     </Routes>
   </Router>
  )
}

export default App;
