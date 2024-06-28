import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";

const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const EcosystemStatisticalProgress = () => {
  return (
    <PageHeader title="Ecosystem Statistical Progress">
      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Year
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Member NGOs
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Entrepreneur Members
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Legal entities formed
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Employees (Including CEOs)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  $50,000 revenue
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  $500,000 revenue
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Total revenues (000s)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Patents received
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Capital raised (000s)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Exits
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {years.map((year) => (
                <TableRow key={year}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {year}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>$</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>$</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default EcosystemStatisticalProgress;
