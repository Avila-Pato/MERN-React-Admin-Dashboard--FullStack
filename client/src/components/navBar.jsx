// import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  // SettingsOutlined,
  // ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./flexBetween";

import { useDispatch } from "react-redux";
import { setMode } from "state";
// import profileImage from "assets/152195893.jpg";
import { useTheme } from "@mui/material";
import { AppBar, IconButton, InputBase } from "@mui/material";
import Tollbar from "@mui/material/Toolbar";

const NavBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Tollbar sx={{ justifyContent: "space-between" }}>
        {/* Lado izquierdo */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* LADO DERE DERECHO  del modo blue y white*/}
        <FlexBetween>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
        </FlexBetween>
      </Tollbar>
    </AppBar>
  );
};

export default NavBar;
