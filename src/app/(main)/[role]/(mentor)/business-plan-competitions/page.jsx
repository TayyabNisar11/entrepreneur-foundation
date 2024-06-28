import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Link, Typography } from "@mui/material";

const BusinessPlanCompetition = () => {
  return (
    <PageHeader title="Business Plan Competitions">
      <Box sx={{ padding: 2 }}>
        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Entry Deadline
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Time
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Final Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Time
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Final Location
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    size="small"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    type="time"
                    defaultValue="00:00"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    type="time"
                    defaultValue="00:00"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField size="small" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    size="small"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    type="time"
                    defaultValue="00:00"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    type="time"
                    defaultValue="00:00"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={2}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Competition Title (Click for description)
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={2}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Managing Organization
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={4}>
                  <TextField size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={2}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Eligibility
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={2}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Total Cash Prize Pool
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={2}>
                  <TextField size="small" fullWidth />
                </TableCell>
                <TableCell colSpan={2}>
                  <TextField size="small" placeholder="$" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <TextField size="small" fullWidth />
                </TableCell>
                <TableCell colSpan={2}>
                  <TextField size="small" placeholder="$" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={2}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  LINK to create or edit an Application (You may submit only one
                  entry per competition)
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={2}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  URL for Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={2}>
                  <TextField size="small" fullWidth />
                </TableCell>
                <TableCell colSpan={2}>
                  <TextField size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography component="span" sx={{ fontWeight: "bold" }}>
                    Application started
                  </Typography>
                  <Typography component="span"> &gt; </Typography>
                  <Typography component="span" sx={{ fontWeight: "bold" }}>
                    Completed
                  </Typography>
                  <Typography component="span">
                    {" "}
                    &gt; Application reviewed{" "}
                  </Typography>
                  <Link href="#" underline="none" ml={4}>
                    View Ratings and Comments
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography component="span" sx={{ fontWeight: "bold" }}>
                    Application started
                  </Typography>
                  <Typography component="span"> &gt; </Typography>
                  <Typography component="span" sx={{ fontWeight: "bold" }}>
                    Completed
                  </Typography>
                  <Typography component="span">
                    {" "}
                    &gt; Application reviewed{" "}
                  </Typography>
                  <Link href="#" underline="none" ml={4}>
                    View Ratings and Comments
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Competitions {"I'm"} Judging
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Are you available to serve as a competition reviewer, schedule
          permitting?
        </Typography>
        <RadioGroup
          row
          aria-label="availability"
          name="availability"
          sx={{ marginTop: 1 }}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          You will be sent invitations to review. Competitions you accept will
          appear below.
        </Typography>
      </Box>
      <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Organization
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Start Date
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                End Date
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Entries Assigned
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Entries Rated
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} sx={{ fontWeight: "bold" }}>
                Organization A
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  Competition A
                </Typography>{" "}
                
              </TableCell>
              <TableCell>
                <Link href="#" underline="none">
                  Rate
                </Link>
              </TableCell>
              <TableCell>
                <TextField
                size="small"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </TableCell>
              <TableCell>
                <TextField
                size="small"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </TableCell>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  Competition B
                </Typography>{" "}
                
              </TableCell>
              <TableCell>
                <Link href="#" underline="none">
                  Rate
                </Link>
              </TableCell>
              <TableCell>
                <TextField
                size="small"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </TableCell>
              <TableCell>
                <TextField
                size="small"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </TableCell>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6} sx={{ fontWeight: "bold" }}>
                Organization 2
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  Competition A
                </Typography>{" "}
                
              </TableCell>
              <TableCell>
                <Link href="#" underline="none">
                  Rate
                </Link>
              </TableCell>
              <TableCell>
                <TextField
                size="small"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </TableCell>
              <TableCell>
                <TextField
                size="small"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </TableCell>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </PageHeader>
  );
};

export default BusinessPlanCompetition;
