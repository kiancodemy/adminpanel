import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { Box } from "@mui/material";
import Products from "./screen/Products";
import Dashboard from "./screen/Dashboard";
import Cuatomers from "./screen/Cuatomers";
export default function App() {
  return (
    <Box sx={{ backgroundColor: "#102C57", minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace={true} />}
            ></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/Products" element={<Products></Products>}></Route>
            <Route path="/Customers" element={<Cuatomers></Cuatomers>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
