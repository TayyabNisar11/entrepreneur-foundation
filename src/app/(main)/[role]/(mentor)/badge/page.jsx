import PageHeader from "@/components/PageHeader";
import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const MentorBadge = () => {
  return (
    <PageHeader title="Badge">
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{ marginTop: 4 }}
      >
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Mentor Badge
        </Typography>
        <Avatar
          sx={{ width: 200, height: 200, bgcolor: "lightgrey", marginTop: 2 }}
        />
      </Box>
    </PageHeader>
  );
};

export default MentorBadge;
