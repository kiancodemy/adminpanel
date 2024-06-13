import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

import { useDispatch } from "react-redux";
export default function Navbar({
  setopen,
}: {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AppBar sx={{ position: "static", backgroundColor: "#102C57" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/*left--side*/}
        <Box sx={{ display: "flex" }}>
          <IconButton
            sx={{ color: "white" }}
            onClick={() => {
              setopen((prev) => !prev);
            }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Box
            sx={{
              backgroundColor: "#284168",
              padding: "5px 10px",
              borderRadius: "5px",
              textTransform: "capitalize",
            }}
          >
            <InputBase
              sx={{ color: "white" }}
              placeholder="search..."
            ></InputBase>
            <IconButton sx={{ color: "white" }}>
              <Search></Search>
            </IconButton>
          </Box>
        </Box>
        {/*right--side*/}
        <Box sx={{ display: "flex" }}>
          <IconButton sx={{ color: "white" }}>
            <SettingsOutlined></SettingsOutlined>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
