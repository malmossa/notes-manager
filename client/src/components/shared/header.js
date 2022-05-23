import React from "react";
import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar>
      <Typography variant="h4" align="justify" sx={{ ml: 4, height: 50 }}>
        Notes Manager
      </Typography>
    </AppBar>
  );
}

export default Header;
