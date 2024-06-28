import PageHeader from "@/components/PageHeader";
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const sections = [
  [
    { title: "Problem", height: 300 },
    { title: "Existing Alternatives", height: 100 },
  ],
  [
    { title: "Solution", height: 200 },
    { title: "Key Metrics", height: 200 },
  ],
  [{ title: "Unique Value Proposition", height: 400 }],
  [
    { title: "Unfair Advantage", height: 200 },
    { title: "Channels", height: 200 },
  ],
  [
    { title: "Customer Segment", height: 300 },
    { title: "Early Adopters", height: 100 },
  ],
  [
    { title: "Cost Structure", height: 100, fullWidth: true },
    { title: "Revenue Streams", height: 100, fullWidth: true },
  ],
];
const BusinessModelConvas = () => {
  return (
    <PageHeader title="Business Model Canvases">
      <Box>
        <Typography variant="h6" gutterBottom>
          Personal Business Startup BMC
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lean Venture Startup BMC (by Ash Maurya)
        </Typography>

        <Grid container spacing={2}>
          {sections.slice(0, 5).map((column, colIndex) => (
            <Grid item xs={12} sm={6} md={2.4} key={colIndex}>
              {column.map((section, secIndex) => (
                <Paper
                  key={secIndex}
                  sx={{
                    padding: 2,
                    minHeight: section.height,
                    backgroundColor: "#f0f0f0",
                    textAlign: "center",
                    boxShadow: 0,
                    border: "1px solid #e0e0e0",
                    marginTop: secIndex > 0 ? 2 : 0,
                  }}
                >
                  <Typography variant="subtitle2">{section.title}</Typography>
                </Paper>
              ))}
            </Grid>
          ))}

          {sections[5].map((section, secIndex) => (
            <Grid item xs={12} md={6} key={secIndex}>
              <Paper
                sx={{
                  padding: 2,
                  minHeight: section.height,
                  backgroundColor: "#f0f0f0",
                  textAlign: "center",
                  boxShadow: 0,
                  border: "1px solid #e0e0e0",
                  marginTop: 2,
                }}
              >
                <Typography variant="subtitle2">{section.title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Growth BMC (Osterwalder version)
        </Typography>

        <Grid container spacing={2}>
          {sections.slice(0, 5).map((column, colIndex) => (
            <Grid item xs={12} sm={6} md={2.4} key={colIndex}>
              {column.map((section, secIndex) => (
                <Paper
                  key={secIndex}
                  sx={{
                    padding: 2,
                    minHeight: section.height,
                    backgroundColor: "#f0f0f0",
                    textAlign: "center",
                    boxShadow: 0,
                    border: "1px solid #e0e0e0",
                    marginTop: secIndex > 0 ? 2 : 0,
                  }}
                >
                  <Typography variant="subtitle2">{section.title}</Typography>
                </Paper>
              ))}
            </Grid>
          ))}

          {sections[5].map((section, secIndex) => (
            <Grid item xs={12} md={6} key={secIndex}>
              <Paper
                sx={{
                  padding: 2,
                  minHeight: section.height,
                  backgroundColor: "#f0f0f0",
                  textAlign: "center",
                  boxShadow: 0,
                  border: "1px solid #e0e0e0",
                  marginTop: 2,
                }}
              >
                <Typography variant="subtitle2">{section.title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageHeader>
  );
};

export default BusinessModelConvas;
