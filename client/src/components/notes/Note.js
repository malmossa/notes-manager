import React from "react";
import { Paper, Typography } from "@mui/material";

import "./style.css";

function Note() {
  return (
    <Paper className="padding" sx={{ position: "relative" }}>
      <Typography variant="body2">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Paper>
  );
}

export default Note;
