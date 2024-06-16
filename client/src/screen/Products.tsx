import { useGetproductsQuery } from "../slices/userapi";
import React, { useState } from "react";
import { items } from "../components/Item";
import Item from "../components/Item";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import { Repeat } from "@mui/icons-material";
export default function Products() {
  ///query function
  const { data, isLoading } = useGetproductsQuery("");
 
  ///all of products
 
  return (
    <Box>
      <Header title="products" subtitle="this is the list of products"></Header>
      {data && !isLoading ? (
        <Box
          sx={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1,100%)",
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
            },
            rowGap: "10px",
            paddingX: "10px",
            backgroundColor: "#102C57",
            justifyContent: "space-between",

            color: "white",
          }}
          container
          spacing={1}
          gap={1}
        >
          {data.map(
            ({
              _id,
              name,
              price,
              description,
              category,
              rating,
              supply,

              state,
            }: items) => {
              return (
                <Item
                  _id={_id}
                  name={name}
                  price={price}
                  description={description}
                  category={category}
                  rating={rating}
                  supply={supply}
                  state={state}
                ></Item>
              );
            }
          )}
        </Box>
      ) : (
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: "30px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          it is loading .....
        </Typography>
      )}
    </Box>
  );
}
