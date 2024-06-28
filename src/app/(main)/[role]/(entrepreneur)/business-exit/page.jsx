"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
const initialData = {
  soldTo: { company: "", year: "" },
  mergedWith: { company: "", year: "" },
  changedNameTo: { company: "", year: "" },
  dissolvedOrAbandoned: { company: "", year: "" },
};
const Label = styled(Typography)({
  fontSize: "14px",
  fontWeight: 500,
});

const UpdateButton = styled(Button)({
  backgroundColor: "#4f4f4f",
  color: "#ffffff",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#3c3c3c",
  },
});

const BusinessExits = () => {
  const [data, setData] = useState(initialData);

  const handleChange = (field, subField, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        [subField]: value,
      },
    }));
  };

  const handleUpdate = () => {
    // Handle update logic here
    console.log("Data updated:", data);
  };
  return (
    <PageHeader title="Business Exit">
      <Box p={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Label mr={2}>Company was sold to</Label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={data.soldTo.company}
                onChange={(e) =>
                  handleChange("soldTo", "company", e.target.value)
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Label mr={2}>Year</Label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={data.soldTo.year}
                onChange={(e) => handleChange("soldTo", "year", e.target.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Label mr={2}>Company merged with</Label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={data.mergedWith.company}
                onChange={(e) =>
                  handleChange("mergedWith", "company", e.target.value)
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Label mr={2}>Year</Label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={data.mergedWith.year}
                onChange={(e) =>
                  handleChange("mergedWith", "year", e.target.value)
                }
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Label mr={2}>Company changed name to</Label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={data.changedNameTo.company}
                onChange={(e) =>
                  handleChange("changedNameTo", "company", e.target.value)
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Label mr={2}>Year</Label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={data.changedNameTo.year}
                onChange={(e) =>
                  handleChange("changedNameTo", "year", e.target.value)
                }
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Label mr={2}>Company has been dissolved or abandoned</Label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={data.dissolvedOrAbandoned.company}
                onChange={(e) =>
                  handleChange(
                    "dissolvedOrAbandoned",
                    "company",
                    e.target.value
                  )
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Label mr={2}>Year</Label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={data.dissolvedOrAbandoned.year}
                onChange={(e) =>
                  handleChange("dissolvedOrAbandoned", "year", e.target.value)
                }
              />
            </Box>
          </Grid>
        </Grid>
        <Box mt={3} display="flex" justifyContent="center">
          <UpdateButton variant="contained" onClick={handleUpdate}>
            Update
          </UpdateButton>
        </Box>
      </Box>
    </PageHeader>
  );
};

export default BusinessExits;
