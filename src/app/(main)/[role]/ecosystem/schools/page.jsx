'use client'
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const initialSchools = [
  "Albertus Magnus College",
  "Asnuntuck Community College",
  "Capital Community College",
  "Central Connecticut State University (CCSU)",
  "Coast Guard Academy",
];

const EcosystemSchools = () => {
  const [schools, setSchools] = useState(initialSchools);
  const [newSchool, setNewSchool] = useState("");

  const handleAddSchool = () => {
    if (newSchool.trim() !== "") {
      setSchools([...schools, newSchool]);
      setNewSchool("");
    }
  };

  const handleDeleteSchool = (schoolToDelete) => {
    setSchools(schools.filter((school) => school !== schoolToDelete));
  };

  const handleNewSchoolChange = (event) => {
    setNewSchool(event.target.value);
  };
  return (
    <PageHeader title="Schools In Ecosystem">
      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add a school
        </Typography>

        <Box display="flex" alignItems="center" mb={4}>
          <TextField
            label="School Name"
            variant="outlined"
            size="small"
            value={newSchool}
            onChange={handleNewSchoolChange}
            sx={{ mr: 2, flexGrow: 1 }}
          />
          <Button variant="contained" onClick={handleAddSchool}>
            Add
          </Button>
        </Box>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Manage School Table
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableBody>
              {schools.map((school, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {school}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }} align="right">
                    <Button
                      variant="text"
                      color="error"
                      onClick={() => handleDeleteSchool(school)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default EcosystemSchools;
