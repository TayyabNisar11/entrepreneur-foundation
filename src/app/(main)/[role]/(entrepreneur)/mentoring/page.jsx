"use client";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import PageHeader from "@/components/PageHeader";
import { InputLabel, Select, MenuItem } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const MentoringPage = () => {
  const [selectedValue, setSelectedValue] = useState("Google");
  const [details, setDetails] = useState("");
  const maxChars = 200;

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectedSkill, setSelectedSkill] = useState("");

  return (
    <PageHeader title="Mentoring">
      <Box sx={{ padding: 3 }}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">
            Add appointments to my calendar:
          </FormLabel>
          <RadioGroup
            aria-label="calendar"
            name="calendar"
            value={selectedValue}
            onChange={handleChange}
          >
            <Grid container spacing={2}>
              {["Google", "Yahoo", "Apple", "Outlook"].map((option) => (
                <Grid item xs={12} sm={6} md={3} key={option}>
                  <Paper
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: 2,
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      width: "100%",
                    }}
                  >
                    <FormControlLabel
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Request A Mentor
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Select the skills you want help with.
        </Typography>

        <FormControl fullWidth variant="outlined">
          <InputLabel id="skills-label">Select Skill</InputLabel>
          <Select
            labelId="skills-label"
            id="skills-select"
            value={selectedSkill}
            onChange={handleChange}
            label="Select Skill"
            MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
          >
            {[
              "Accounting",
              "Business Plan preparation",
              "Exporting",
              "Financing startup",
              "Financing Growth",
              "General Management",
              "Human Resources",
              "Information Technology",
              "Licensing",
              "Marketing",
            ].map((skill) => (
              <MenuItem key={skill} value={skill}>
                {skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ padding: 3 }}>
        <Typography variant="caption" display="block" gutterBottom>
          Others (Enter details below)
        </Typography>

        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          // value={details}
          onChange={handleChange}
          placeholder="Enter additional details"
          helperText={`Limit ${maxChars} characters and spaces. ${
            maxChars - details.length
          } remaining`}
          inputProps={{ maxLength: maxChars }}
          sx={{
            marginBottom: 2,
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#4D4D4D" }}
          >
            Submit Mentoring Request
          </Button>
        </Box>
      </Box>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Mentors and Advisers Assigned
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>LinkedIn</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Assigned By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" gutterBottom>
          Meetings Scheduled with Mentors
        </Typography>
        <Typography variant="body2" gutterBottom>
          If your Mentors add a meeting to their dashboard, the date, time and
          location will appear below.
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Purpose of Meeting</TableCell>
                <TableCell>Cancel Meeting</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>4-10-24</TableCell>
                  <TableCell>10:00AM</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="caption" display="block" gutterBottom>
          Note: {"Canceling"}will send an email alert to your Mentor
        </Typography>

        <Box>
          <Typography variant="h6" gutterBottom>
            Next Steps
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox checked disabled />
                  </TableCell>
                  <TableCell>Actionable Items for Business</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {["4-10-24", "4-10-24"].map((date, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>{date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "#4D4D4D" }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          KPI (Key Performance Indicators)
        </Typography>
        <Typography variant="body2" gutterBottom>
          Devise a few measurements so you and your mentor know if you’re on the
          right path (e.g. - site visits)
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell>Month</TableCell>
                <TableCell>Revenue</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2024</TableCell>
                <TableCell>April</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#4D4D4D" }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </PageHeader>
  );
};

export default MentoringPage;
