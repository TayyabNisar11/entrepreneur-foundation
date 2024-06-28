import PageHeader from '@/components/PageHeader'
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
  Typography,
  Link,
} from "@mui/material";

const data = [
  {
    industry: "Accounting Services",
    specialization: "Audit",
    companies: ["Company 1"],
    website: "#",
  },
  { industry: "", specialization: "", companies: ["Company 2"], website: "#" },
  { industry: "", specialization: "", companies: ["Company 3"], website: "#" },
  {
    industry: "",
    specialization: "Bookkeeping",
    companies: ["Company 1"],
    website: "#",
  },
  {
    industry: "",
    specialization: "Corporate Finance",
    companies: [],
    website: "#",
  },
  { industry: "", specialization: "Tax services", companies: [], website: "#" },
  {
    industry: "Consulting Services",
    specialization: "Business Plan Preparation",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Business Valuation",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Management Consulting",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Succession Management",
    companies: [],
    website: "#",
  },
  {
    industry: "Financial Services",
    specialization: "Cash Manager",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Grant Provider",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Commercial Banker",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Commercial Lender",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Government (public) Lender",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Equity Investor- Angel Club",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Equity Investor-VC Fund",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Capital Raiser for funds",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Investment Banker",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Merchant Banker",
    companies: [],
    website: "#",
  },
  {
    industry: "",
    specialization: "Mergers & Acquisitions",
    companies: [],
    website: "#",
  },
];
const renderCompanies = (companies, website) => {
  if (companies.length === 0) return "#";

  return companies.map((company, index) => (
    <div key={index}>
      {company}{" "}
      <Link href={website} target="_blank">
        (Click to visit)
      </Link>
    </div>
  ));
};
const BusinessService = () => {
  return (
    <PageHeader title="Business Service Providers">
      <Box sx={{ margin: 2 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Primary Service Industry
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Specialization
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Companies
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Website (Click to visit)
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
                  <TableCell>
                    {renderCompanies(row.companies, row.website)}
                  </TableCell>
                  <TableCell>
                    {row.companies.length === 0 ? (
                      "#"
                    ) : (
                      <Link href={row.website} target="_blank" rel="noopener">
                        {row.website}
                      </Link>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
}

export default BusinessService