import { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import userContext from "./context/user/userContext";

import "./app.style.scss";

import MainNav from "./components/navigation/MainNav.component";
import Auth from "./pages/auth/Auth.page";
import Bookings from "./pages/bookings/Bookings.page";
import Events from "./pages/events/Events.page";

function App() {
  const { user } = useContext(userContext);

  return (
    <BrowserRouter>
      <MainNav></MainNav>
      <main className="app-main">
        <Switch>
          {user && <Redirect exact from={"/"} to="/events"></Redirect>}
          {user && <Redirect exact from={"/auth"} to="/events"></Redirect>}

          {!user?.token && <Route exact path="/auth" component={Auth}></Route>}
          {user?.token && (
            <Route exact path="/bookings" component={Bookings}></Route>
          )}
          <Route exact path="/events" component={Events}></Route>

          {!user && <Redirect exact to="/auth"></Redirect>}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
