import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Communities } from './components/communities/Communities';
import { Resources } from './components/reousrces/Resources';
import { ResumeBuilder } from './components/Resume-Builder';
import { Join } from './components/communities/Join';
import { LogIn } from './components/communities/Log-In';
import { Home } from './components/Homes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/communities" element={ <Communities/>}/>
        <Route path="/resume-builder" element={<ResumeBuilder/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/log-in' element={<LogIn/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      {/* <Home/> */}
    </Router>
  );
}

export default App;
