import React from "react";
import { useGetcustomersQuery } from "../slices/userapi";

import { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import Header from "../components/Header";

const columns: GridColDef[] = [
  { field: "_id", headerName: "_id", flex: 1 },
  { field: "name", headerName: "name", flex: 0.5 },
  { field: "email", headerName: " email", flex: 1 },
  { field: "country", headerName: "country", flex: 0.4 },
  { field: "occupation", headerName: " occupation", flex: 1 },
  { field: "phoneNumber", headerName: "phoneNumber", flex: 0.5 },
  { field: "role", headerName: " role", flex: 0.5 },
];

export default function Cuatomers() {
  const { data: info, isLoading } = useGetcustomersQuery("");

  return (
    <Box>
      <Header title="customers" subtitle="list of customers"></Header>

      <Box
        sx={{
          marginTop: "20px",

          height: "80vh",
          width: "100%",
        }}
      >
        <DataGrid
          sx={{
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#102C57",
              color: "white",
            },
            "& .MuiDataGrid-row , & .Mui-selected": {
              border: "none",
              backgroundColor: "#284168",
            },
            "& .MuiDataGrid-cell ": {
              border: "none",
            },
            "& .MuiToolbar-root": {
              color: "white",
              border: "none",
            },
            "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {},
            color: "white",

            maxWidth: "95%",
            marginX: "auto",
          }}
          getRowId={(row: any) => row._id}
          rows={info || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
