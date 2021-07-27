import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/globals.style.scss";
import "./assets/styles/components.style.scss";
import App from "./App.component";
import UserState from "./context/user/UserState";
import EventsState from "./context/events/EventsState";

ReactDOM.render(
  <EventsState>
    <UserState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserState>
  </EventsState>,
  document.getElementById("root")
);
