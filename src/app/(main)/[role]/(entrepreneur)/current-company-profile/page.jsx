"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Paper,
  Stack,
  InputLabel,
  Table,TableBody
} from "@mui/material";
import PageHeader from "@/components/PageHeader";
import EFInput from "@/components/ui/Input";
import { StyledButton } from '@/components/ui/button';
import {
  StyledTableContainer,
  StyledTableHead,
  StyledTableCell,
  StyledTableRow,
} from "@/components/ui/table";

const legalStructures = [
  "Sole Proprietorship",
  "LLC",
  "Partnership",
  "C corp",
  "S corp",
  "Benefit Corporation",
  "B Corp",
  "Non-Profit",
];

const stagesOfDevelopment = [
  {
    stage: "Pre Revenue (or at most minimal sales from test marketing)",
    details: "Concept Sales (Exploring Ideas)",
  },
  { stage: "", details: "Developing MVP (Minimum viable product/service)" },
  { stage: "", details: "Alpha stage (MVP being lab tested)" },
  { stage: "", details: "Beta stage (MVP being tested by customers)" },
  { stage: "", details: "Preparing for Launch" },
  {
    stage: "Post Revenue (Established Business)",
    details: "Start-up: Sales <$100k",
  },
  { stage: "", details: "Early stage: Sales <$500k" },
  { stage: "", details: "Expansion stage: Sales $500k-$5mm" },
  { stage: "", details: "Later-Stage: Sales <$5mm" },
];

const industries = [
  "Acoustics",
  "Aerospace",
  "Agriculture & Aquaculture",
  "Artificial Intelligence (AI)",
  "Apparel and Textiles",
  "Assistive Technology for the handicapped",
  "Automotive Technology",
];

const CurrentCompanyProfile = () => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedStructure, setSelectedStructure] = useState(
    legalStructures[0]
  );

  const handleStructureChange = (structure) => {
    setSelectedStructure(structure);
  };

  const handleIndustryChange = (event) => {
    const value = event.target.value;
    setSelectedIndustries(typeof value === "string" ? value.split(",") : value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <PageHeader title="Current Company Profile">
      <Box>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box flexGrow={1}>
                  <EFInput label="Company Name" fullWidth sx={{ mb: 2 }} />
                </Box>
                <StyledButton
                  size={12}
                  colorVariant="secondary"
                  sx={{
                    maxWidth: "150px",
                    maxHeight: "40px",
                    mt: "30px !important",
                  }}
                >
                  Add
                </StyledButton>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <Typography fontSize="14px" fontWeight={500} sx={{ mb: 1 }}>
                  Category
                </Typography>
                <Typography fontSize="13px" fontWeight={400} sx={{ mb: 2 }}>
                  Check the description that most closely matches your company
                </Typography>
                <RadioGroup
                  aria-label="category"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <Stack mt={2} direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        p: 1,
                        px: 3,
                        bgcolor: "white",
                        borderRadius: "10px",
                        border: "1px solid gray",
                      }}
                    >
                      <FormControlLabel
                        value="personal"
                        control={<Radio />}
                        label="Personal Business"
                        sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px', fontWeight: 400 } }}
                      />
                    </Box>
                    <Box
                      lineHeight="1.2"
                      sx={{
                        fontSize: "13px",
                        fontWeight: "300",
                        fontStyle: "italic",
                      }}
                    >
                      Personal Business <br />
                      <Typography variant="body2" color="textSecondary">
                        (limited market and does not need venture capital to
                        reach full potential)
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack my={2} direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        p: 1,
                        px: 3,
                        bgcolor: "white",
                        borderRadius: "10px",
                        border: "1px solid gray",
                      }}
                    >
                      <FormControlLabel
                        value="venture"
                        control={<Radio />}
                        label="Venture Enterprise"
                        sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px', fontWeight: 400 } }}
                      />
                    </Box>
                    <Box
                      lineHeight="1.2"
                      sx={{
                        fontSize: "13px",
                        fontWeight: "300",
                        fontStyle: "italic",
                      }}
                    >
                      Venture Enterprise <br />
                      <Typography variant="body2" color="textSecondary">
                        (scalable, capital intensive, and national market)
                      </Typography>
                    </Box>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize="14px" fontWeight={500} sx={{ mb: 1 }}>
                Industry
              </Typography>
              <Typography fontSize="13px" fontWeight={400} sx={{ mb: 2 }}>
                Select up to 3 industries
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Industry</InputLabel>
                <Select
                  multiple
                  value={selectedIndustries}
                  onChange={handleIndustryChange}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {industries.map((industry) => (
                    <MenuItem key={industry} value={industry}>
                      {industry}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize="14px" fontWeight={500} sx={{ mb: 1 }}>
                Company Brief Description
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Company Brief Description"
                helperText="Limit 60 characters and spaces"
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  mb: 1,
                }}
                fontWeight={500}
                fontSize="14px"
              >
                Online Location
                <Typography component="span" fontSize="12px" fontWeight={400} fontStyle="italic">
                  (Website, FB, IG, Shopify, Etc.)
                </Typography>
              </Typography>
              <TextField
                fullWidth
                InputProps={{ startAdornment: <span>www.</span> }}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize="14px" fontWeight={500} sx={{ mb: 1 }}>
                Company Detailed Description
              </Typography>
              <Typography fontSize="13px" fontWeight={400} sx={{ mb: 2 }}>
                <b>Note:</b> Do not divulge trade secrets. Your Company profile
                is viewable by Organization Administrators, Mentors and Capital
                Providers.
              </Typography>
              <TextField
                multiline
                rows={4}
                fullWidth
                label="Company Detailed Description"
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize="14px" fontWeight={500} sx={{ mb: 1 }}>
                Date Founded
              </Typography>
              <Typography fontSize="13px" fontWeight={400} sx={{ mb: 2 }}>
                <b>Note:</b> Date of legal formation (LLC, C Corp, etc.) or date
                of first sale; if neither has occurred, enter {"today's"} date.
              </Typography>
              <TextField type="date" fullWidth sx={{ mb: 2 }} />
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Legal Structure of Company
            </Typography>
            <StyledTableContainer>
              <Table>
                <TableBody>
                  {legalStructures.map((structure, index) => (
                    <StyledTableRow
                      key={structure}
                      hover
                      selected={selectedStructure === structure}
                      onClick={() => handleStructureChange(structure)}
                      sx={{
                        cursor: "pointer",
                        backgroundColor:
                          selectedStructure === structure
                            ? "grey.300"
                            : "inherit",
                      }}
                    >
                      <StyledTableCell>{index + 1}</StyledTableCell>
                      <StyledTableCell>{structure}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Stages of Development of Company
            </Typography>
            <StyledTableContainer>
              <Table>
                <TableBody>
                  {stagesOfDevelopment.map((stage, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{index + 1}</StyledTableCell>
                      <StyledTableCell>{stage.stage}</StyledTableCell>
                      <StyledTableCell>{stage.details}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center">
            <StyledButton size={16} colorVariant="primary">
              Update Company Information
            </StyledButton>
          </Grid>
        </Grid>
      </Box>
    </PageHeader>
  );
};

export default CurrentCompanyProfile;