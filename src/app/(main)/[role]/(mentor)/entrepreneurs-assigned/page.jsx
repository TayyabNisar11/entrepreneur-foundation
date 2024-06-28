'use client'
import PageHeader from "@/components/PageHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const headers = [
  { label: "Entrepreneurs", colspan: 1 },
  { label: "Company (Click for profile)", colspan: 1 },
  { label: "Email", colspan: 1 },
];

const rows1 = [
  { entrepreneurs: "Entrepreneurs 1", company: "", email: "" },
  { entrepreneurs: "Entrepreneurs 2", company: "", email: "" },
];

const headers2 = [
  { label: "Assigning Organization (Click for Profile)", colspan: 1 },
  { label: "Plan to meet every", colspan: 1 },
];

const rows2 = [
  { organization: "", plan: "1 2 3 4 weeks 2 3 4 6 12 months" },
  { organization: "", plan: "1 2 3 4 weeks 2 3 4 6 12 months" },
];

const headers3 = [
  { label: "Entrepreneurs", colspan: 1 },
  { label: "Dashboard Links", colspan: 1 },
  { label: "Notes", colspan: 1 },
];

const rows3 = [
  {
    entrepreneurs: "Progress",
    dashboardLinks: <Link href="#">Next Steps</Link>,
    notes: "",
  },
  {
    entrepreneurs: "Progress",
    dashboardLinks: <Link href="#">Next Steps</Link>,
    notes: "",
  },
];

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  "& th": {
    color: "white",
    fontWeight: "bold",
  },
}));
const BorderedTableCell = styled(TableCell)({
  border: "1px solid black",
});

const EntrepreneurAssigned = () => {
  return (
    <PageHeader title="Entrepreneurs Assigned to you">
      <Box sx={{ p: 2 }}>
        <CustomTable headers={headers} rows={rows1} />
        <Box my={2}>
          <CustomTable headers={headers2} rows={rows2} />
        </Box>
        <CustomTable headers={headers3} rows={rows3} />
      </Box>
    </PageHeader>
  );
};

export default EntrepreneurAssigned;

const CustomTable = ({ headers, rows }) => (
  <TableContainer component={Paper}>
    <Table>
      <StyledTableHead>
        <TableRow>
          {headers.map((header, index) => (
            <BorderedTableCell key={index} colSpan={header.colspan}>
              {header.label}
            </BorderedTableCell>
          ))}
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {Object.keys(row).map((cell, cellIndex) => (
              <BorderedTableCell key={cellIndex}>{row[cell]}</BorderedTableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
