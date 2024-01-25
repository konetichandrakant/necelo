import React from 'react';
import logo from '../logo.png';
import { Typography } from '@mui/material';

function Header() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={logo} alt="logo" width="10%" height="5%" style={{ minHeight: "30px", minWidth: "50px" }} />
      </div>
      <div>
        <Typography variant="subtitle1" textAlign={"center"} sx={{ margin: "2px", border: "0px", padding: "0px", lineHeight: "1" }}>
          Bill Management System
        </Typography>
      </div>
    </div>
  )
}

export default Header