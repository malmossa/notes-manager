import React, { Fragment } from "react";

import { TextField, Box, Button } from "@mui/material";

function AddNote() {
  return (
    <Fragment>
      <Box sx={{ width: 500, maxWidth: "100%" }} m="auto">
        <TextField multiline rows={4} fullWidth label="Add new note" />
        <Button fullWidth sx={{ mt: 1 }} variant="contained">
          Add
        </Button>
      </Box>
    </Fragment>
  );
}

export default AddNote;
