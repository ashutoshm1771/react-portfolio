import { useState, useEffect } from "react";
import './App.css';
import Header from "./Header";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Footer";

function App() {
  const [projects,setProjects] = useState(false); // would be used if screen content was to be changed without reforming the url.

  useEffect(() => {
    const video = document.getElementById("myVideo");
    video.play();
  },[]);

  return (
    <div className="app">
        <Router>
          <video autoplay muted loop playsinline class="fullscreen-bg__video" id="myVideo">
            <source src="vids/vid.mp4" type="video/mp4" />
          </video>
          <Switch>
            <Route exact path="/"> 
              <Header />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
          <Footer className="footer"/>
        </Router>
    </div>
  );
}

export default App;
