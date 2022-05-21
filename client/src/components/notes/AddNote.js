import React, { Fragment } from "react";

import { Box, TextField, Button } from "@mui/material";

function AddNote() {
  return (
    <Fragment>
      <Box sx={{ width: 500, maxWidth: "100%" }} m="auto">
        <TextField label="Add new note" fullWidth multiline />
        <Button fullWidth sx={{ mt: 1 }} variant="contained">
          Add
        </Button>
      </Box>
    </Fragment>
  );
}

export default AddNote;
