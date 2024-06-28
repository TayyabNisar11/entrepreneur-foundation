"use client";
import PageHeader from '@/components/PageHeader'
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
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#4f4f4f",
  color: theme.palette.common.white,
  border: "1px solid #e0e0e0",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  border: "1px solid #e0e0e0",
}));
const initialRows = [
  {
    year: "2021",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2022",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2023",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2024",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2025",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2026",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2027",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2028",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2029",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
  {
    year: "2030",
    revenue: "",
    employees: "",
    design: "",
    provisional: "",
    fullPatents: "",
  },
];


const RevenueAndEmploymentPatent = () => {
  const [rows, setRows] = useState(initialRows);

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleUpdate = () => {
    // Handle update logic here
    console.log("Data updated:", rows);
  };
  return (
    <PageHeader title="Revenue, Employment and Patents">
      <Box p={3}>
        <Typography variant="h6" gutterBottom>
          Check if completed or not required
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell rowSpan={2}>Year</StyledTableCell>
                <StyledTableCell rowSpan={2}>Revenue</StyledTableCell>
                <StyledTableCell rowSpan={2}>
                  Employee (Including CEO)
                </StyledTableCell>
                <StyledTableCell colSpan={3} align="center">
                  Patents Received
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Design</StyledTableCell>
                <StyledTableCell>Provisional</StyledTableCell>
                <StyledTableCell>Full</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>
                    <TextField
                    size="small"
                      type="text"
                      placeholder="$ XX,XXX,XXX"
                      value={row.revenue}
                      onChange={(e) =>
                        handleInputChange(index, "revenue", e.target.value)
                      }
                      variant="outlined"
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                    size="small"
                      type="number"
                      placeholder="#"
                      value={row.employees}
                      onChange={(e) =>
                        handleInputChange(index, "employees", e.target.value)
                      }
                      variant="outlined"
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                    size="small"
                      type="number"
                      placeholder="#"
                      value={row.design}
                      onChange={(e) =>
                        handleInputChange(index, "design", e.target.value)
                      }
                      variant="outlined"
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                    size="small"
                      type="number"
                      placeholder="#"
                      value={row.provisional}
                      onChange={(e) =>
                        handleInputChange(index, "provisional", e.target.value)
                      }
                      variant="outlined"
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                    size="small"
                      type="number"
                      placeholder="#"
                      value={row.fullPatents}
                      onChange={(e) =>
                        handleInputChange(index, "fullPatents", e.target.value)
                      }
                      variant="outlined"
                      fullWidth
                    />
                  </TableCell>
                </StyledTableRow>
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
}

export default RevenueAndEmploymentPatent