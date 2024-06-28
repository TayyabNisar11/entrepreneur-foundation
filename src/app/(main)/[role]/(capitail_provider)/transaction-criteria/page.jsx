"use client";
import PageHeader from "@/components/PageHeader";

import * as React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

// List of US states
const states = [
  "All",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const industries = [
  "Acoustics",
  "Aerospace",
  "Agriculture & Aquaculture",
  "Artificial Intelligence (AI)",
  "Apparel and Textiles",
  "Assistive Technology for the handicapped",
  // Add more industries if needed
];

// Options for Company Stages
const stages = [
  "Concept Sales (Exploring ideas)",
  "Developing MVP (Minimum viable product/service)",
  "Alpha stage (MVP being lab tested)",
  "Beta stage (MVP being tested by customers)",
  "Prepare for Launch",
  "Start-up: Sales <$100k",
  "Early stage: Sales <$500k",
  "Expansion stage: Sales $500k-5mm",
  "Later-Stage: Sales>$5mm",
  // Add more stages if needed
];
const transactionRanges = [
  "$50",
  "$500",
  "$5000",
  "$25,000",
  "$50,000",
  "$100,000",
  "$250,000",
  "$500,000",
  "$1,000,000",
  "$2,500,000",
  "$5,000,000",
  "$10,000,000",
  "$20,000,000",
  "Over $20,000,000",
  "No funds are available currently",
];

const TransectionCriteria = () => {
  const [selectedStates, setSelectedStates] = React.useState([]);
  const [selectedIndustries, setSelectedIndustries] = React.useState([]);
  const [selectedStages, setSelectedStages] = React.useState([]);
  const [selectedFromRanges, setSelectedFromRanges] = React.useState([]);
  const [selectedToRanges, setSelectedToRanges] = React.useState([]);
  const handleIndustryChange = (event) => {
    setSelectedIndustries(event.target.value);
  };
  const handleToRangeChange = (event) => {
    setSelectedToRanges(event.target.value);
  };
  const handleStageChange = (event) => {
    setSelectedStages(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedStates(event.target.value);
  };
  const handleFromRangeChange = (event) => {
    setSelectedFromRanges(event.target.value);
  };

  return (
    <PageHeader title="Transaction Criteria">
      <FormControl fullWidth>
        <Typography py={1} fontSize="14px" fontWeight={500} color="initial">
          States
        </Typography>
        <Select
          size="small"
          multiple
          value={selectedStates}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              <Checkbox checked={selectedStates.indexOf(state) > -1} />
              <ListItemText primary={state} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <Typography py={1} fontSize="14px" fontWeight={500} color="initial">
          Industry Preferences
        </Typography>
        <Select
          size="small"
          multiple
          value={selectedIndustries}
          onChange={handleIndustryChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {industries.map((industry) => (
            <MenuItem key={industry} value={industry}>
              <Checkbox checked={selectedIndustries.indexOf(industry) > -1} />
              <ListItemText primary={industry} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <Typography py={1} fontSize="14px" fontWeight={500} color="initial">
          Company Stages
        </Typography>
        <Select
          size="small"
          multiple
          value={selectedStages}
          onChange={handleStageChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {stages.map((stage) => (
            <MenuItem key={stage} value={stage}>
              <Checkbox checked={selectedStages.indexOf(stage) > -1} />
              <ListItemText primary={stage} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography
        py={1}
        mt={3}
        fontSize="14px"
        fontWeight={500}
        color="initial"
      >
        Range of Transaction Amounts
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <Typography py={1} fontSize="14px" fontWeight={500} color="initial">
              From
            </Typography>
            <Select
              size="small"
              multiple
              value={selectedFromRanges}
              onChange={handleFromRangeChange}
              renderValue={(selected) => selected.join(", ")}
            >
              {transactionRanges.map((range) => (
                <MenuItem key={range} value={range}>
                  <Checkbox checked={selectedFromRanges.indexOf(range) > -1} />
                  <ListItemText primary={range} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <Typography py={1} fontSize="14px" fontWeight={500} color="initial">
              To
            </Typography>
            <Select
              size="small"
              multiple
              value={selectedToRanges}
              onChange={handleToRangeChange}
              renderValue={(selected) => selected.join(", ")}
            >
              {transactionRanges.map((range) => (
                <MenuItem key={range} value={range}>
                  <Checkbox checked={selectedToRanges.indexOf(range) > -1} />
                  <ListItemText primary={range} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <FormControl margin="normal" fullWidth>
        <Typography py={1} fontSize="14px" fontWeight={500} color="initial">
          Other eligibility Criteria
        </Typography>
        <TextField size="small" fullWidth />
      </FormControl>
      <Button sx={{mt:3}} variant="contained" color="primary" size="large">
        Update Transaction Criteria
      </Button>
    </PageHeader>
  );
};

export default TransectionCriteria;
