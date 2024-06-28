import PageHeader from '@/components/PageHeader'
import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const TalentDirectory = () => {
  return (
    <PageHeader title="Talent Directory">
      <Box sx={{ margin: 2 }}>
        {/* Select Skills Section */}
        <Typography variant="h6" gutterBottom>
          Select skills{" "}
          <Typography
            variant="body2"
            component="span"
            sx={{ fontStyle: "italic" }}
          >
            (Use ctrl-click to select multiple)
          </Typography>
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
          <Table>
            <TableBody>
              {[
                "Accounting",
                "Administrative",
                "Bioscience",
                "Communication",
                "Consumer service",
                "General Management",
              ].map((skill, index) => (
                <TableRow key={index}>
                  <TableCell>{skill}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Available Talent */}
        <Typography variant="h6" gutterBottom>
          Available Talent
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "First",
                  "Last",
                  "LinkedIn Link",
                  "Email",
                  "Phone",
                  "City",
                  "ST",
                  "Education Highest Grade",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {Array(8)
                  .fill("#")
                  .map((content, index) => (
                    <TableCell key={index}>{content}</TableCell>
                  ))}
              </TableRow>
              <TableRow>
                {Array(8)
                  .fill("#")
                  .map((content, index) => (
                    <TableCell key={index}>{content}</TableCell>
                  ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Talent Details */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "School",
                  "Last year attended",
                  "Minimum hourly Rate",
                  "Frequency",
                  "Duration",
                  "U.S Citizen",
                  "Comments",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array(2)
                .fill(0)
                .map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>#</TableCell>
                    <TableCell>#</TableCell>
                    <TableCell>#</TableCell>
                    <TableCell>
                      <FormControlLabel control={<Checkbox />} label="p/t" />
                      <FormControlLabel control={<Checkbox />} label="f/t" />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Permanent"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Temporary"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel control={<Checkbox />} label="Yes" />
                      <FormControlLabel control={<Checkbox />} label="No" />
                    </TableCell>
                    <TableCell>#</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
}

export default TalentDirectory