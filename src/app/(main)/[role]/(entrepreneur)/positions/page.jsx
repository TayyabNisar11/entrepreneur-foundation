"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
  Typography,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PageHeader from "@/components/PageHeader";

const AddPosition = () => {
  // State for handling positions
  const [positions, setPositions] = useState([]);
  const [positionDetails, setPositionDetails] = useState({
    Category: "",
    EmploymentType: "",
    Description: "",
    HoursWeeks: "",
  });

  // State for handling companies
  const [companies, setCompanies] = useState([
    {
      companyName: "Tesla Academy",
      yearFounded: "2004",
      changedNameTo: "",
      yearChanged: "",
      currentStatus: "Active",
    },
    {
      companyName: "Tesla Academy",
      yearFounded: "2004",
      changedNameTo: "",
      yearChanged: "",
      currentStatus: "Active",
    },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPositionDetails({
      ...positionDetails,
      [name]: value,
    });
  };

  const handleStatusChange = (index, event) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].currentStatus = event.target.value;
    setCompanies(updatedCompanies);
  };

  const handleAddPosition = () => {
    setPositions([...positions, positionDetails]);
    setPositionDetails({
      Category: "",
      EmploymentType: "",
      Description: "",
      HoursWeeks: "",
    });
  };

  const handleDeletePosition = (index) => {
    setPositions(positions.filter((_, i) => i !== index));
  };

  const fields = [
    { name: "Category", label: "Category" },
    { name: "EmploymentType", label: "Employment Type" },
    { name: "Description", label: "Description" },
    { name: "HoursWeeks", label: "Hours/Weeks" },
  ];

  return (
    <PageHeader title="Position we need to fill">
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          Add a position
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow sx={{ backgroundColor: "grey.800", color: "white" }}>
                {fields.map((field) => (
                  <TableCell key={field.name} sx={{ color: "white" }}>
                    {field.label}
                  </TableCell>
                ))}
                <TableCell sx={{ color: "white" }}>Manage</TableCell>
              </TableRow>
              <TableRow>
                {fields.map((field) => (
                  <TableCell key={field.name}>
                    <TextField
                      fullWidth
                      size="small"
                      name={field.name}
                      value={positionDetails[field.name]}
                      onChange={handleChange}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddPosition}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Current Open Position
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow sx={{ backgroundColor: "grey.800", color: "white" }}>
                {fields.map((field) => (
                  <TableCell key={field.name} sx={{ color: "white" }}>
                    {field.label}
                  </TableCell>
                ))}
                <TableCell sx={{ color: "white" }}>Manage</TableCell>
              </TableRow>
              {positions.map((position, index) => (
                <TableRow key={index}>
                  {fields.map((field) => (
                    <TableCell key={field.name}>
                      {position[field.name]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeletePosition(index)}
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

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          All companies you have founded
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow sx={{ backgroundColor: "grey.800", color: "white" }}>
                {[
                  "Company Name",
                  "Year Founded",
                  "Changed name to",
                  "Year Changed",
                  "Current Status",
                ].map((label) => (
                  <TableCell key={label} sx={{ color: "white" }}>
                    {label}
                  </TableCell>
                ))}
              </TableRow>
              {companies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell>{company.companyName}</TableCell>
                  <TableCell>{company.yearFounded}</TableCell>
                  <TableCell>{company.changedNameTo || "----"}</TableCell>
                  <TableCell>{company.yearChanged || "----"}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <FormControl fullWidth size="small" sx={{ mr: 2 }}>
                        <Select
                          value={company.currentStatus}
                          onChange={(event) => handleStatusChange(index, event)}
                        >
                          <MenuItem value="Active">Active</MenuItem>
                          <MenuItem value="Sold">Sold</MenuItem>
                          <MenuItem value="Merged">Merged</MenuItem>
                          <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                      </FormControl>
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                    </Box>
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

export default AddPosition;
