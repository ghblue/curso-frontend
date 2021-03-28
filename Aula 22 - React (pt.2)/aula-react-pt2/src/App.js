import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from './pages/About'; // /
import Comments from "./pages/Comments";
import Home from './pages/Home';// /About
import Posts from "./pages/Posts";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/comments">
          <Comments />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
