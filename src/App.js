import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
// import { Contact } from './component/App/Contact/Contact';
// import { Project } from './component/App/Project/Project';


function App() {
  return (
    
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about-us" element={<About/>} />
          {/* <Route exact path="/contact-us" element={<Contact/>} />
          <Route exact path="/project" element={<Project/>} />
           */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;




