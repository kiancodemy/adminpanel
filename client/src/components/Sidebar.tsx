import React from "react";
import profile from "../assets/profile.jpeg";
export type set = {
  open: Boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Sidebar({ open, setopen, data }: set) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setactive] = useState<string>("");

  const navItems: any = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Geography",
      icon: <PublicOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      text: "Daily",
      icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];

  useEffect(() => {
    setactive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box sx={{ width: "250px", backgroundColor: "#102C57" }}>
      <Drawer
        sx={{
          backgroundColor: "#102C57",
          color: "white",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "250px",
          },
        }}
        variant="persistent"
        open={open}
        onClose={() => setopen(false)}
      >
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            padding: "20px 0px",
            backgroundColor: "#102C57",
          }}
        >
          Welcome
        </Typography>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#FFC700",

            padding: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <HomeOutlined></HomeOutlined>
          <Typography>Dashboard</Typography>
          <IconButton onClick={() => setopen(false)}>
            <ChevronRightOutlined></ChevronRightOutlined>
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ backgroundColor: "#102C57", color: "white" }}>
          {navItems.map((text: any, index: number) => (
            <ListItem
              sx={{ backgroundColor: active === text.text ? "#FFC700" : "" }}
              onClick={() => {
                navigate(`/${text.text}`);
                setopen(false);
              }}
              key={text}
              disablePadding
            >
              <ListItemButton>
                {text.icon && (
                  <ListItemIcon sx={{ color: "white" }}>
                    {text.icon}
                  </ListItemIcon>
                )}
                <ListItemText primary={text.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            backgroundColor: "#102C57",
            display: "flex",
            paddingY: "30px",
            paddingX: "20px",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Avatar
            sx={{ objectFit: "cover", height: 40, width: 40 }}
            alt="Remy Sharp"
            src={profile}
          ></Avatar>
          <Box
            sx={{
              display: "flex",
              color: "white",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {data.name}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{data.occupation}</Typography>
          </Box>
          <IconButton sx={{ color: "white" }}>
            <SettingsOutlined sx={{ fontSize: "20px" }}></SettingsOutlined>
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
}
