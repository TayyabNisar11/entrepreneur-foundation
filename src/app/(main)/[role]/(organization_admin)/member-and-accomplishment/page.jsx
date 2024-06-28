import PageHeader from '@/components/PageHeader'
import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  TextField,
  Box,
  Link,
  IconButton,
  Checkbox
} from '@mui/material';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CheckIcon from '@mui/icons-material/Check';

const businessTrainingData = [
  { task: 'Personal and Company Goals', entrepreneur: 'list of members entrepreneurs' },
  { task: 'Ideation', entrepreneur: 'Sorted by last name, so that' },
  { task: 'Feasibility Analysis', entrepreneur: 'Orgadmin can check off when' },
  { task: 'Competitive Research', entrepreneur: 'Training successfully completed' },
  { task: 'Identifying a Market Niche', entrepreneur: 'A confirmation will appear on' },
  { task: 'Designing the MVP (Minimal product or service)', entrepreneur: 'The entrepreneur dashboard' },
  { task: 'Prototyping for physical and market testing', entrepreneur: 'In business training completed' },
  { task: 'Product costing and sourcing components', entrepreneur: 'Showing the date completed' },
  { task: 'Label Design, Including Legal Requirements', entrepreneur: '' },
];

const equipmentTrainingData = [
  { task: 'Personal and Company Goals', entrepreneur: 'list of members entrepreneurs' },
  { task: 'Ideation', entrepreneur: 'Sorted by last name, so that' },
  { task: 'Feasibility Analysis', entrepreneur: 'Orgadmin can check off when' },
  { task: 'Competitive Research', entrepreneur: 'Training successfully completed' },
  { task: 'Identifying a Market Niche', entrepreneur: 'A confirmation will appear on' },
  { task: 'Designing the MVP (Minimal product or service)', entrepreneur: 'The entrepreneur dashboard' },
  { task: 'Prototyping for physical and market testing', entrepreneur: 'In business training completed' },
  { task: 'Product costing and sourcing components', entrepreneur: 'Showing the date completed' },
  { task: 'Label Design, Including Legal Requirements', entrepreneur: '' },
];

const customFields = [
  { field1: 'Custom field', field2: 'Custom field', field3: 'Custom field', field4: 'Custom field' },
];
const data = [
  { sequence: 18, module: 'Barriers to Entry: Patents, Trademarks, Copyright', note: '' },
  { sequence: 30, module: 'Bookkeeping', note: '' },
  { sequence: 17, module: 'Branding: Company name, logo, URL, Email address', note: '' },
  { sequence: 12, module: 'Break- Even Calculation', note: '' },
  { sequence: 15, module: 'Budgeting and Financial Forecasting', note: '' },
  { sequence: 26, module: 'Building the Team', note: '' },
  { sequence: 20, module: 'Business Licenses', note: '' },
  { sequence: 16, module: 'Business Planning/ Business Model Canvas', note: '' },
  { sequence: 33, module: 'Capital Requirement for launch and to break even', note: '' },
];

