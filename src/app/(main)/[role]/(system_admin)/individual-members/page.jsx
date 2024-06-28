import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import EFInput from "@/components/ui/Input";

const categories = [
  "Entrepreneurs",
  "NGOs",
  "Business Service Providers",
  "Capital providers",
  "Grant providers",
  "Business Lender",
  "Equity Investors",
  "Volunteer Mentors and Judges",
  "Talent Seeking Opportunities",
  "Organizations",
];
const industries = [
  "Acoustics",
  "Aerospace",
  "Agriculture & Aquaculture",
  "Apparel and Textiles",
  "Assistive Technology for the handicapped",
  "Automotive Technology",
];

const IndividualMembers = () => {
  return (
    <PageHeader title="Individual Members">
      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Member statistics
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ border: "1px solid #ccc", mb: 4 }}
        >
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Category
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Numbers
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Male
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Female
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {category}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Business Category of Entrepreneurs
        </Typography>
        <EFInput label="Personal Businesses  " />
        <EFInput label="Venture Enterprises" />
        <EFInput label="Total" />
      </Box>

      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Member Demographics
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ border: "1px solid #ccc", mb: 4 }}
        >
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Industry
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Number
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Male
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Female
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {industries.map((industry, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {industry}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button variant="contained" color="primary">
          Show Archived
        </Button>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Member Directory
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ border: "1px solid #ccc", mb: 4 }}
        >
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  First
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Last (Click to login)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Email (Click to send)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Phone
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer
          component={Paper}
          sx={{ border: "1px solid #ccc", mb: 4 }}
        >
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Street Address
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  City
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  State
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Zip Code
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Member Category
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Date Joined
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Last Login
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Archive Member
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Remove
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Notes
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <a href="#" underline="hover">
                    Archive
                  </a>
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <a href="#" underline="hover" color="error">
                    Remove
                  </a>
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <a href="#" underline="hover">
                    Archive
                  </a>
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <a href="#" underline="hover" color="error">
                    Remove
                  </a>
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          REFER AN ENTREPRENEUR TO ANOTHER ORGANIZATION
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ border: "1px solid #ccc", mb: 4 }}
        >
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Your Entrepreneurs
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Entrepreneur Email
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Include Snapshot of Company Profile
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  Entrepreneur 1
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  Entrepreneur 2
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Organizations in Ecosystem (Click for Profile)
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", border: "1px solid #ccc" }}
                  colSpan={2}
                >
                  Organization Admin
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Reason for Referral
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", border: "1px solid #ccc" }}
                ></TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Email
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Button variant="contained" size="small">
                    Send
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Button variant="contained" size="small">
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

export default IndividualMembers;
