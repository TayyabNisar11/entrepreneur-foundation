import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Link,
  Checkbox,
  TextField,
} from "@mui/material";
  import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
  import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const data = [
  { id: 1, industry: "All", order: 10 },
  { id: 2, industry: "Acoustics", order: 20 },
  { id: 3, industry: "Aerospace and defense", order: 30 },
  { id: 4, industry: "Agriculture & Aquaculture", order: 40 },
  { id: 5, industry: "Artificial Intelligence (AI)", order: 50 },
  { id: 6, industry: "Apparel and Textiles", order: 60 },
  { id: 7, industry: "Arts", order: 70 },
  { id: 8, industry: "Assistive Technology for the handicapped", order: 80 },
  { id: 9, industry: "Automotive Technology", order: 90 },
  { id: 10, industry: "Bioscience", order: 100 },
  { id: 11, industry: "Broadcasting/Cable/Radio", order: 110 },
  { id: 12, industry: "Business Services", order: 120 },
  { id: 13, industry: "Computer hardware", order: 130 },
  { id: 14, industry: "Computer software", order: 140 },
  { id: 15, industry: "Consumer Services", order: 150 },
  { id: 16, industry: "Crypto/Blockchain", order: 160 },
  {
    id: 17,
    industry: "Diversified (other technology, not listed)",
    order: 170,
  },
  { id: 18, industry: "Education", order: 180 },
  { id: 19, industry: "Electronic Equipment and components", order: 190 },
  { id: 20, industry: "Energy and natural Resources", order: 200 },
];

const skills = [
  { id: 1, skill: "Accounting", order: 10 },
  { id: 2, skill: "Business Plan Preparation", order: 20 },
  { id: 3, skill: "Exporting", order: 30 },
  { id: 4, skill: "Financing - Start Up", order: 40 },
  { id: 5, skill: "Financing - Growth", order: 50 },
  { id: 6, skill: "General Management", order: 60 },
  { id: 7, skill: "Graphic Management", order: 70 },
  { id: 8, skill: "Human Resources", order: 80 },
  { id: 9, skill: "Licensing", order: 90 },
  { id: 10, skill: "Marketing", order: 100 },
  { id: 11, skill: "Patents, Trademarks and copyrights", order: 110 },
];

const capabilities = [
  { id: 1, category: "All", order: 10 },
  { id: 2, category: "Acoustics", order: 20 },
  { id: 3, category: "Aerospace and defense", order: 30 },
  { id: 4, category: "Agriculture & Aquaculture", order: 40 },
  { id: 5, category: "Artificial Intelligence (AI)", order: 50 },
  { id: 6, category: "Apparel and Textiles", order: 60 },
  { id: 7, category: "Arts", order: 70 },
  { id: 8, category: "Assistive Technology for the handicapped", order: 80 },
  { id: 9, category: "Automotive Technology", order: 90 },
  { id: 10, category: "Bioscience", order: 100 },
  { id: 11, category: "Broadcasting/Cable/Radio", order: 110 },
  { id: 12, category: "Business Services", order: 120 },
  { id: 13, category: "Computer hardware", order: 130 },
  { id: 14, category: "Computer software", order: 140 },
  { id: 15, category: "Consumer Services", order: 150 },
];

