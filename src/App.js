import { NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './screens/About';
import ContactPage from './screens/Contact';
import HomePage from './screens/Home';
import NoMatch from './componet/NoMatch';
import data from './projects/ProjectData.json'
import Project from './screens/Project';
import './App.css';




function App() {
  return (
    <div className="App">
      <header>
      <div className="links">
      <div className="title">

      <label htmlFor='hamburger'>&#9776;</label>
      

        <h1 >Amar Moorer</h1>

      </div>
      <input type="checkbox" id='hamburger' />

      <nav id="hamitems">
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/projects"}>Projects</NavLink>
          {/* <NavLink to={"/contact"}>Contact</NavLink> */}
      </nav>
      </div> 
      </header>

      <Routes>

        <Route index element={<HomePage />} />
        <Route path="/projects" element={<AboutPage  projects={data} />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}

        <Route path="/projects/:project_id" element={<Project {...data} />} />

        <Route path="*" element={<NoMatch />}   />

      </Routes>
    </div>
  );
}

export default App;
