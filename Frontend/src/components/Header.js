import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

// import logo image
import logo from "./logo.png";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#000000" }} position="sticky">
        <Toolbar>
        <NavLink to="/" style={{ color: "white", display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" style={{ height: "40px", marginRight: "10px" }} />
            <span style={{ fontSize: "1.5rem" }}>Bookbazaar</span>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
             <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
            <Tab LinkComponent={NavLink} to="/about" label="About Bookbazaar" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