const investmentStagesData = [
  {
    id: 1,
    stage: "Pre-Revenue",
    investmentStage: "Concept Sales (Exploring Ideas)",
    order: 10,
  },
  {
    id: 2,
    stage: "Pre-Revenue",
    investmentStage: "Developing MVP (Minimum viable product/service)",
    order: 20,
  },
  {
    id: 3,
    stage: "Pre-Revenue",
    investmentStage: "Alpha stage (MVP being lab tested)",
    order: 30,
  },
  {
    id: 4,
    stage: "Pre-Revenue",
    investmentStage: "Beta stage (MVP being tested by customers)",
    order: 40,
  },
  {
    id: 5,
    stage: "Pre-Revenue",
    investmentStage: "Preparing for Launch",
    order: 50,
  },
  {
    id: 6,
    stage: "Post-Revenue",
    investmentStage: "Start-up: Sales <$100k",
    order: 60,
  },
  {
    id: 7,
    stage: "Post-Revenue",
    investmentStage: "Early stage: Sales <$500k",
    order: 70,
  },
  {
    id: 8,
    stage: "Post-Revenue",
    investmentStage: "Expansion stage: Sales $500k-$5mm",
    order: 80,
  },
  {
    id: 9,
    stage: "Post-Revenue",
    investmentStage: "Later-Stage: Sales>$5mm",
    order: 90,
  },
];
const collegeData = [
  {
    id: 1,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 10,
  },
  {
    id: 2,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 20,
  },
  {
    id: 3,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 30,
  },
  {
    id: 4,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 40,
  },
  {
    id: 5,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 50,
  },
  {
    id: 6,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 60,
  },
  {
    id: 7,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 70,
  },
  {
    id: 8,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 80,
  },
  {
    id: 9,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 90,
  },
  {
    id: 10,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 100,
  },
  {
    id: 11,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 110,
  },
  {
    id: 12,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 120,
  },
  {
    id: 13,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 130,
  },
  {
    id: 14,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 140,
  },
  {
    id: 15,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 150,
  },
  {
    id: 16,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 160,
  },
  {
    id: 17,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 170,
  },
  {
    id: 18,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 180,
  },
  {
    id: 19,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 190,
  },
  {
    id: 20,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 200,
  },
  {
    id: 21,
    college: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    order: 210,
  },
];
const benchmarksData = [
  {
    id: 1,
    benchmark: "Concept Validated",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 2,
    benchmark: "Elevator Pitch (Problem and solution)",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 3,
    benchmark: "BMC or Business plan with Capital needs",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 4,
    benchmark: "MVP Prototype in testing (Alpha Stage)",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 5,
    benchmark: "Minimum Viable product in Beta Testing",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 6,
    benchmark: "Patent or Trademark applied for",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 7,
    benchmark: "Branding: Company/ product name, URL, Logo",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 8,
    benchmark: "Legal Entity formed: Registered with town",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 9,
    benchmark: "Website Completed",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 10,
    benchmark: "3 Minutes Pitch Deck Complete",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 11,
    benchmark: "Trial Launch Capital Raised",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 12,
    benchmark: "Insurance Secured",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 13,
    benchmark: "First Sale",
    organization: "Universal Ecosystem Benchmark",
  },
  {
    id: 14,
    benchmark: "$50,000 in annualized sales",
    organization: "Universal Ecosystem Benchmark",
  },
];
const statesData = [
  { id: 1, state: "ALL", code: "ALL", order: 10 },
  { id: 2, state: "Alabama", code: "AL", order: 20 },
  { id: 3, state: "Alaska", code: "AK", order: 30 },
  { id: 4, state: "Arizona", code: "AZ", order: 40 },
  { id: 5, state: "Arkansas", code: "AR", order: 50 },
  { id: 6, state: "California", code: "CA", order: 60 },
  { id: 7, state: "Colorado", code: "CO", order: 70 },
  { id: 8, state: "Connecticut", code: "CT", order: 80 },
  { id: 9, state: "Delaware", code: "DE", order: 90 },
];
const TableForms = () => {
  return (
    <PageHeader title="Manage Tables for Forms">
      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Industry
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Order
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Add
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Move
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.id}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.industry}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.order}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Link href="#" underline="hover">
                      Add
                    </Link>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <IconButton size="small">
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton size="small">
                      <ArrowDownwardIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} textAlign="right">
          <Button variant="contained">Update</Button>
        </Box>
      </Box>

      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Mentor Skills
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Order
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Add
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Move
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skills.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.id}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.skill}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.order}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Link href="#" underline="hover">
                      Add
                    </Link>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <IconButton size="small">
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton size="small">
                      <ArrowDownwardIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} textAlign="right">
          <Button variant="contained">Update</Button>
        </Box>
      </Box>

      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Talent Capabilities - Category
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Skills
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Interest
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Order
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Add
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Move
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {capabilities.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.id}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.category}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #ccc", textAlign: "center" }}
                  >
                    <Checkbox />
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #ccc", textAlign: "center" }}
                  >
                    <Checkbox />
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.order}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Link href="#" underline="hover">
                      Add
                    </Link>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <IconButton size="small">
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton size="small">
                      <ArrowDownwardIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} textAlign="right">
          <Button variant="contained">Update</Button>
        </Box>
      </Box>

      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Stage
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Investment Stage
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Order
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Add
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Move
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {investmentStagesData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.id}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.stage}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.investmentStage}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.order}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Link href="#" underline="hover">
                      Add
                    </Link>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <IconButton size="small">
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton size="small">
                      <ArrowDownwardIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} textAlign="right">
          <Button variant="contained">Update</Button>
        </Box>
        <Typography mt={2}>Or minimal sales from test marketing</Typography>
      </Box>

      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Connecticut College and Universities
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Order
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Add
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Move
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {collegeData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.id}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.college}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.order}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Link href="#" underline="hover">
                      Add
                    </Link>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <IconButton size="small">
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton size="small">
                      <ArrowDownwardIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} textAlign="right">
          <Button variant="contained">Update</Button>
        </Box>
      </Box>

      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Standard Benchmarks
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Organization
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", border: "1px solid #ccc" }}
                ></TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Delete
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Move
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {benchmarksData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.benchmark}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.organization}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #ccc", textAlign: "center" }}
                  >
                    <Checkbox />
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <IconButton size="small">
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton size="small">
                      <ArrowDownwardIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mb={4}>
          <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
            <Table sx={{ borderCollapse: "collapse" }}>
              <TableHead sx={{ backgroundColor: "#555" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                    Organization Benchmark
                  </TableCell>
                  <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                    Specific Organization
                  </TableCell>
                  <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                    Add to Table
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #ccc", textAlign: "center" }}
                  >
                    <Button variant="contained">Add</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box mt={2}>
          <Typography>
            When any Benchmark is checked off by an Orgadmin, the date of
            confirmation will appear in the Benchmarks section of the
            <Link href="#" underline="hover">
              {" "}
              {"Entrepreneur's dashboard"}
            </Link>
            .
          </Typography>
        </Box>
        <Box mt={2} textAlign="right">
          <Button variant="contained">Update</Button>
        </Box>
      </Box>

      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  States
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Code
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Order
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statesData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.id}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.state}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.code}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {item.order}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2}>
          <Typography variant="body1" gutterBottom>
            OTHER TABLES
          </Typography>
          <Typography variant="body2">
            • BUSINESS SERVICE PROVIDER PRIMARY INDUSTRIES and SPECIALIZATIONS –
            See <a href="#">{"Manage Business Service Providers"}</a> Below
          </Typography>
          <Typography variant="body2">
            • MEMBERSHIP CATEGORIES – Contact software developer for changes
          </Typography>
          <Typography variant="body2">
            • EQUIPMENT TRAINING – Not editable. Most Orgadmins will want their
            own custom list.
          </Typography>
          <Typography variant="body2">
            • LEGAL STRUCTURE – Not editable. Table includes an “Other” choice.
          </Typography>
        </Box>
      </Box>
    </PageHeader>
  );
};

export default TableForms;
