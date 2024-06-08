import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Route,Routes ,Navigate} from "react-router-dom";
import About from "./components/About"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <div className="container app_container">
        <div className="row app_row">
          <div className="col-lg-3 ">
            <Sidebar/> 
          </div>
          <div className="col-lg-9 app_main-content">
            <Navbar/>
            <Routes>
   <Route path='/' element={<About/>}></Route>
   <Route path='/resume' element={<Resume/>}></Route>
   <Route path='/projects' element={<Projects/>}></Route>
   <Route path='*' element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
