"use client";
import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./sidebar";

const drawerWidth = 300;

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar role="entrepreneur" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
          overflowY: "auto",
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