const equipmentData = [
  { category: 'General Safety', equipment: 'Safety protocols/ First aid kits', note: 'Note to staff' },
  { category: 'General Safety', equipment: 'Goggles, face shield, gloves', note: 'Note to staff' },
  { category: 'General Safety', equipment: 'Using hand tools', note: 'Note to staff' },
  { category: 'Woodworking', equipment: 'Table Saw', note: 'Note to staff' },
  { category: 'Woodworking', equipment: 'Radial arm Saw', note: 'Note to staff' },
  { category: 'Woodworking', equipment: 'cut off saw', note: 'Note to staff' },
  { category: 'Woodworking', equipment: 'Band saw', note: 'Note to staff' },
  { category: 'Woodworking', equipment: 'Jig saw', note: 'Note to staff' },
  { category: 'Woodworking', equipment: 'Belt and Disc Sander', note: 'Note to staff' },
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

const MemberAndAccomplishment = () => {
  return (
    <PageHeader title="Members and Accomplishment">
 <Box >
      {/* Total Members */}
      <Typography variant="h6" gutterBottom>
        Total Members
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <Button variant="contained" sx={{ backgroundColor: '#BDBDBD', marginBottom: '20px' }}>
        Show Archived
      </Button>

      {/* Download Links */}
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="body1" component="span">
          Download file as 
        </Typography>
        <Link href="#" sx={{ marginLeft: '10px', marginRight: '10px' }}>
          .xls
        </Link>
        <Link href="#" sx={{ marginRight: '10px' }}>
          .xlsx
        </Link>
        <Link href="#">
          .csv
        </Link>
      </Box>

      {/* Info Text */}
      <Typography variant="body1" gutterBottom>
        Click on underlined column to sort.
      </Typography>

      {/* First Table */}
      <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#757575' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>First</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Last (Click for dashboard)</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Company</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Email (Add all to clipboard)</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(3)].map((_, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Second Table */}
      <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#757575' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Street Address 1</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Street Address 2</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>City</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>State (selection Table)</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(3)].map((_, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Third Table */}
      <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#757575' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Last Login</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Date Joined</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Annual Due</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Month Dues</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Last Paid</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Dues Note</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Archive member</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Remove member</TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>Custom Field</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(2)].map((_, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: '1px solid #ccc' }}>mm/dd/yy</TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}>mm/dd/yy</TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}>$</TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}>mm/dd/yy</TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}>
                  <Button variant="text" sx={{ textTransform: 'none' }}>
                    Archive
                  </Button>
                </TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}>
                  <Button variant="text" sx={{ textTransform: 'none' }}>
                    Remove
                  </Button>
                </TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Benchmarks */}
      <Typography variant="h6" gutterBottom>
        Benchmarks
      </Typography>
      <Typography variant="body2" gutterBottom>
        When checked, the date will appear in the Benchmarks section of the{' '}
        <Link href="#">Entrepreneur’s dashboard</Link>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Add an organization benchmark
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: '1px solid #ccc' }}>Organization Benchmark</TableCell>
            <TableCell sx={{ border: '1px solid #ccc' }}>
              
                Add to Table
              
            </TableCell>
          </TableRow>
        </TableHead>
       <TableBody>
       <TableRow>
        <TableCell sx={{ border: '1px solid #ccc' }}>
        <TextField
        size="small"
          variant="outlined"
          fullWidth
          sx={{ marginRight: '20px' }}
        />
        </TableCell>
            <TableCell sx={{ border: '1px solid #ccc' }}>
              <Button variant="text" sx={{ textTransform: 'none' }}>
                Add
              </Button>
            </TableCell>
        </TableRow>
       </TableBody>
      </Table>
     
    </Box>

    
    <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                   Benchmarks
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Source
                </TableCell>
              
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
       
      </Box>

      <Box p={2}>
      <h1>Training</h1>
      <h2>Manage Training Topics</h2>
      <h3>Add Entrepreneurship Training Module</h3>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField fullWidth label="Title of Training Module" variant="outlined" />
              </TableCell>
              <TableCell>
                <Button variant="contained">Add to Table</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Suggested Sequence</TableCell>
              <TableCell>Table of Business Training Modules</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Move</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.sequence}</TableCell>
                <TableCell>{row.module}</TableCell>
                <TableCell><Button variant="contained">Delete</Button></TableCell>
                <TableCell>
                  <Button><ArrowUpwardIcon /></Button>
                  <Button><ArrowDownwardIcon /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h3>Add Entrepreneurship Training Module</h3>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField fullWidth label="Category" variant="outlined" />
              </TableCell>
              <TableCell>
                <TextField fullWidth label="Equipment" variant="outlined" />
              </TableCell>
              <TableCell>
                <TextField fullWidth label="Note to staff" variant="outlined" />
              </TableCell>
              <TableCell>
                <Button variant="contained">Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Equipment</TableCell>
              <TableCell>Note to staff</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Move</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipmentData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.equipment}</TableCell>
                <TableCell>{row.note}</TableCell>
                <TableCell><Button variant="contained">Delete</Button></TableCell>
                <TableCell>
                  <Button><ArrowUpwardIcon /></Button>
                  <Button><ArrowDownwardIcon /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    <Box p={2}>
      <Typography variant="h6">Training Completed by Each Entrepreneur Member</Typography>
      <Typography variant="body2">
        When checked, the date will appear in the Training section of the <a href="#entrepreneur-dashboard">{"Entrepreneur's "}dashboard</a>
      </Typography>
      <Box mt={2} mb={4}>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Business Training Completed</TableCell>
                <TableCell>Entrepreneur</TableCell>
                <TableCell align="center"><CheckIcon /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {businessTrainingData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.task}</TableCell>
                  <TableCell>{row.entrepreneur}</TableCell>
                  <TableCell align="center"><Checkbox /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Equipment Training Completed</TableCell>
                <TableCell>Entrepreneur</TableCell>
                <TableCell align="center"><CheckIcon /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {equipmentTrainingData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.task}</TableCell>
                  <TableCell>{row.entrepreneur}</TableCell>
                  <TableCell align="center"><Checkbox /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt={4}>
        <Typography variant="h6">OUR EVENTS ATTENDED BY ENTREPRENEUR</Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableBody>
              {customFields.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.field1}</TableCell>
                  <TableCell>{row.field2}</TableCell>
                  <TableCell>{row.field3}</TableCell>
                  <TableCell>{row.field4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt={4}>
        <Typography variant="h6">OUR FUNDING COMPETITIONS ENTERED BY ENTREPRENEUR</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {customFields.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.field1}</TableCell>
                  <TableCell>{row.field2}</TableCell>
                  <TableCell>{row.field3}</TableCell>
                  <TableCell>{row.field4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    <Box p={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Primary Mentor Assigned field</TableCell>
              <TableCell>Mentor rating of Entrepreneur</TableCell>
              <TableCell>Specialist Mentor</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Checkbox />
                    <Typography>Considerate</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Checkbox />
                    <Typography>Responsive</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Checkbox />
                    <Typography>Passionate</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </PageHeader>
  )
}

export default MemberAndAccomplishment