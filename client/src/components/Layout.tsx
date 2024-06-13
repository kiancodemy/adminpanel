import { Outlet } from "react-router-dom";
import Navbar from "../screen/Navbar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Layout() {
  const notmobile = useMediaQuery("(min-width:600px)");
  const [open, setopen] = useState(false);
  return (
    <Box sx={{ display: notmobile ? "flex" : "block" }}>
      {notmobile && open && <Sidebar open={open} setopen={setopen}></Sidebar>}
      <Box sx={{ flexGrow: 1 }}>
        <Navbar setopen={setopen}></Navbar>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
