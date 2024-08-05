import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  Menu,
 
  
  SettingsOutlined,
} from "@mui/icons-material";
import { MenuItem} from "@mui/material";
import { ArrowDropDownOutlined } from "@mui/icons-material";


import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { useTheme, AppBar, IconButton, InputBase, Toolbar, Box, Button } from "@mui/material";
import FlexBetween from "./flexBetween.jsx"
import profileImage from "assets/img.jpg";

const NavBar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
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

        {/* Lado derecho */}
        <FlexBetween>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
          <Button
            onClick={handleClick}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "none",
              gap: "1rem",
            }}
          >
            <Box
              component="img"
              alt="profile"
              src={profileImage}
              height="32px"
              width="32px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
            <Box textAlign="left">
              <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100] }}>
                {user.name}
              </Typography>
              <Typography fontSize="0.75rem" sx={{ color: theme.palette.secondary[200] }}>
                {user.occupation}
              </Typography>
            </Box>


            <ArrowDropDownOutlined sx={{ color: theme.palette.secondary[300], fontSize: "25px" }} 
            />
          </Button>


              {/* // menu desplegable */}
            <Menu
              anchorEl={anchorEl}
              onClose={handleClose}
              open={isOpen}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Desconectarse/</MenuItem>
            </Menu>

        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;