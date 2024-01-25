import React from 'react';
import logo from '../logo.png';
import { Typography } from '@mui/material';

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
      <img src={logo} alt="logo" width="10%" height="5%" style={{ minHeight: "30px", minWidth: "50px" }} />
    </div>
  )
}

export default Header