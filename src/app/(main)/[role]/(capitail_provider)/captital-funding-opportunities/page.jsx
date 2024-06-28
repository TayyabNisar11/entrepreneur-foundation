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
  Link,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Delete, ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { FaDollarSign } from "react-icons/fa6";
import EFInput from "@/components/ui/Input";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
import { styled } from "@mui/system";

// Custom styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  color: "#FFF",
  textAlign: "center",
}));
const BusinessPlanCompetition = () => {
  return (
    <PageHeader title="Funding Opportunities">
      <TableContainer sx={{ my: 2 }}>
        <Table aria-label="funding program table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={2}>
                Funding Program Title
              </StyledTableCell>
              <StyledTableCell>Capital Provider</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer sx={{ my: 2 }}>
        <Table aria-label="funding available table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={2}>Funding Available</StyledTableCell>
              <StyledTableCell rowSpan={2}>
                Link for Application
              </StyledTableCell>
              <StyledTableCell rowSpan={2}>URL for Details</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell align="center">Minimum</StyledTableCell>
              <StyledTableCell align="center">Maximum</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">$</TableCell>
              <TableCell align="center">$</TableCell>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">#</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer sx={{ my: 2 }}>
        <Table aria-label="description table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Application Question</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Link href="#">Create or edit application questions</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer sx={{ my: 2 }}>
        <Table aria-label="managing funding table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Managing Funding Application Template
              </StyledTableCell>
              <StyledTableCell>
                Email to receive Submitted Funding Applications
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ display: "flex", gap: 2 }}>
                <Link href="#">Save as draft</Link>{" "}
                <Link href="#">Publish</Link>{" "}
                <Link href="#">Create a Copy</Link>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="opportunity table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Funding Opportunity Name</StyledTableCell>
              <StyledTableCell>Fund Entity</StyledTableCell>
              <StyledTableCell>Application</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Title of Opportunity #1</TableCell>
              <TableCell>#</TableCell>
              <TableCell>
                <Link href="#">View</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title of Opportunity #2</TableCell>
              <TableCell>#</TableCell>
              <TableCell>
                <Link href="#">View</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="eligibility table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Eligibility Requirements</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="funding available table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={2}>Funding Available</StyledTableCell>
              <StyledTableCell>Link for Application</StyledTableCell>
              <StyledTableCell>URL of Details</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell align="center">Minimum</StyledTableCell>
              <StyledTableCell align="center">Maximum</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">$</TableCell>
              <TableCell align="center">$</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="description table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Application Questions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Link href="#">Create or edit application questions</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Link href="#">Create or edit application questions</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="manage applications table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Manage Applications</StyledTableCell>
              <StyledTableCell>
                Email Address that will receive applications
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Link href="#">Update published application</Link>
                <br />
                <Link href="#">Create a Copy</Link>
                <br />
                <Link href="#">Unpublish</Link>
                <br />
                <Link href="#">Archive</Link>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" gutterBottom>
        Submitted Applications spreadsheet
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Columns with underlined headers are sortable. Click once to sort ascending, again to sort descending." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="To view Profile, click on Name link." />
        </ListItem>
      </List>

      <TableContainer sx={{ my: 2 }}>
        {/* First Table */}
        <Stack direction="row" justifyContent="end">
          <Stack direction="row" gap={2}>
            <Link href="#" style={{ color: "#000" }}>
              Download file as
            </Link>{" "}
            <Link href="#" style={{ color: "#000" }}>
              .xls
            </Link>{" "}
            <Link href="#" style={{ color: "#000" }}>
              .xlsx
            </Link>{" "}
            <Link href="#" style={{ color: "#000" }}>
              .csv
            </Link>
          </Stack>
        </Stack>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Applicant Name</StyledTableCell>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell>Company</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Second Table */}
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Last Edit</StyledTableCell>
              <StyledTableCell>Average Ratings</StyledTableCell>
              <StyledTableCell>HeadQuarters City</StyledTableCell>
              <StyledTableCell>ST</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Manage</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>mm/dd/yy</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Personal Venture</TableCell>
              <TableCell>
                <Link href="#">View</Link>
                <br />
                <Link href="#">Edit</Link>
                <br />
                <Link href="#">Ratings</Link>
                <br />
                <Link href="#">Delete</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>mm/dd/yy</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Personal Venture</TableCell>
              <TableCell>
                <Link href="#">View</Link>
                <br />
                <Link href="#">Edit</Link>
                <br />
                <Link href="#">Ratings</Link>
                <br />
                <Link href="#">Delete</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Third Table */}
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Email{" "}
                <span style={{ fontStyle: "italic" }}>
                  (Add all to clipboard)
                </span>
              </StyledTableCell>
              <StyledTableCell>Custom Question</StyledTableCell>
              <StyledTableCell>Custom Question</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ py: 4 }}>
        <Typography variant="h6">
          Manage Funding Application Questions
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          Identification and Stock questions may not be edited, as this would
          prevent compiling ecosystem data. You may, however, add custom
          questions and add options to drop-down tables. 
        </Typography>
        <Typography variant="h6">Select funding Opportunities</Typography>
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
    </PageHeader>
  );
};

export default BusinessPlanCompetition;
