import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Box } from "@material-ui/core";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import DetailsView from "./components/post/DetailsView";
import CreateBlog from "./components/post/CreateBlog";
import UpdateBlog from "./components/post/UpdateBlog";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Login from "./components/account/login.jsx";
import { oktaAuthConfig, oktaSignInConfig } from "./config";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <SecureRoute path="/" component={Header} />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route
            path="/login"
            render={() => <Login config={oktaSignInConfig} />}
          />
          <Route path="/login/callback" component={LoginCallback} />
          <Route path="/details/:id" exact component={DetailsView}></Route>
          <Route path="/createBlog" exact component={CreateBlog}></Route>
          <Route path="/update/:id" exact component={UpdateBlog}></Route>
        </Switch>
      </Box>
    </Security>
  );
};

export default AppWithRouterAccess;
