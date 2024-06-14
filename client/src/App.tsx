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
