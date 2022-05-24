import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Header from "./components/shared/header";
import Home from "./routes/Home";
import { NotesContext } from "./contextAPI/NotesContext";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
