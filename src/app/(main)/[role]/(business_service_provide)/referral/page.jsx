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
  Button,
} from "@mui/material";
const Referral = () => {
  return (
    <PageHeader title="Refer an Entrepreneur to an organization for mentoring">
      <Box sx={{ margin: 2 }}>
        {/* Entrepreneur Information Table */}
        <TableContainer
          component={Paper}
          sx={{
            marginBottom: 2,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "grey.400",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Entrepreneur Name
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Entrepreneur Email
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Include Snapshot of Company Profile
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Organizations in Ecosystem Table */}
        <TableContainer
          component={Paper}
          sx={{ borderWidth: 1, borderStyle: "solid", borderColor: "grey.400" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  rowSpan={2}
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Organizations in Ecosystem (Click for Profile)
                </TableCell>
                <TableCell
                  colSpan={2}
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Organization Admin
                </TableCell>
                <TableCell
                  rowSpan={2}
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Reason for Referral
                </TableCell>
                <TableCell
                  rowSpan={2}
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Send
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>
                  <Button variant="contained" color="secondary">
                    Send
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>
                  <Button variant="contained" color="secondary">
                    Send
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default Referral;
