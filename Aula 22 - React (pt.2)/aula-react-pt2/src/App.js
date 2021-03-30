import About from './routes/About'; // /
import Comments from "./routes/Comments";
import Home from './routes/Home';// /About
import Posts from "./routes/Posts";
import CreatePost from './routes/CreatePost'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


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
      <Switch>
        <Route exact path="/create-post">
          <CreatePost />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
