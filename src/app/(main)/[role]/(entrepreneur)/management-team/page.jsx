"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
} from "@mui/material";
import PageHeader from "@/components/PageHeader";

const ManagementTeamDetails = () => {
  const teamMember = {
    position: "CMO",
    details: {
      Name: "Adekeye Olaoluwa",
      Experience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      Email: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      Cell: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      Grade: "7 8 9 10 11 12 College 13 14 15 16 17 (Grad student)",
      School: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      Graduated: "YYYY (Year graduated or expect to graduate)",
    },
  };

  const [values, setValues] = useState({
    Position: "",
    Name: "",
    Experience: "",
    Email: "",
    Cell: "",
    Grade: "",
    School: "",
    Graduated: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAddMember = () => {
    console.log("Member added:", values);
  };

  const fields = [
    "Position",
    "Name",
    "Experience",
    "Email",
    "Cell",
    "Grade",
    "School",
    "Graduated",
  ];

  return (
    <PageHeader title="Management Team">
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow sx={{ backgroundColor: "grey.800", color: "white" }}>
                <TableCell component="th" scope="row" sx={{ color: "white" }}>
                  Position
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  {teamMember.position}
                </TableCell>
              </TableRow>
              {Object.entries(teamMember.details).map(([key, value], index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {key}
                  </TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add more Team Members
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {fields.map((field) => (
                <TableRow key={field}>
                  <TableCell component="th" scope="row">
                    {field}
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      name={field}
                      value={values[field]}
                      onChange={handleChange}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleAddMember}>
            Add Member
          </Button>
        </Box>
      </Box>
    </PageHeader>
  );
};

export default ManagementTeamDetails;
