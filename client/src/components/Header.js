import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  components: {
    background: "#FCD8D4",
    color: "#4C4C6D",
  },

  container: {
    justifyContent: "center",
    "& > *": {
      padding: "20px",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
    },

    "&:hover": {
      color: "#171010",
    },
  },
});

const Header = () => {
  const HeaderClasses = useStyles();
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();
  if (!authState && authState.isPending) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login</button>
  );

  return (
    <div>
      <AppBar className={HeaderClasses.components}>
        <Toolbar className={HeaderClasses.container}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography>Home</Typography>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography>About</Typography>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography>Contact</Typography>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography>{button}</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

//  "& > *": {
//       padding: "20px",
//       cursor: "pointer",
//       // transition: "all 0.3s ease-in-out",
//     },
