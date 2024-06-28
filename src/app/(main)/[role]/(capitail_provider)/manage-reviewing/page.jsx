"use client";
import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Typography,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

const fundingPrograms = ["Program 1", "Program 2", "Program 3"];
const categories = ["All", "Personal", "Venture"];
const industries = ["All", "Acoustics", "Aerospace and Defense"];

const ManageReviewing = () => {
  const [selectedProgram, setSelectedProgram] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedIndustries, setSelectedIndustries] = React.useState([]);

  const handleProgramChange = (event) => {
    setSelectedProgram(event.target.value);
  };

  const handleCategoriesChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  const handleIndustriesChange = (event) => {
    setSelectedIndustries(event.target.value);
  };

  return (
    <PageHeader title="Manage Reviewing">
      <Paper elevation={1} sx={{ padding: 2 }}>
        <Typography fontSize="15px" fontWeight={500}>
          Select a Funding Program
        </Typography>
        <FormControl fullWidth size="small" sx={{ marginBottom: 2 }}>
          <InputLabel>Select a Program</InputLabel>
          <Select
            value={selectedProgram}
            onChange={handleProgramChange}
            label="Select a Program"
          >
            {fundingPrograms.map((program) => (
              <MenuItem key={program} value={program}>
                {program}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography fontSize="15px" fontWeight={500} sx={{ marginTop: 2 }}>
          Assign individuals to review submissions
        </Typography>
        <Typography fontSize="12px" sx={{ marginBottom: 2 }}>
          If individuals are not in the system, you can register them.
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  First Name (Click for Profile)
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Last Name (Click for LinkedIn)
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Email (Add all to clipboard)
                </TableCell>
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

        <Typography fontSize="15px" fontWeight={500}>
          Add Reviewers to Competition.
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  First Name (Click for Profile)
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Last Name (Click to login as Reviewer to correct errors or
                  edit feedback)
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Email (Add all to clipboard)
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Category Assigned
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Industries Assigned
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <FormControl fullWidth size="small">
                    <Select
                      multiple
                      value={selectedCategories}
                      onChange={handleCategoriesChange}
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          <Checkbox
                            checked={selectedCategories.indexOf(category) > -1}
                          />
                          <ListItemText primary={category} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl fullWidth size="small">
                    <Select
                      multiple
                      value={selectedIndustries}
                      onChange={handleIndustriesChange}
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {industries.map((industry) => (
                        <MenuItem key={industry} value={industry}>
                          <Checkbox
                            checked={selectedIndustries.indexOf(industry) > -1}
                          />
                          <ListItemText primary={industry} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <FormControl fullWidth size="small">
                    <Select
                      multiple
                      value={selectedCategories}
                      onChange={handleCategoriesChange}
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          <Checkbox
                            checked={selectedCategories.indexOf(category) > -1}
                          />
                          <ListItemText primary={category} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl fullWidth size="small">
                    <Select
                      multiple
                      value={selectedIndustries}
                      onChange={handleIndustriesChange}
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {industries.map((industry) => (
                        <MenuItem key={industry} value={industry}>
                          <Checkbox
                            checked={selectedIndustries.indexOf(industry) > -1}
                          />
                          <ListItemText primary={industry} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography fontSize="15px" fontWeight={500} sx={{ marginTop: 2 }}>
          Add a new Judge
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={12} sm={4}>
            <TextField label="First Name" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Last Name" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Email" fullWidth size="small" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Category Assigned</InputLabel>
              <Select
                multiple
                value={selectedCategories}
                onChange={handleCategoriesChange}
                renderValue={(selected) => selected.join(", ")}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    <Checkbox
                      checked={selectedCategories.indexOf(category) > -1}
                    />
                    <ListItemText primary={category} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Industries Assigned</InputLabel>
              <Select
                multiple
                value={selectedIndustries}
                onChange={handleIndustriesChange}
                renderValue={(selected) => selected.join(", ")}
              >
                {industries.map((industry) => (
                  <MenuItem key={industry} value={industry}>
                    <Checkbox
                      checked={selectedIndustries.indexOf(industry) > -1}
                    />
                    <ListItemText primary={industry} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize="12px">
            Click to login as the Judge to correct errors or edit feedback.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginTop: 2 }}
          >
            Add
          </Button>
        </Stack>
      </Paper>

      <Paper elevation={1} sx={{ padding: 2 }}>
        <Typography fontSize="15px" fontWeight={500} marginBottom={2}>
          Rating Histories of Reviewers
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Reviewer Click for profile
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Funding Program
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Applications Reviewed
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Average score
                </TableCell>
                <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                  Managing Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>Reviewer {index + 1}</TableCell>
                  <TableCell>Competition A</TableCell>
                  <TableCell>#</TableCell>
                  <TableCell>#</TableCell>
                  <TableCell sx={{ display: "flex", gap: 3 }}>
                    <a href="#" sx={{ marginRight: 2 }}>
                      Remove
                    </a>
                    <a href="#">Restore</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography fontSize="12px" marginTop={2}>
          Removing a judge will rescind judging privileges and delete all scores
          already entered. “Restore” allows reinstating the Judge and scores.
        </Typography>
      </Paper>

      <Typography fontSize="15px" fontWeight={500} marginBottom={2}>
        What the Reviewer see
      </Typography>
      <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Competitions
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Entries Rated
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Total Entries
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "black", color: "white" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Bridgeport Business Challenge</TableCell>
              <TableCell>2</TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                <a href="#" sx={{ marginRight: 2 }}>
                  Rate Submissions
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Food Industry Business Plan Competition 2021
              </TableCell>
              <TableCell>2</TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                <a href="#" sx={{ marginRight: 2 }}>
                  Rate Submissions
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Second Table */}
      <Typography fontSize="15px" fontWeight={500} marginBottom={2}>
        Bridgeport Business Challenge
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Entry
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Submitted
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Answer to Rate
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Your Average Rating
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Reviewer who have rated
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "black", color: "white" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>The Rose Tree LLC</TableCell>
              <TableCell>10/14/2021</TableCell>
              <TableCell>3</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>
                <a href="#" sx={{ marginRight: 2 }}>
                  Edit ratings & notes
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vera Coffee LLC</TableCell>
              <TableCell>10/14/2021</TableCell>
              <TableCell>3</TableCell>
              <TableCell>3.67</TableCell>
              <TableCell>3.67</TableCell>
              <TableCell>
                <a href="#" sx={{ marginRight: 2 }}>
                  Edit ratings & notes
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Paper elevation={1} sx={{ padding: 2 }}>
        <Typography fontSize="15px" fontWeight={500} marginBottom={2}>
          The RoseTree LLC
        </Typography>
        <Typography fontSize="12px" marginBottom={4}>
          Please save periodically to avoid losing scores and comments
        </Typography>

        {/* Section 1 */}
        <Grid container spacing={2} marginBottom={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Typography
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: 1,
                }}
                fontSize="14px"
                fontWeight={500}
              >
                Product or Service brief description (8 words or less)
              </Typography>
              <Typography sx={{ padding: 1 }}>Lorem Ipsum</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Typography
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: 1,
                }}
                fontSize="14px"
                fontWeight={500}
              >
                A rating is not necessary
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Section 2 */}
        <Grid container spacing={2} marginBottom={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Typography
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: 1,
                }}
                fontSize="14px"
                fontWeight={500}
              >
                Value Proposition: Problem and your solution, how {"it's"}{" "}
                better (and why) or how customer service is superior or evidence
                your target market is underserved
              </Typography>
              <Typography sx={{ padding: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Typography
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: 1,
                }}
                fontSize="14px"
                fontWeight={500}
              >
                Rate Question - 5 is high
              </Typography>
              <RadioGroup row>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
              <Typography marginTop={2}>Reviewer Comments:</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                size="small"
              />
            </Paper>
          </Grid>
        </Grid>

        {/* Section 3 */}
        <Grid container spacing={2} marginBottom={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Typography
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: 1,
                }}
                fontSize="14px"
                fontWeight={500}
              >
                Market Validation: Market niche and current research that
                substantiates sales forecast
              </Typography>
              <Typography sx={{ padding: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Typography
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: 1,
                }}
                fontSize="14px"
                fontWeight={500}
              >
                Rate Question - 5 is high
              </Typography>
              <RadioGroup row>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
              <Typography marginTop={2}>Reviewer Comments:</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                size="small"
              />
            </Paper>
          </Grid>
        </Grid>

        {/* Save Buttons */}
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Save Only
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Save and return to list of Submissions
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </PageHeader>
  );
};

export default ManageReviewing;
