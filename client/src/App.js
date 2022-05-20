import React, { Fragment } from "react";
import { Container } from "@mui/material";

import AddNote from "./components/notes/AddNote";

function App() {
  return (
    <Fragment>
      <Container>
        <AddNote />
      </Container>
    </Fragment>
  );
}

export default App;
