import { Box, FormControl, MenuItem, Select } from "@mui/material";
import Header from "../components/Header";
import { useState } from "react";
import Overviewchart from "../components/Overviewchart";

export default function Overview() {
  const [view, setview] = useState("unit");
  return (
    <Box sx={{ margingY: "20px" }}>
      <Header title="overview" subtitle="this is overview section"></Header>
      <Box sx={{ marginTop: "10px" }}>
        <FormControl
          sx={{
            marginTop: "10px",
            width: 150,
          }}
        >
          <Select
            sx={{
              color: "white",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
            value={view}
            onChange={(e) => setview(e.target.value)}
          >
            <MenuItem value="sales">sales</MenuItem>
            <MenuItem value="unit">unit</MenuItem>
          </Select>
        </FormControl>
        <Overviewchart view={view}></Overviewchart>
      </Box>
    </Box>
  );
}
