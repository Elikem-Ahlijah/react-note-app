import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import display from "./pages/display";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="container-flex">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" component={display} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;