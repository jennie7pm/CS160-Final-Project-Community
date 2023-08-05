import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Communities } from "./components/communities/Communities";
import { Resources } from "./components/reousrces/Resources";
import { ResumeBuilder } from "./components/resume-builder/Resume-Builder";
// import { Sidebar } from "./components/resume-builder/Resume-Builder";
import { Join } from "./components/log-join/Join";
import { LogIn } from "./components/log-join/Log-In";
import { Home } from "./components/Homes/Home";
import { Profile } from "./components/profile/Profile";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/communities" element={<Communities />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/join" element={<Join />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
