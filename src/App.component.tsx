import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainNav from "./components/navigation/MainNav.component";

import "./app.style.scss";

import Auth from "./pages/auth/Auth.page";
import Bookings from "./pages/bookings/Bookings.page";
import Events from "./pages/events/Events.page";

function App() {
  return (
    <BrowserRouter>
      <MainNav></MainNav>
      <main className="app-main">
        <Switch>
          <Redirect exact from="/" to="/auth"></Redirect>
          <Route exact path="/auth" component={Auth}></Route>
          <Route exact path="/events" component={Events}></Route>
          <Route exact path="/bookings" component={Bookings}></Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
