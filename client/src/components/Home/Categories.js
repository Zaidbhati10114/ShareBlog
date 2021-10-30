import {
  Button,
  makeStyles,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@material-ui/core";
import React from "react";
import { catgerories } from "../../constants/data";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  BlogButon: {
    margin: 30,
    color: "#035397",
    background: "#F6F6F6",
    width: "76%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  createButton: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Category = () => {
  const classes = useStyles();
  return (
    <div>
      <Link className={classes.createButton} to="/createBlog">
        <Button variant="outlined" className={classes.BlogButon}>
          Create Blog
        </Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <Link to={"/"} className={classes.link}>
              <TableCell>All</TableCell>
            </Link>
          </TableRow>
        </TableHead>
        <TableBody>
          {catgerories.map((category) => (
            <TableRow>
              <Link to={`/categories=${category}`}>
                <TableCell>{category}</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Category;
