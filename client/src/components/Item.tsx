
export type items = {
  _id: string;
  name: string;
  price: Number;
  description: string;
  category: string;
  rating: Number;
  supply: Number;

  state: any;
};
import { useState } from "react";
import { Rating, Typography, Box } from "@mui/material";

export default function Item({
  _id,
  name,
  price,
  description,
  category,
  rating,
 

 
}: items) {
 
  return (
    <Box
      sx={{
        backgroundColor: "#284168",
        borderRadius: "5px",
        padding: "10px",

        display: "flex",

        flexDirection: "column",

        gap: "4px",
      }}
      key={_id}
      item
      xs={11}
      sm={3}
      md={1.8}
    >
      <Typography>{category}</Typography>
      <Typography>{name}</Typography>
      <Typography>
        $<span>{price}</span>
      </Typography>

      <Rating sx={{ marginY: "15px" }} value={rating} readOnly></Rating>
      <Typography sx={{ fontSize: "14px" }}>{description}</Typography>
    </Box>
  );
}
