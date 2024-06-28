"use client";
import React from "react";
import PageHeader from "@/components/PageHeader";
import {
  Box,
  Container,
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Radio,
  List,
  ListItem,
  Checkbox,
  Grid,
  FormGroup,
  RadioGroup,
  Stack,
} from "@mui/material";
import { Delete, ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { FaDollarSign } from "react-icons/fa6";
import EFInput from "@/components/ui/Input";

const data = [
  "Problem or vacuum in the marketplace you are solving and evidence that it is real",
  "Product or service",
  "Solution: The one product or service you are entering (describe in 8 or fewer words)",
  "Demand Validation: What market research data proves an adequate demand exists?",
  "Marketing: How will customers become aware of your offering?",
  "Marketing: What is roll-out budget and how will you deploy funds?",
  "Sales Plan: How will you contact customers? Who will do the actual closing?",
  "Actual dates (from founding to <date/400)",
  "Competition Differentiation (How your product is superior to alternatives)",
];

const questions = [
  "Problem or vacuum in the marketplace you are solving and evidence that it is real",
  "Product or service",
  "Solution: The one product or service you are entering (describe in 8 or fewer words)",
  "Demand Validation: What market research data proves an adequate demand exists?",
  "Marketing: How will customers become aware of your offering?",
  "Marketing: What is roll-out budget and how will you deploy funds?",
  "Sales Plan: How will you contact customers? Who will do the actual closing?",
  "Actual (from founding to date) 0.00",
  "Competition Differentiation (How your product is superior to alternatives)",
  "Barriers to Entry: How you will deter competition (e.g. – Patent)",
  "Finance: How will you monetize offering (i.e. – how will the company make money)?",
  "Margins:",
  "Funding: Amount you need, and how you will use to take business to next level",
  "Attach pitch deck as PPT, PPTX, OR PDF",
  "Video pitch (Enter link to video posted to YouTube OR Vimeo)",
  "Upload image of product/Service (jpeg, gif or png)",
  "Upload Financials for past 3 years as PDF, XLS or XLSX",
  "Upload pro-forma financials for next 5 years as PDF, XLS OR XLSX",
  "Individual or organization that alerted you to this competition",
  "Name of advisor for this competition.",
  "Advisor’s Email",
];
const ratingsData = [
  {
    judge: "Judge 1",
    competition: "Competition A",
    deadline: "mm/dd/yy",
    entriesAssigned: "#",
    entriesRated: "#",
    avgScore: "#",
    managingScore: ["Remove", "Restore"],
  },
  {
    judge: "Judge 1",
    competition: "Competition B",
    deadline: "mm/dd/yy",
    entriesAssigned: "#",
    entriesRated: "#",
    avgScore: "#",
    managingScore: ["Remove", "Restore"],
  },
  {
    judge: "Judge 1",
    competition: "Competition C",
    deadline: "mm/dd/yy",
    entriesAssigned: "#",
    entriesRated: "#",
    avgScore: "#",
    managingScore: ["Remove", "Restore"],
  },
  {
    judge: "Judge 2",
    competition: "Competition A",
    deadline: "mm/dd/yy",
    entriesAssigned: "#",
    entriesRated: "#",
    avgScore: "#",
    managingScore: ["Remove", "Restore"],
  },
  {
    judge: "Judge 2",
    competition: "Competition A",
    deadline: "mm/dd/yy",
    entriesAssigned: "#",
    entriesRated: "#",
    avgScore: "#",
    managingScore: ["Remove", "Restore"],
  },
];
const tableData = [
  {
    question: "Venture: Short Description of company (150 words or less)",
    answerRequired: "Yes",
    ratingRequired: "Yes",
    order: 1,
    allowNA: true,
  },
  {
    question: "Amount of new Investment Sought",
    answerRequired: "Yes",
    ratingRequired: "Yes",
    order: 1,
    allowNA: true,
  },
  {
    question: "Website URL",
    answerRequired: "Yes",
    ratingRequired: "Yes",
    order: 1,
    allowNA: true,
  },
];

const businessQuestion = [
  {
    label:
      "PROBLEM or vacuum in the marketplace you are solving and evidence it is real",
    type: "text",
  },
  {
    label: "Product or Service",
    type: "radio",
    options: ["Product", "Service"],
  },
  {
    label: "Solution: The one product or service you are entering",
    type: "text",
  },
  {
    label:
      "Demand Validation: Market research that proves an adequate demand exists",
    type: "text",
  },
  {
    label: "Marketing: How will customers become aware of your offering?",
    type: "text",
  },
  {
    label: "Marketing: What is roll-out budget and how will you deploy funds?",
    type: "text",
  },
  {
    label:
      "Sales Plan: How will you contact customers? Who will do the actual closing?",
    type: "text",
  },
  { label: "Actual Sales (from founding to date)", type: "number" },
  {
    label:
      "Competition Differentiation (How your product is superior to alternatives)",
    type: "text",
  },
  {
    label: "Barriers to Entry: How you will deter competition (e.g. – Patent)",
    type: "text",
  },
  {
    label:
      "Finance: How will you monetize offering (i.e. – how will the company make money)?",
    type: "text",
  },
];

const times = [
  "12:00 AM",
  "01:00 AM",
  "02:00 AM",
  "03:00 AM",
  "04:00 AM",
  "05:00 AM",
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
];

const judgeData = [
  {
    competition: "Bridgeport Business Challenge",
    entriesRated: 2,
    totalEntries: 2,
    action: "Rate Submissions",
  },
  {
    competition: "Food Industry Business Plan Competition 2021",
    entriesRated: 2,
    totalEntries: 2,
    action: "Rate Submissions",
  },
];

const challengeData = [
  {
    entry: "The Rose Tree LLC",
    submitted: "10/14/2021",
    answerToRate: 3,
    avgRating: "N/A",
    reviewersRated: "N/A",
    action: "Edit ratings & notes",
  },
  {
    entry: "Vera Coffee LLC",
    submitted: "10/14/2021",
    answerToRate: 3,
    avgRating: 3.67,
    reviewersRated: 3.67,
    action: "Edit ratings & notes",
  },
];

const additionalQuestions = [
  {
    label: "Margins:",
    subQuestions: [
      {
        label: "A. Your selling price per product or hour of service",
        type: "number",
      },
      { label: "B. Your cost to produce", type: "number" },
      { label: "C. Gross margin: (A-B)/A", type: "number" },
    ],
  },
  {
    label:
      "Funding: Amount you need, and how you'll use to take business to next level",
    type: "text",
    buttonLabel: "Save",
  },
  {
    label: "Attach pitch deck as PPT, PPTX OR PDF",
    type: "file",
    buttonLabel: "Upload",
  },
  {
    label: "Video Pitch (Enter link to video posted to YouTube OR Vimeo)",
    type: "text",
    buttonLabel: "Save",
  },
  {
    label: "UPLOAD IMAGE OF PRODUCT/ SERVICE (jpeg, gif or PNG)",
    type: "file",
    buttonLabel: "Upload",
  },
  {
    label: "UPLOAD FINANCIALS for PAST 3 YEARS as XLS or XLSX",
    type: "file",
    buttonLabel: "Upload",
  },
  {
    label: "UPLOAD FINANCIAL FORECAST for NEXT 5 YEARS as XLS or XLSX",
    type: "file",
    buttonLabel: "Upload",
  },
  {
    label: "INDIVIDUAL or ORGANIZATION THAT ALERTED YOU TO THIS COMPETITION",
    type: "text",
    buttonLabel: "Save",
  },
];

const BusinessPlanCompetition = () => {
  return (
    <PageHeader title="Business Plan Competition" >
    

      <Box>
        <Typography variant="h6">Manage Stock Questions</Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                <TableCell sx={{ color: "#fff" }}>Questions</TableCell>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Delete
                </TableCell>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Move
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((question) => (
                <TableRow key={question}>
                  <TableCell>{question}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <ArrowUpward />
                    </IconButton>
                    <IconButton>
                      <ArrowDownward />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ my: 4, display: "flex", alignItems: "center" }}>
          <TextField
            label="Question Prompt"
            variant="outlined"
            size="small"
            sx={{ mr: 2, flexGrow: 1 }}
          />
          <FormControl
            variant="outlined"
            size="small"
            sx={{ mr: 2, minWidth: 120 }}
          >
            <InputLabel>Type</InputLabel>
            <Select label="Type" defaultValue="short-text">
              <MenuItem value="short-text">Short Text</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">Add Question</Button>
        </Box>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6">
          All Ecosystem Business Plan Competitions
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                <TableCell sx={{ color: "#fff" }}>Entry Deadline</TableCell>
                <TableCell sx={{ color: "#fff" }}>Time</TableCell>
                <TableCell sx={{ color: "#fff" }}>Finals Date</TableCell>
                <TableCell sx={{ color: "#fff" }}>Time</TableCell>
                <TableCell sx={{ color: "#fff" }}>Finals Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {["mm/dd/yy", "mm/dd/yy"].map((date, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      defaultValue={date}
                      variant="outlined"
                      size="small"
                      type="date"
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <Select defaultValue="02:00 PM">
                        {times.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField
                      defaultValue={date}
                      variant="outlined"
                      size="small"
                      type="date"
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <Select defaultValue="02:00 PM">
                        {times.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* New Sections Below as per Screenshot */}

      <Box sx={{ my: 4 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                <TableCell sx={{ color: "#fff" }}>Competition Title</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Managing Organization
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  {" "}
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                <TableCell sx={{ color: "#fff" }}>Eligibility</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Total Cash Prize Pool
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FaDollarSign />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333" }}>
                <TableCell sx={{ color: "#fff" }}>Application Link</TableCell>
                <TableCell sx={{ color: "#fff" }}>URL for Details</TableCell>
                <TableCell sx={{ color: "#fff" }}>Delete</TableCell>
                <TableCell sx={{ color: "#fff" }}>Move</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <Button variant="contained">Delete</Button>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <ArrowUpward />
                    </IconButton>
                    <IconButton>
                      <ArrowDownward />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography variant="h6">Your competitions</Typography>
        <Typography>Add a new competiton</Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                <TableCell sx={{ color: "#fff" }}>Entry Deadline</TableCell>
                <TableCell sx={{ color: "#fff" }}>Time</TableCell>
                <TableCell sx={{ color: "#fff" }}>Finals Date</TableCell>
                <TableCell sx={{ color: "#fff" }}>Time</TableCell>
                <TableCell sx={{ color: "#fff" }}>Finals Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {["mm/dd/yy", "mm/dd/yy"].map((date, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      defaultValue={date}
                      variant="outlined"
                      size="small"
                      type="date"
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <Select defaultValue="02:00 PM">
                        {times.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField
                      defaultValue={date}
                      variant="outlined"
                      size="small"
                      type="date"
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <Select defaultValue="02:00 PM">
                        {times.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ my: 4 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                  <TableCell sx={{ color: "#fff" }}>
                    Competition Title
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    Managing Organization
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    {" "}
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                  <TableCell sx={{ color: "#fff" }}>Eligibility</TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    Total Cash Prize Pool
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    {" "}
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaDollarSign />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333" }}>
                  <TableCell sx={{ color: "#fff" }}>Application Link</TableCell>
                  <TableCell sx={{ color: "#fff" }}>URL for Details</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Delete</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Move</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField variant="outlined" size="small" fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField variant="outlined" size="small" fullWidth />
                    </TableCell>
                    <TableCell>
                      <Button variant="contained">Delete</Button>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <ArrowUpward />
                      </IconButton>
                      <IconButton>
                        <ArrowDownward />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333" }}>
                  <TableCell sx={{ color: "#fff" }}>
                    DESCRIPTION (This will appear on click of title in list of
                    Competitions)
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>Question</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField variant="outlined" size="small" fullWidth />
                    </TableCell>

                    <TableCell>
                      <Button variant="text">
                        Create or edit application questions
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333" }}>
                  <TableCell sx={{ color: "#fff" }}>
                    Manage Competition
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{ display: "flex", alignItems: "center", gap: 3 }}
                    >
                      <Button variant="text">Save as draft</Button>
                      <Button variant="text">Publish</Button>
                      <Button variant="text">Create a copy</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6">
          Your Published Competitions (Editable)
        </Typography>
        <Typography>Hide Archived Competitions</Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                <TableCell sx={{ color: "#fff" }}>Entry Deadline</TableCell>
                <TableCell sx={{ color: "#fff" }}>Time</TableCell>
                <TableCell sx={{ color: "#fff" }}>Final Date</TableCell>
                <TableCell sx={{ color: "#fff" }}>Time</TableCell>
                <TableCell sx={{ color: "#fff" }}>Entries Started</TableCell>
                <TableCell sx={{ color: "#fff" }}>Entries Completed</TableCell>
                <TableCell sx={{ color: "#fff" }}>View Entries</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {["mm/dd/yy", "mm/dd/yy"].map((date, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      defaultValue={date}
                      variant="outlined"
                      size="small"
                      type="date"
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <Select defaultValue="02:00 PM">
                        {times.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField
                      defaultValue={date}
                      variant="outlined"
                      size="small"
                      type="date"
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <Select defaultValue="02:00 PM">
                        {times.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>#</TableCell>
                  <TableCell>#</TableCell>
                  <TableCell>
                    <Button variant="contained">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ my: 4 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                  <TableCell sx={{ color: "#fff" }}>
                    Competition Title
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    Managing Organization
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    {" "}
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                  <TableCell sx={{ color: "#fff" }}>Eligibility</TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    Total Cash Prize Pool
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    {" "}
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaDollarSign />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333" }}>
                  <TableCell sx={{ color: "#fff" }}>Application Link</TableCell>
                  <TableCell sx={{ color: "#fff" }}>URL for Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField variant="outlined" size="small" fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField variant="outlined" size="small" fullWidth />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333" }}>
                  <TableCell sx={{ color: "#fff" }}>
                    DESCRIPTION (This will appear on click of title in list of
                    Competitions)
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>Question</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField variant="outlined" size="small" fullWidth />
                    </TableCell>

                    <TableCell>
                      <Button variant="text">
                        Create or edit application questions
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#333" }}>
                  <TableCell sx={{ color: "#fff" }}>
                    Manage Competition
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}></TableCell>
                  <TableCell sx={{ color: "#fff" }}>Final Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        display: "flex",

                        gap: 3,
                        flexDirection: "column",
                      }}
                      align="left"
                    >
                      <Button variant="text" sx={{ maxWidth: "300px" }}>
                        Update published application 
                      </Button>
                      <Button sx={{ maxWidth: "300px" }} variant="text">
                        Create a Copy
                      </Button>
                      <Button sx={{ maxWidth: "300px" }} variant="text">
                        Unpublish
                      </Button>
                      <Button sx={{ maxWidth: "300px" }} variant="text">
                        Archive
                      </Button>
                    </TableCell>
                    <TableCell align="left">#</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      {/* */}
      <Box>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Box sx={{ p: 2 }}>
            View Entries spreadsheet (includes both partial and completed
            entries)
            <List>
              <ListItem>
                Columns with underlined headers are sortable. Click once to sort
                ascending, again to sort descending.
              </ListItem>
              <ListItem>To view Profile, click on Name link.</ListItem>
              <ListItem>
                Publishing results makes Reviewer Ratings and Comments viewable
                by Entrant, anonymously.
              </ListItem>
            </List>
          </Box>
          <Box sx={{ p: 2, textAlign: "right" }}>
            Download file as{" "}
            <Button variant="text" sx={{ textDecoration: "underline" }}>
              .xls
            </Button>
            <Button variant="text" sx={{ textDecoration: "underline" }}>
              .xlsx
            </Button>
            <Button variant="text" sx={{ textDecoration: "underline" }}>
              .csv
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333" }}>
                <TableCell sx={{ color: "#fff" }}>CEO</TableCell>
                <TableCell sx={{ color: "#fff" }}>Company</TableCell>
                <TableCell sx={{ color: "#fff" }}>Question Answered</TableCell>
                <TableCell sx={{ color: "#fff" }}>Last Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((item, index) => (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>#</TableCell>
                  <TableCell>
                    <TextField
                      defaultValue="mm/dd/yy"
                      variant="outlined"
                      size="small"
                      fullWidth
                      type="date"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333", color: "#fff" }}>
                <TableCell sx={{ color: "#fff" }}>Average Rating</TableCell>
                <TableCell sx={{ color: "#fff" }}>School</TableCell>
                <TableCell sx={{ color: "#fff" }}>Category</TableCell>
                <TableCell sx={{ color: "#fff" }}>Manage</TableCell>
                <TableCell sx={{ color: "#fff" }}>Finalist</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {["Personal Venture", "Personal Venture"].map(
                (category, index) => (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>{category}</TableCell>
                    <TableCell>
                      <Button>View</Button>
                      <Button>Edit</Button>
                      <Button>Ratings</Button>
                      <Button>Delete</Button>
                    </TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333" }}>
                <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                  Allow Capital Provider access to submission
                </TableCell>
                <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                  Publish Ratings ** and Comment
                </TableCell>
                <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: "center" }}>
                    [Table of Capital Providers]
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <FormControlLabel control={<Radio />} label="Yes" />
                    <FormControlLabel control={<Radio />} label="No" />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography sx={{ p: 2 }}>
            Publishing allows Entrepreneurs, Advisors and Mentors to see
            Reviewer Ratings and Comments
          </Typography>
        </TableContainer>
      </Box>

      {/* competition question */}
      <Box sx={{ py: 4 }}>
        <Typography variant="h6">Manage Competition Questions</Typography>
        <EFInput sx={{ maxWidth: "400px" }} label="Select Competition" />

        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          SELECT IDENTIFICATION and STATUS Questions that will auto-fill from
          Registration
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormGroup>
              {[
                "Company name",
                "Category",
                "Industries",
                "Company Brief Description",
                "Company Detailed Description",
                "Date Founded",
                "Legal Structure",
                "State of development of company",
                "Management Team",
              ].map((label, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    width: "100%",
                  }}
                  key={index}
                >
                  <Box
                    key={label}
                    component={Paper}
                    sx={{
                      mt: 2,
                      maxWidth: "400px",
                      width: "100%",
                      p: 1,
                      px: 1.5,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid gray",
                    }}
                  >
                    <FormControlLabel
                      control={<Radio />}
                      label={label}
                      sx={{ flexGrow: 1 }}
                    />
                  </Box>
                  {label === "Category" && (
                    <Box display="flex" flexDirection="column">
                      <Typography variant="caption" sx={{ mt: 0.5 }}>
                        <strong>Personal Business:</strong> limited market and
                        capital requirement
                      </Typography>
                      <Typography variant="caption" sx={{ mt: 0.5 }}>
                        <strong>Venture Enterprise:</strong> scalable, capital
                        intensive, and large market
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </FormGroup>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">
          SELECT STOCK BUSINESS QUESTIONS (The fewer selected, the more
          applications)
        </Typography>
        <FormGroup>
          {questions.map((question, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              {question.includes("Margins:") ? (
                <>
                  <FormControlLabel control={<Checkbox />} label={question} />
                  <Box sx={{ ml: 4 }}>
                    <FormGroup>
                      {[
                        "A. Your selling price per product or hour of service",
                        "B. Your cost to produce",
                        "C. Gross margin: (A-B)/A",
                      ].map((subQuestion, subIndex) => (
                        <Box
                          key={subIndex}
                          sx={{ display: "flex", alignItems: "center", mt: 1 }}
                        >
                          <Typography sx={{ mr: 2 }}>{subQuestion}</Typography>
                          <TextField
                            variant="outlined"
                            size="small"
                            sx={{ width: 120 }}
                            defaultValue="0.00"
                          />
                        </Box>
                      ))}
                    </FormGroup>
                  </Box>
                </>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={question}
                    sx={{ flexGrow: 1 }}
                  />
                  {(question.includes("0.00") ||
                    question.includes("(from founding to date)")) && (
                    <TextField
                      variant="outlined"
                      size="small"
                      sx={{ width: 120 }}
                      defaultValue="0.00"
                    />
                  )}
                </Box>
              )}
            </Box>
          ))}
        </FormGroup>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained">Add selected Question</Button>
        </Box>
      </Box>

      <Box sx={{ my: 4, display: "flex", alignItems: "center" }}>
        <TextField
          label="Question Prompt"
          variant="outlined"
          size="small"
          sx={{ mr: 2, flexGrow: 1 }}
        />
        <FormControl
          variant="outlined"
          size="small"
          sx={{ mr: 2, minWidth: 120 }}
        >
          <InputLabel>Type</InputLabel>
          <Select label="Type" defaultValue="short-text">
            <MenuItem value="short-text">Short Text</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Add Question</Button>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">Arrange questions on Application</Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Question</TableCell>
                <TableCell sx={{ color: "#fff" }}>Answer Required</TableCell>
                <TableCell sx={{ color: "#fff" }}>Rating Required</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Order of appearance
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>Allow N/A</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.question}</TableCell>
                  <TableCell>
                    <Select
                      value={row.answerRequired}
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={row.ratingRequired}
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      defaultValue={row.order}
                      sx={{ width: 60 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Select
                      value={row.allowNA ? "Yes" : "No"}
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="subtitle1" sx={{ mt: 4 }}>
          What the Applicant Sees
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          You do not have to answer all questions at one time. You may save a
          draft of your application and return later to finish or to give an
          adviser or mentor a chance to review before Submitting. You may also
          edit answers after Submitting.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Identification and Status Questions
        </Typography>
        <Typography variant="body2">
          Answers will auto-fill from Registration, but you can edit them here.
          If the question is not applicable to your company, enter {"'NA'"} and
          explain.
        </Typography>
        <Typography variant="body2" component="div" sx={{ mt: 1 }}>
          <ul>
            <li>Company</li>
            <li>Category</li>
            <li>Industries</li>
            <li>Company Brief Description</li>
            <li>Company Detailed Description</li>
            <li>Date Founded</li>
            <li>Legal Structure</li>
            <li>Stage of development of company</li>
            <li>Management team</li>
          </ul>
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Save Draft
        </Button>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">Business Questions</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          If question is not applicable to your company, enter NA and explain.
        </Typography>
        {businessQuestion.map((question, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "flex-start", mt: 4 }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">{question.label}</Typography>
              {question.type === "text" && (
                <>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{ mt: 2 }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ display: "block", mt: 1 }}
                  >
                    Limit 800 characters and spaces. Remaining 800.
                  </Typography>
                </>
              )}
              {question.type === "radio" && (
                <RadioGroup sx={{ mt: 2 }}>
                  {question.options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              )}
              {question.type === "number" && (
                <TextField
                  type="number"
                  variant="outlined"
                  sx={{ width: 200, mt: 2 }}
                  defaultValue="0.00"
                />
              )}
            </Box>
            <Button
              variant="contained"
              sx={{ ml: 2, alignSelf: "center", height: "50%" }}
            >
              Save
            </Button>
          </Box>
        ))}

        {additionalQuestions.map((question, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "flex-start", mt: 4 }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">{question.label}</Typography>
              {question.type === "text" && (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{ mt: 2 }}
                />
              )}
              {question.type === "file" && (
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Button variant="contained" sx={{ mr: 2 }}>
                    {question.buttonLabel}
                  </Button>
                </Box>
              )}
              {question.type === "number" && (
                <TextField
                  type="number"
                  variant="outlined"
                  sx={{ width: 120, mt: 2 }}
                  defaultValue="0.00"
                />
              )}
              {question.subQuestions && (
                <Box sx={{ ml: 4 }}>
                  {question.subQuestions.map((subQuestion, subIndex) => (
                    <Box
                      key={subIndex}
                      sx={{ display: "flex", alignItems: "center", mt: 2 }}
                    >
                      <Typography sx={{ flexGrow: 1 }}>
                        {subQuestion.label}
                      </Typography>
                      <TextField
                        type="number"
                        variant="outlined"
                        sx={{ width: 120, ml: 2 }}
                        defaultValue="0.00"
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                ml: 2,
              }}
            >
              {question.hasUpload && (
                <Button variant="contained" sx={{ mb: 1 }}>
                  Upload
                </Button>
              )}
              <Button variant="contained">Save</Button>
            </Box>
          </Box>
        ))}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              alignSelf: "center",
              px: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            SUBMIT APPLICATION
            <Typography fontSize="13px" display="block">
              You can continue to edit after submission
            </Typography>
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">Manage Judging</Typography>
        <Select
          defaultValue=""
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mt: 2, mb: 4 }}
        >
          <MenuItem value="">Select a Competition</MenuItem>
          {/* Add competition options here */}
        </Select>

        <Typography variant="h6">
          Individuals who have volunteered to judge entries to your
          competitions.
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          If individuals are not in the system, you can{" "}
          <a href="#">Register them.</a>
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>
                  First Name (Click for Profile)
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Last Name (Click for LinkedIn)
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Email (Add all to clipboard)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{/* Add rows here */}</TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6">Add Judges to Competition.</Typography>
        <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>
                  First Name (Click for Profile)
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Last Name
                  <Typography variant="caption" sx={{ display: "block" }}>
                    (Click to login as the judge to correct errors or edit
                    feedback)
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Email
                  <Typography variant="caption" sx={{ display: "block" }}>
                    (Add all to clipboard)
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>Category Assigned</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Industries Assigned
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <Select variant="outlined" size="small" fullWidth>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Personal Venture">
                      Personal Venture
                    </MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select variant="outlined" size="small" fullWidth>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Acoustics">Acoustics</MenuItem>
                    <MenuItem value="Aerospace and Defense">
                      Aerospace and Defense
                    </MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
              {/* Add more rows as needed */}
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography variant="body2">Add a new Judge</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <Select variant="outlined" size="small" fullWidth>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Personal Venture">
                      Personal Venture
                    </MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select variant="outlined" size="small" fullWidth>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Acoustics">Acoustics</MenuItem>
                    <MenuItem value="Aerospace and Defense">
                      Aerospace and Defense
                    </MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained">Add</Button>
        </Box>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">Rating Histories of Judges</Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>
                  Judge (Click for profile)
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Competitions Judged
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>Entry deadline</TableCell>
                <TableCell sx={{ color: "#fff" }}>Entries Assigned</TableCell>
                <TableCell sx={{ color: "#fff" }}>Entries Rated</TableCell>
                <TableCell sx={{ color: "#fff" }}>Average score</TableCell>
                <TableCell sx={{ color: "#fff" }}>Managing Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ratingsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.judge}</TableCell>
                  <TableCell>{row.competition}</TableCell>
                  <TableCell>{row.deadline}</TableCell>
                  <TableCell>{row.entriesAssigned}</TableCell>
                  <TableCell>{row.entriesRated}</TableCell>
                  <TableCell>{row.avgScore}</TableCell>
                  <TableCell>
                    {row.managingScore.map((action, subIndex) => (
                      <Button key={subIndex} variant="text" size="small">
                        {action}
                      </Button>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">What the Judge see</Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Competitions</TableCell>
                <TableCell sx={{ color: "#fff" }}>Entries Rated</TableCell>
                <TableCell sx={{ color: "#fff" }}>Total Entries</TableCell>
                <TableCell sx={{ color: "#fff" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {judgeData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.competition}</TableCell>
                  <TableCell>{row.entriesRated}</TableCell>
                  <TableCell>{row.totalEntries}</TableCell>
                  <TableCell>
                    <Stack spacing={1} direction="row">
                      <Button variant="text" size="small">
                        Rate
                      </Button>
                      <Button variant="text" size="small">
                        Submissions
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Bridgeport Business Challenge
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Entry</TableCell>
                <TableCell sx={{ color: "#fff" }}>Submitted</TableCell>
                <TableCell sx={{ color: "#fff" }}>Answer to Rate</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Your Average Rating
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Reviewer who have rated
                </TableCell>
                <TableCell sx={{ color: "#fff" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {challengeData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.entry}</TableCell>
                  <TableCell>{row.submitted}</TableCell>
                  <TableCell>{row.answerToRate}</TableCell>
                  <TableCell>{row.avgRating}</TableCell>
                  <TableCell>{row.reviewersRated}</TableCell>
                  <TableCell>
                    <Button variant="text" size="small">
                      {row.action}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">The RoseTree LLC</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Please save periodically to avoid losing scores and comments.
        </Typography>
        <Paper elevation={1} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                variant="body2"
                sx={{ backgroundColor: "#333", color: "#fff", p: 1 }}
              >
                Product or Service brief description (8 words or less)
              </Typography>
              <Typography sx={{ p: 1 }}>Lorem Ipsum</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body2"
                sx={{ backgroundColor: "#333", color: "#fff", p: 1 }}
              >
                A rating is not necessary
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="body2"
                sx={{ backgroundColor: "#333", color: "#fff", p: 1 }}
              >
                Value Proposition: Problem and your solution, how its better
                (and why) or how customer service is superior or evidence your
                target market is underserved
              </Typography>
              <Typography sx={{ p: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body2"
                sx={{ backgroundColor: "#333", color: "#fff", p: 1 }}
              >
                Rate Question - 5 is high
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <Typography key={num} sx={{ mx: 1 }}>
                    {num}
                  </Typography>
                ))}
              </Box>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                placeholder="Reviewer Comments:"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="body2"
                sx={{ backgroundColor: "#333", color: "#fff", p: 1 }}
              >
                Market Validation: Market niche and current research that
                substantiates sales forecast
              </Typography>
              <Typography sx={{ p: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body2"
                sx={{ backgroundColor: "#333", color: "#fff", p: 1 }}
              >
                Rate Question - 5 is high
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <Typography key={num} sx={{ mx: 1 }}>
                    {num}
                  </Typography>
                ))}
              </Box>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                placeholder="Reviewer Comments:"
              />
            </Grid>
          </Grid>
        </Paper>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button variant="contained">Save Only</Button>
          <Button variant="contained">
            Save and return to list of Submissions
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">
          Pitch Scoresheets for Videos or Live Presentations (Editable)
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 4 }}>
          Template for startups
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Name</TableCell>
                <TableCell sx={{ color: "#fff" }}>Company</TableCell>
                <TableCell sx={{ color: "#fff" }}>Product</TableCell>
                <TableCell sx={{ color: "#fff" }}>Prob</TableCell>
                <TableCell sx={{ color: "#fff" }}>Sol</TableCell>
                <TableCell sx={{ color: "#fff" }}>Mkt</TableCell>
                <TableCell sx={{ color: "#fff" }}>Fin</TableCell>
                <TableCell sx={{ color: "#fff" }}>Mgt</TableCell>
                <TableCell sx={{ color: "#fff" }}>TTL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[0, 0, 0].map((row, index) => (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="subtitle1" sx={{ mt: 4 }}>
          Scoring Legend
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Score each section from 1 to 5
        </Typography>
        <Box sx={{ ml: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            1. Problem:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControlLabel
              control={<Radio />}
              label="Strong Consumer pain or disease?"
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
            2. Solution:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControlLabel
              control={<Radio />}
              label="Technically feasible?"
            />
            <FormControlLabel control={<Radio />} label="Scalable" />
            <FormControlLabel control={<Radio />} label="Barriers to entry" />
            <FormControlLabel
              control={<Radio />}
              label="Compelling value Proposition"
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
            3. Market:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControlLabel
              control={<Radio />}
              label="Adequate sales plan to meet goals?"
            />
            <FormControlLabel control={<Radio />} label="Demand validated?" />
            <FormControlLabel
              control={<Radio />}
              label="Competition Manageable?"
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
            4. Finance:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControlLabel
              control={<Radio />}
              label="It's clear how the Company will make money?"
            />
            <FormControlLabel control={<Radio />} label="Safe Margins?" />
            <FormControlLabel
              control={<Radio />}
              label="Capital needs and use Clear"
            />
            <FormControlLabel
              control={<Radio />}
              label="Capital needs realistic for stage?"
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
            5. Management Team:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControlLabel control={<Radio />} label="Knowledgeable?" />
            <FormControlLabel control={<Radio />} label="Convincing?" />
          </Box>
        </Box>

        <Typography variant="subtitle1" sx={{ mt: 4 }}>
          Template for Established Companies
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Name</TableCell>
                <TableCell sx={{ color: "#fff" }}>Company</TableCell>
                <TableCell sx={{ color: "#fff" }}>Product</TableCell>
                <TableCell sx={{ color: "#fff" }}>A</TableCell>
                <TableCell sx={{ color: "#fff" }}>B</TableCell>
                <TableCell sx={{ color: "#fff" }}>C</TableCell>
                <TableCell sx={{ color: "#fff" }}>D</TableCell>
                <TableCell sx={{ color: "#fff" }}>E</TableCell>
                <TableCell sx={{ color: "#fff" }}>TTL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[0, 0, 0].map((row, index) => (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Scoring Legend
        </Typography>
        <Typography variant="body2">Score each section from 1 to 5</Typography>
        <Box sx={{ ml: 2, mt: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            A. Scalability: Do costs per unit decline as sales volume increases
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            B. Concept has been substantially de-risked through research and
            trials
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            C. Likelihood concept will thrive in competitive landscape
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            D. Management: Successful exits, knowledge, drive
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            E. Runaway: How long it will take to bring product to market
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Competition in which you are a viewer
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Your Competitions</TableCell>
                <TableCell sx={{ color: "#fff" }}>Organization</TableCell>
                <TableCell sx={{ color: "#fff" }}>Start Date</TableCell>
                <TableCell sx={{ color: "#fff" }}>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>mm/dd/yy</TableCell>
                <TableCell>mm/dd/yy</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>mm/dd/yy</TableCell>
                <TableCell>mm/dd/yy</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Link for judging
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Entries Assigned</TableCell>
                <TableCell sx={{ color: "#fff" }}>Entries Judged</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
   </PageHeader>
  );
};

export default BusinessPlanCompetition;
