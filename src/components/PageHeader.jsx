"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const PageHeader = ({ title, children }) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ padding: 2.5, backgroundColor: theme.palette.grey[300] }}>
        <Typography variant="h2" fontSize="16px" fontWeight={500}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ padding: 2.5 }}>{children}</Box>
    </>
  );
};

export default PageHeader;
