import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@material-ui/core";
import AppWithRouterAccess from "./AppWithRouterAccess.js";
// import Header from "./components/Header";
// import Home from "./components/Home/Home";
// import DetailsView from "./components/post/DetailsView";
// import CreateBlog from "./components/post/CreateBlog";
// import UpdateBlog from "./components/post/UpdateBlog";

function App() {
  return (
    <Router>
      <AppWithRouterAccess />
      {/* <Header />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/details/:id" exact component={DetailsView}></Route>
          <Route path="/createBlog" exact component={CreateBlog}></Route>
          <Route path="/update/:id" exact component={UpdateBlog}></Route>
        </Switch>
      </Box> */}
    </Router>
  );
}

export default App;
