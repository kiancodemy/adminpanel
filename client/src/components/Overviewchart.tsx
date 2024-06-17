import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useGetsalesQuery } from "../slices/userapi";
import { useMemo } from "react";
import { Box } from "@mui/material";
type chart = { view: string };
export default function Overviewchart({ view }: chart) {
  const { data, isLoading } = useGetsalesQuery("");

  const [data1, data2] = useMemo(() => {
    if (isLoading) {
      return "loading";
    }

    const { monthlyData } = data;
    let data1: any = [];

    let data2: any = [];

    Object.values(monthlyData).reduce(
      (acc: any, { month, totalSales, totalUnits }: any) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;

        data1 = [...data1, { x: month, y: curSales }];
        data2 = [...data2, { x: month, y: curUnits }];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );

    return [data1, data2];
  }, [data]);

  if (data1) {
    console.log(data1, data2);
  }
  const matches = useMediaQuery("(min-width:780px)");

  return (
    <Box>
      <LineChart
        margin={{ left: 20, top: 25, bottom: 20 }}
        width={matches ? 900 : 340}
        height={400}
        data={view === "sales" ? data1 : data2}
      >
        <Line type="monotone" dataKey="y" stroke="#fff" />
        <CartesianGrid stroke="#fff" />
        <XAxis stroke="#fff" dataKey="x" />
        <YAxis stroke="#fff" />
        <Tooltip />
      </LineChart>
    </Box>
  );
}
