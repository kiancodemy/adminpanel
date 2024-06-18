import { Outlet } from "react-router-dom";
import Navbar from "../screen/Navbar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "./Sidebar";
import { useGetuserByIdQuery } from "../slices/userapi";
import { useSelector } from "react-redux";
import { RootState } from "../slices/store";
import { useState } from "react";

export default function Layout() {
  const notmobile = useMediaQuery("(min-width:600px)");

  ///use selector for getting id//

  const { id } = useSelector((state: RootState) => state.setter);

  ///query function for getting user by id
  const { data } = useGetuserByIdQuery(id);

  const [open, setopen] = useState(false);
  return (
    <Box sx={{ display: notmobile ? "flex" : "block" }}>
      {open && (
        <Sidebar data={data || {}} open={open} setopen={setopen}></Sidebar>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Navbar data={data || {}} setopen={setopen}></Navbar>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
