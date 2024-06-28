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

      <Box sx={{ padding: 2 }}>
        <Typography fontSize="15px" fontWeight={500}>
          Calendar of Events
        </Typography>
        <Typography mb={3} fontSize="15px" fontWeight={400}>
          Major events occurring only 1 or 2 times per year are in Bold.   Times
          are GMT-400 (NYC)
        </Typography>

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
                  Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Time From
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  To
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Purpose
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
                    type="time"
                    defaultValue="00:00"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
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
                    type="time"
                    defaultValue="00:00"
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
                >
                  Cost
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell  align="center">#</TableCell>
                <TableCell  align="center">#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell  align="center">#</TableCell>
                <TableCell  align="center">#</TableCell>
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
                  Location
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  City/State
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  URL for details and registration
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default BusinessPlanCompetition;
