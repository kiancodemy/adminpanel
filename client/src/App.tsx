/* const currentmode = useSelector((state: RootState) => state.setter.mode);
  const theme = useMemo(() => themeSettings(currentmode), [currentmode]);*/
/*<ThemeProvider theme={theme}>
  <CssBaseline />{" "}
</ThemeProvider>;*/
/*import { themeSettings } from "./theme";
import { RootState } from "slices/store";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo } from "react";*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./screen/Dashboard";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace={true} />}
            ></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
