import PageHeader from "@/components/PageHeader";
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
} from "@mui/material";

const Financing = () => {
  return (
    <PageHeader title="Financing">
      <Box sx={{ margin: 2 }}>
        {/* Funding Opportunities (Grant Programs, Lenders, Equity Investors) */}
        <Typography variant="h6" gutterBottom>
          Funding Opportunities (Grant Programs, Lenders, Equity Investors)
        </Typography>

        {/* Funding Program Title and Capital Providers */}
        <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Funding Program Title (Click for description)
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Capital Providers
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Funding Available */}
        <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{ backgroundColor: "grey.700", color: "white" }}
                >
                  Funding Available
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Types of capital
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Link to Application
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Minimum
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Maximum
                </TableCell>
                <TableCell
                  sx={{ backgroundColor: "grey.700", color: "white" }}
                ></TableCell>
                <TableCell
                  sx={{ backgroundColor: "grey.700", color: "white" }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>$</TableCell>
                <TableCell>$</TableCell>
                <TableCell>Grant, Loan, Equity</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>$</TableCell>
                <TableCell>$</TableCell>
                <TableCell>Grant, Loan, Equity</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Eligibility */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Eligibility
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  URL of detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default Financing;
