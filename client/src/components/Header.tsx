import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import React from "react";
//"#102C57"//
export default function Header({ title, subtitle }) {
  return (
    <Box
      sx={{
        backgroundColor: "#102C57",
        color: "white",
        display: "flex",
        gap: "5px",
        paddingX: "20px",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "25px", lg: "30px" },
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: "15px", textTransform: "capitalize" }}>
        {subtitle}
      </Typography>
    </Box>
  );
}
