import Login from "./login";
import Register from "./register";
import Dashboard from './dashboard';
import {Route, BrowserRouter} from "react-router-dom";
import "./App.css";
import Images from "./images";

function App() {
  return (
    <BrowserRouter>
    <Route>
      <Login />
    </Route>
    <Route exact path="/register">
      <Register/>
    </Route>
    <Route exact path="/dashboard">
      <Dashboard/>
    </Route>
    <Route exact path="/images">
      <Images/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
