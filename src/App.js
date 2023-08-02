import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Communities } from './components/communities/Communities';
import { Resources } from './components/reousrces/Resources';
import { ResumeBuilder } from './components/Resume-Builder';

function App() {
  return (
    <Router>
      <div class="App.js">
        <Link to="/communities">community</Link>
        <Link to="/resume-builder">resume builder</Link>
        <Link to="/resources">resources</Link>
      </div>

      <Routes>
        <Route path="/communities" element={ <Communities/>}/>
        <Route path="/resume-builder" element={<ResumeBuilder/>}/>
        <Route path="/resources" element={<Resources/>}/>
      </Routes>
    </Router>
  );
}

export default App;
