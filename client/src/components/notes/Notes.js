import React from "react";
import { Grid } from "@mui/material";

import Note from "./Note";

function Notes() {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ md: 2 }} mt={1}>
      <Grid item sm={1} md={3}>
        <Note />
      </Grid>
      <Grid item sm={1} md={3}>
        <Note />
      </Grid>
      <Grid item sm={1} md={3}>
        <Note />
      </Grid>
      <Grid item sm={1} md={3}>
        <Note />
      </Grid>
      <Grid item sm={1} md={3}>
        <Note />
      </Grid>
      <Grid item sm={1} md={3}>
        <Note />
      </Grid>
      <Grid item sm={1} md={3}>
        <Note />
      </Grid>
      <Grid item sm={1} md={3}>
        <Note />
      </Grid>
    </Grid>
  );
}

export default Notes;
