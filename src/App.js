import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./compnents/Home/index";

function App() {
  return (
    <Router>
      <Switch>
        <Container maxWidth="md">
          <Route path='/' exact component={Home} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
