import PageHeader from '@/components/PageHeader'
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const primaryServiceCategories = [
  "Accounting Services",
  "Consulting Services",
  "Financial Services",
  "Human Resources",
  "Insurance",
  "IT Services",
  "Legal Services",
  "Marketing",
  "Office Equipment, Supplies",
  "Printing Services",
  "Production",
  "Real Estate",
];
const data = [
  {
    category: "Accounting Services",
    specializations: [
      "Audit",
      "Bookkeeping",
      "Corporate Finance",
      "Tax services",
    ],
  },
  {
    category: "Consulting Services",
    specializations: [
      "Business Plan Preparation",
      "Business Valuation",
      "Management Consulting",
      "Succession Management",
    ],
  },
  {
    category: "Financial Services",
    specializations: [
      "Cash Manager",
      "Grant Provider",
      "Commercial Banker",
      "Commercial Lender",
      "Government (public) Lender",
      "Equity Investor- Angel Club",
      "Equity Investor- VC Fund",
      "Capital Raiser for funds",
      "Investment Banker",
      "Merchant Banker",
      "Mergers & Acquisitions",
      "Payroll Service",
    ],
  },
];
const serviceProviders = [
  {
    category: "Accounting Services",
    specializations: [
      { name: "Audit", companies: ["Company 1", "Company 2", "Company 3"] },
      { name: "Bookkeeping", companies: ["Company 1"] },
      { name: "Corporate Finance", companies: [] },
      { name: "Tax services", companies: [] },
    ],
  },
  {
    category: "Consulting Services",
    specializations: [
      { name: "Business Plan Preparation", companies: [] },
      { name: "Business Valuation", companies: [] },
      { name: "Management Consulting", companies: [] },
      { name: "Succession Management", companies: [] },
    ],
  },
  {
    category: "Financial Services",
    specializations: [
      { name: "Cash Manager", companies: [] },
      { name: "Grant Provider", companies: [] },
      { name: "Commercial Banker", companies: [] },
      { name: "Commercial Lender", companies: [] },
      { name: "Government (public) Lender", companies: [] },
      { name: "Equity Investor- Angel Club", companies: [] },
      { name: "Equity Investor- VC Fund", companies: [] },
      { name: "Capital Raiser for funds", companies: [] },
      { name: "Investment Banker", companies: [] },
      { name: "Merchant Banker", companies: [] },
      { name: "Mergers & Acquisitions", companies: [] },
      { name: "Payroll Service", companies: [] },
    ],
  },
];

const BusinessProviders = () => {
  return (
    <PageHeader title="Manage Business Service Providers">
      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add a primary service Industry Category
        </Typography>

        <Box display="flex" alignItems="center" mb={4}>
          <TextField
            label="Primary Service Industry Category"
            variant="outlined"
            size="small"
            sx={{ mr: 2, flexGrow: 1 }}
          />
          <Button variant="contained">Add</Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>
                  Primary Service Industry Category
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>New Specialization</TableCell>
                <TableCell sx={{ color: "#fff" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {primaryServiceCategories.map((category, index) => (
                <TableRow key={index}>
                  <TableCell>{category}</TableCell>
                  <TableCell>#</TableCell>

                  <TableCell>
                    <Button variant="contained" size="small">
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Manage Primary Industry Category and specialization Titles
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>
                  Primary Service Industry
                </TableCell>
                <TableCell sx={{ color: "#fff" }}></TableCell>
                <TableCell sx={{ color: "#fff" }}>Specialization</TableCell>
                <TableCell sx={{ color: "#fff" }}>Edit</TableCell>
                <TableCell sx={{ color: "#fff" }}>Delete</TableCell>
                <TableCell sx={{ color: "#fff" }}>Move</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.specializations.map((spec, specIndex) => (
                    <TableRow key={specIndex}>
                      {specIndex === 0 && (
                        <TableCell rowSpan={row.specializations.length}>
                          {row.category}
                        </TableCell>
                      )}
                      {specIndex === 0 && (
                        <TableCell rowSpan={row.specializations.length}>
                          <Button variant="text">Edit</Button>
                        </TableCell>
                      )}
                      <TableCell>{spec}</TableCell>
                      <TableCell>
                        <Button variant="text">Edit</Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="text">Delete</Button>
                      </TableCell>
                      <TableCell>
                        <IconButton aria-label="move up">
                          <ArrowUpwardIcon />
                        </IconButton>
                        <IconButton aria-label="move down">
                          <ArrowDownwardIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

<Box mb={4}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Manage Business Service Providers
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        This list is autopopulated from Registrations of Service Providers.
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        To edit a Company Name, click on the Account Manager to login and change the name in the Profile.
      </Typography>

    <TableContainer component={Paper} sx={{ border: '1px solid #ccc' }}>
        <Table sx={{ borderCollapse: 'collapse' }}>
          <TableHead sx={{ backgroundColor: "#333" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", border: '1px solid #ccc' }}>Primary Service Industry</TableCell>
              <TableCell sx={{ color: "#fff", border: '1px solid #ccc' }}>Specialization</TableCell>
              <TableCell sx={{ color: "#fff", border: '1px solid #ccc' }}>Companies</TableCell>
              <TableCell sx={{ color: "#fff", border: '1px solid #ccc' }}>Account Manager (click to login)</TableCell>
              <TableCell sx={{ color: "#fff", border: '1px solid #ccc' }}>URL</TableCell>
              <TableCell sx={{ color: "#fff", border: '1px solid #ccc' }}>Delete</TableCell>
              <TableCell sx={{ color: '#fff', border: '1px solid #ccc' }}>Move</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceProviders.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.specializations.map((spec, specIndex) => (
                  <React.Fragment key={specIndex}>
                    {spec.companies.map((company, companyIndex) => (
                      <TableRow key={companyIndex}>
                        {specIndex === 0 && companyIndex === 0 && (
                          <TableCell
                            rowSpan={row.specializations.reduce(
                              (sum, spec) => sum + (spec.companies.length || 1),
                              0
                            )}
                            sx={{ border: '1px solid #ccc' }}
                          >
                            {row.category}
                          </TableCell>
                        )}
                        {companyIndex === 0 && (
                          <TableCell rowSpan={spec.companies.length || 1} sx={{ border: '1px solid #ccc' }}>
                            {spec.name}
                          </TableCell>
                        )}
                        <TableCell sx={{ border: '1px solid #ccc' }}>{company}</TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}>
                          #
                        </TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}>
                          <TextField variant="outlined" size="small" fullWidth />
                        </TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}>
                          <Button variant="text">Delete</Button>
                        </TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}>
                          <IconButton aria-label="move up">
                            <ArrowUpwardIcon />
                          </IconButton>
                          <IconButton aria-label="move down">
                            <ArrowDownwardIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                    {spec.companies.length === 0 && (
                      <TableRow>
                        {specIndex === 0 && (
                          <TableCell
                            rowSpan={row.specializations.length}
                            sx={{ border: '1px solid #ccc' }}
                          >
                            {row.category}
                          </TableCell>
                        )}
                        <TableCell sx={{ border: '1px solid #ccc' }}>{spec.name}</TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}>
                          #
                        </TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}>
                          <TextField variant="outlined" size="small" fullWidth />
                        </TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}>
                          <Button variant="text">Delete</Button>
                        </TableCell>
                        <TableCell sx={{ border: '1px solid #ccc' }}>
                          <IconButton aria-label="move up">
                            <ArrowUpwardIcon />
                          </IconButton>
                          <IconButton aria-label="move down">
                            <ArrowDownwardIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

   
    </PageHeader>
  );
}

export default BusinessProviders