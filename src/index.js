import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <BrowserRouter>
     <Auth0Provider
    domain="dev-3s01q2mixk7hx5jf.us.auth0.com"
    clientId="7mem4JXFOndPe8Mo3fxhP8pWzPxegUKv"
    redirectUri={window.location.origin}
  >
      <App />
      </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
