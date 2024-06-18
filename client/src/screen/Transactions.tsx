import React from "react";
import Header from "../components/Header";
import {
  Box,
  InputLabel,
  FormControl,
  Pagination,
  MenuItem,
  Select,
} from "@mui/material";
import { useGettransacationsQuery } from "../slices/userapi";
import { useState } from "react";

import { GridColDef } from "@mui/x-data-grid";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

export default function Transactions() {
  const [page, setpage] = useState(1);
  const [pagesize, setpagesize] = useState(20);
  const [sort, setsort] = useState("");
  const [search, setsearch] = useState("");
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setpage(value);
  };
  function CustomToolbar() {
    return (
      <Box
        sx={{
          display: "flex",
          margingY: "10px",
          justifyContent: "space-between",
          padding: "10px 0px",
        }}
      >
        <GridToolbarContainer
          sx={{
            "& .MuiButtonBase-root": {
              color: "white",
            },
          }}
        >
          <GridToolbarColumnsButton />

          <GridToolbarDensitySelector
            slotProps={{ tooltip: { title: "Change density" } }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <GridToolbarExport
            slotProps={{
              tooltip: { title: "Export data" },
              button: { variant: "outlined" },
            }}
          />
        </GridToolbarContainer>
        <Box>
          <FormControl>
            <InputLabel
              sx={{ color: "white", "&. Mui-focused": { color: "white" } }}
              id="demo-simple-select-standard-label"
            >
              sort price
            </InputLabel>
            <Select
              sx={{
                color: "white",

                width: "150px",
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              onChange={(e) => setsort(e.target.value)}
            >
              <MenuItem value={"-cost"}>low to high</MenuItem>
              <MenuItem value={"cost"}>high to low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    );
  }

  const { data, isLoading } = useGettransacationsQuery({
    page,
    pagesize,
    sort,
    search,
  });

  const columns: GridColDef[] = [
    { field: "_id", headerName: "_id", minWidth: 300 },
    { field: "userId", headerName: "userId", width: 250 },
    {
      field: "cost",
      width: 250,
      headerName: " cost",

      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "products",
      minWidth: 150,
      headerName: "products",

      renderCell: (params: any) => params.value.length,
    },
    { field: "createdAt", headerName: " createdAt", minWidth: 350 },
  ];

  return (
    <Box>
      <Header
        title="transaction"
        subtitle="this is transaction section"
      ></Header>
      <Box
        sx={{
          marginTop: "20px",
          overflowX: "auto",
          backgroundColor: "#102C57",
          maxWidth: "100%",
        }}
      >
        <DataGrid
          slots={{
            toolbar: CustomToolbar,
          }}
          loading={isLoading}
          getRowId={(row: any) => row._id}
          rows={data?.all || []}
          columns={columns}
          sx={{
            "& .MuiDataGrid-footerContainer": {
              display: "none",
              backgroundColor: "#102C57",
            },
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

            color: "white",

            maxWidth: "95%",
            marginX: "auto",
          }}
        ></DataGrid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            color: "white",
            backgroundColor: "#284168",
            width: "95%",
            marginX: "auto",
            paddingY: "10px",
          }}
        >
          <Pagination
            sx={{
              color: "white",
              "& .MuiButtonBase-root": {
                color: "white",
              },
            }}
            count={data?.number}
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
