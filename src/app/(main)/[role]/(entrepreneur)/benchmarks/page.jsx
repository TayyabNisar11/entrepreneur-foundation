"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import {
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";

const milestones = [
  "Concept Validated",
  "Elevator Pitch (problem and Solution)",
  "BMC OR Business plan with capital needs",
  "MVP Prototype in testing (Alpha Stage)",
  "Minimum Viable Product in Beta Testing",
  "Patent or Trademark applied for",
  "Branding: Company/ Product name, URL, Logo",
  "Registered with town",
  "Website Completed",
  "Pitch deck Completed",
  "Trial Launch Capital Raised",
  "Insurance Secured",
  "LLC or other Legal entity formed",
  "$50,000 in annualized sales",
  "$500,000 in annualized sales",
];

const BenchMarks = () => {
  const [milestoneData, setMilestoneData] = useState(
    milestones.map((milestone) => ({
      title: milestone,
      completed: false,
      confirmedDate: null,
    }))
  );

  const handleCheckboxChange = (index) => {
    const newMilestoneData = [...milestoneData];
    newMilestoneData[index].completed = !newMilestoneData[index].completed;
    setMilestoneData(newMilestoneData);
  };

  const handleDateChange = (index, date) => {
    const newMilestoneData = [...milestoneData];
    newMilestoneData[index].confirmedDate = date;
    setMilestoneData(newMilestoneData);
  };

  const handleUpdate = () => {
    // Handle update logic here
    console.log("Milestone data updated:", milestoneData);
  };
  return (
    <PageHeader title="BenchMarks">
      <Box p={3}>
        <Typography variant="h6" gutterBottom>
          Check if completed or not required
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Startup Milestones Achieved</TableCell>
                <TableCell align="center">Completed</TableCell>
                <TableCell align="center">Confirmed by Admin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {milestoneData.map((milestone, index) => (
                <TableRow key={index}>
                  <TableCell>{milestone.title}</TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={milestone.completed}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                    size="small"
                      type="date"
                      value={milestone.confirmedDate}
                      onChange={(event) => handleDateChange(index, event)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={3} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Box>
      </Box>
    </PageHeader>
  );
};

export default BenchMarks;
