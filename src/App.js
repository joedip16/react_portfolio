import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"


function App() {
  return (
    <Router basename = "/react_portfolio">
    <div className="App">
     <Navbar />
        <Switch>
          <Route exact path= {["/", "/about"]}>
            <About />
            </Route>
            <Route exact path= "/portfolio">
            <Portfolio />
            </Route>
            <Route exact path= "/contact">
            <Contact />
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
