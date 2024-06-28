"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  FormControl,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Link as MuiLink,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import EFInput from "@/components/ui/Input";
import { styled } from "@mui/system";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const states = ["All", "Alabama", "Alaska", "Arizona", "Arkansas"];

const schools = [
  "Albertus Magnus College",
  "Asnuntuck Community College",
  "Capital Community College",
  "Central Connecticut State University (CCSU)",
  "Charter Oak State College",
];

const options = [
  "Weekly",
  "Bi-weekly",
  "Monthly",
  "Quarterly",
  "Semi-annually",
];

const commitments = [
  {
    point: "Mentor entrepreneurs and ventures:",
    subpoints: [
      "Without an expectation of compensation.",
      "Without discrimination based on race, color, religion, gender, national origin, ethnicity, disability, or age.",
    ],
  },
  {
    point:
      "Preserve confidentiality of all information related to venture and entrepreneur.",
    subpoints: [
      "Do not to share information beyond what is necessary to support the entrepreneur.",
    ],
  },
  {
    point:
      "Neither seek, nor accept if offered, any claim on the ventures, ideas or intellectual property of the entrepreneurs.",
    subpoints: [],
  },
  {
    point: "Avoid conflicts of interest such as:",
    subpoints: [
      "Soliciting business from mentors while mentoring and for at least 12 months afterward.",
      "Investing in a mentored venture without first informing the Organization and removing yourself as a mentor.",
    ],
  },
  {
    point: "Maintain professionalism:",
    subpoints: [
      "Return phone calls, emails and communications in a timely basis.",
      "Coach without criticizing.",
    ],
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#4f4f4f",
  color: theme.palette.common.white,
  border: "1px solid #e0e0e0",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  border: "1px solid #e0e0e0",
}));

const organizations = [
  { name: "Example Organization 1", mentor: false, review: false },
  { name: "Example Organization 2", mentor: false, review: false },
];

const MentoringAndReviewing = () => {
  const [selectedValue, setSelectedValue] = useState("Weekly");
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedSchools, setSelectedSchools] = useState([]);

  const handleStateChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedStates(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSchoolChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedSchools(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCheckboxChange = (index, field) => {
    const updatedOrganizations = [...organizations];
    updatedOrganizations[index][field] = !updatedOrganizations[index][field];
  };

  return (
    <PageHeader title="Mentoring and Reviewing">
      <Box>
        <List>
          {commitments.map((commitment, index) => (
            <Box key={index} mb={0.5}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography variant="body1" fontWeight={500}>
                      {index + 1}. {commitment.point}
                    </Typography>
                  }
                />
              </ListItem>
              {commitment.subpoints.length > 0 && (
                <List component="div" disablePadding>
                  {commitment.subpoints.map((subpoint, subIndex) => (
                    <ListItem key={subIndex} sx={{ pl: 4 }} disableGutters>
                      <ListItemIcon>
                        <CircleIcon sx={{ fontSize: "0.5rem" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">{subpoint}</Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" mt={4}>
          Limits of Mentoring Commitment
        </Typography>
        <EFInput label="1. Maximum number of mentees you can advise at any one time" />
        <Box mt={2}>
          <Typography
            variant="h6"
            fontSize="14px"
            fontWeight="500"
            gutterBottom
          >
            Maximum Frequency of Meetings
          </Typography>
          <RadioGroup value={selectedValue} onChange={handleChange}>
            <List>
              {options.map((option, index) => (
                <Box
                  key={index}
                  mb={2}
                  p={1}
                  borderRadius="10px"
                  border="1px solid #e0e0e0"
                  maxWidth="300px"
                >
                  <FormControlLabel
                    value={option}
                    control={<Radio />}
                    label={<Typography fontSize="14px">{option}</Typography>}
                    style={{ margin: 0, width: "100%" }}
                  />
                </Box>
              ))}
            </List>
          </RadioGroup>
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontSize="14px"
            fontWeight="500"
            gutterBottom
          >
            3. States to which you would like to restrict mentoring (Use
            ctrl-click to select multiple states)
          </Typography>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="state-select-label">Select States</InputLabel>
            <Select
              size="small"
              labelId="state-select-label"
              multiple
              value={selectedStates}
              onChange={handleStateChange}
              input={
                <OutlinedInput
                  id="select-multiple-chip"
                  label="Select States"
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography
            variant="h6"
            fontSize="14px"
            fontWeight="500"
            gutterBottom
          >
            4. Schools whose students or alumni you would like to assist
            (ctrl-click to select multiple schools)
          </Typography>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="school-select-label">Select Schools</InputLabel>
            <Select
              size="small"
              labelId="school-select-label"
              multiple
              value={selectedSchools}
              onChange={handleSchoolChange}
              input={
                <OutlinedInput
                  id="select-multiple-chip"
                  label="Select Schools"
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {schools.map((school) => (
                <MenuItem key={school} value={school}>
                  {school}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <EFInput label="Others" subLabel="schools not listed" />

        <Box display="flex" justifyContent="flex-end" py={3}>
          <Button variant="contained">Update Limits on Mentoring</Button>
        </Box>
        <Box>
          <Typography
            variant="h6"
            fontSize="14px"
            fontWeight="500"
            gutterBottom
          >
            Organization you wish to Support
          </Typography>
          <Typography variant="body2" gutterBottom>
            You can volunteer to mentor and/or review submissions to business
            plan competitions.
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Organization In Ecosystem</StyledTableCell>
                  <StyledTableCell>
                    Available to Mentor Entrepreneurs
                  </StyledTableCell>
                  <StyledTableCell>
                    Available to Review Submissions
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {organizations.map((organization, index) => (
                  <StyledTableRow key={index}>
                    <TableCell>{organization.name}</TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={organization.mentor}
                            onChange={() =>
                              handleCheckboxChange(index, "mentor")
                            }
                            color="primary"
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={!organization.mentor}
                            onChange={() =>
                              handleCheckboxChange(index, "mentor")
                            }
                            color="primary"
                          />
                        }
                        label="No"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={organization.review}
                            onChange={() =>
                              handleCheckboxChange(index, "review")
                            }
                            color="primary"
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={!organization.review}
                            onChange={() =>
                              handleCheckboxChange(index, "review")
                            }
                            color="primary"
                          />
                        }
                        label="No"
                      />
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={3}>
            <Typography variant="body2" gutterBottom>
              By selecting yes to Mentoring, I hereby ascribe to the{" "}
              <MuiLink href="#" underline="always">
                Mentor Code of Conduct
              </MuiLink>
              .
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Note: You may toggle your availability on and off as your schedule
              allows.
            </Typography>
          </Box>
        </Box>
      </Box>
    </PageHeader>
  );
};

export default MentoringAndReviewing;
