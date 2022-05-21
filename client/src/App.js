import React, { Fragment } from "react";
import { Container } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AddNote from "./components/notes/AddNote";
import Notes from "./components/notes/Notes";

function App() {
  return (
    <Fragment>
      <Container>
        <AddNote />
        <Notes />
      </Container>
    </Fragment>
  );
}

export default App;
