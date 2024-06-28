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
  Link,
} from "@mui/material";

const data = [
  { industry: "Accounting Services", specialization: "Audit" },
  { industry: "Accounting Services", specialization: "Corporate Finance" },
  { industry: "Accounting Services", specialization: "Tax Services" },
  {
    industry: "Consulting Services",
    specialization: "Business Plan Preparation",
  },
  { industry: "Consulting Services", specialization: "Business Valuation" },
  { industry: "Consulting Services", specialization: "Management Consulting" },
  { industry: "Consulting Services", specialization: "Succession Management" },
  { industry: "Financial Services", specialization: "Cash Management" },
  { industry: "Financial Services", specialization: "Commercial Management" },
];

const EntrepreneurInvestorService = () => {
  return (
    <PageHeader title="Entrepreneur and Investor  service we provide">
      <Box>
        <Typography variant="body1" gutterBottom>
          Use ctrl-click to select multiple “Specializations” offered by your
          firm.
          <br />
          Click again to deselect
          <br />
          If your Industry or Specialization is not listed, contact the{" "}
          <Link href="#" underline="hover">
            System Administrator
          </Link>
          .
        </Typography>
        <TableContainer sx={{mt:3}} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Primary Service Industry
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Specialization
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: row.industry ? 600 : 400 }}>
                    {row.industry}
                  </TableCell>
                  <TableCell>{row.specialization}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default EntrepreneurInvestorService;
