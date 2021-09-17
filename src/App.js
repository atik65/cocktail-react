import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cocktails from "./components/Cocktails";
import Error from "./components/Error";
import IndivisualCocktail from "./components/IndivisualCocktail";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HashRouter>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cocktails">
            <Cocktails />
          </Route>

          <Route exact path="/cocktails/:id">
            <IndivisualCocktail />
          </Route>
          <Route>
            <Error />
          </Route>
        </HashRouter>
      </Router>
    </>
  );
}

export default App;
