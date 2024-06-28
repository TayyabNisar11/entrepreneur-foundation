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
  Select,
  MenuItem,
} from "@mui/material";

const fundTypes = ["Grant", "Loan", "Equity", "Crowdfunding", "Other"];

const initialRows = [
  { year: "", month: "", amount: "", type: "", source: "" },
  { year: "", month: "", amount: "", type: "", source: "" },
];


const CaptialRaised = () => {
   const [rows, setRows] = useState(initialRows);

   const handleInputChange = (index, field, value) => {
     const newRow = [...rows];
     newRow[index][field] = value;
     setRows(newRow);
   };

   const handleUpdate = () => {
     // Handle update logic here
     console.log("Funding data updated:", rows);
   };
  return (
    <PageHeader title="Capital Raised">
      <Box p={3}>
        <Typography variant="h6" gutterBottom>
          Check if completed or not required
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell>Month</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Source</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      size="small"
                      type="text"
                      value={row.year}
                      onChange={(e) =>
                        handleInputChange(index, "year", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      type="text"
                      value={row.month}
                      onChange={(e) =>
                        handleInputChange(index, "month", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      type="number"
                      value={row.amount}
                      onChange={(e) =>
                        handleInputChange(index, "amount", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Select
                      size="small"
                      value={row.type}
                      onChange={(e) =>
                        handleInputChange(index, "type", e.target.value)
                      }
                      displayEmpty
                      fullWidth
                    >
                      <MenuItem value="" disabled>
                        Select Type
                      </MenuItem>
                      {fundTypes.map((type, typeIndex) => (
                        <MenuItem key={typeIndex} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      type="text"
                      value={row.source}
                      onChange={(e) =>
                        handleInputChange(index, "source", e.target.value)
                      }
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
}

export default CaptialRaised