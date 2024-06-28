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
  Typography,
} from "@mui/material";

const FundingOpportunity = () => {
  return (
    <PageHeader title="Funding Opportunities (Grant programs, Lenders, Equity Investors)">
      <Box sx={{ padding: 2 }}>
        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Funding Program Title (Click for description)
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Capital Providers
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={2}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Funding Available
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={1}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Entry Deadline
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={1}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Link of Application
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "lightgrey",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Minimum
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "lightgrey",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Maximum
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "lightgrey",
                    color: "black",
                    fontWeight: "bold",
                  }}
                ></TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "lightgrey",
                    color: "black",
                    fontWeight: "bold",
                  }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    size="small"
                    fullWidth
                    InputProps={{ startAdornment: "$" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    fullWidth
                    InputProps={{ startAdornment: "$" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={1}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Eligibility
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={1}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  URL of detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Funding Program Title (Click for description)
                </TableCell>
                <TableCell
                  align="center"
                  
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Managing Organization
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >
                  <TextField size="small" fullWidth />
                </TableCell>
                <TableCell >
                  <TextField size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default FundingOpportunity;
