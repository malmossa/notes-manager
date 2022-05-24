import React, { Fragment } from "react";

import AddNote from "../components/notes/AddNote";
import Notes from "../components/notes/Notes";

function Home() {
  return (
    <Fragment>
      <AddNote />
      <Notes />
    </Fragment>
  );
}

export default Home;
