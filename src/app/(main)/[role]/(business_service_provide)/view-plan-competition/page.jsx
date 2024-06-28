import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const ViewPlanCompetition = () => {
  return (
    <PageHeader title="Business Plan Competitions">
      <Box sx={{ margin: 2 }}>
        {/* Availability Question */}
        <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
          <FormLabel component="legend">
            Are you available to serve as a competition reviewer, schedule
            permitting?
          </FormLabel>
          <RadioGroup
            row
            aria-label="availability"
            name="availability"
            defaultValue="yes"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Typography variant="body2" gutterBottom>
          You will be sent invitations to review. Competitions you accept will
          appear below.
        </Typography>

        {/* Competitions Table */}
        <TableContainer
          component={Paper}
          sx={{ borderWidth: 1, borderStyle: "solid", borderColor: "grey.400" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Organization
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Competition
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Start Date
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  End Date
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Entries Assigned
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Entries Rated
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={6}
                  sx={{ fontWeight: 600, border: "1px solid grey" }}
                >
                  Organization 1
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ display: "none" }} />
                <TableCell sx={{ border: "1px solid grey" }}>
                  <Link href="#" target="_blank" rel="noopener">
                    Competition A: Click for description
                  </Link>
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ display: "none" }} />
                <TableCell sx={{ border: "1px solid grey" }}>
                  <Link href="#" target="_blank" rel="noopener">
                    Competition B: Click for description
                  </Link>
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  colSpan={6}
                  sx={{ fontWeight: 600, border: "1px solid grey" }}
                >
                  Organization 2
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ display: "none" }} />
                <TableCell sx={{ border: "1px solid grey" }}>
                  <Link href="#" target="_blank" rel="noopener">
                    Competition A: Click for description
                  </Link>
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>
                  mm/dd/yy
                </TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
                <TableCell sx={{ border: "1px solid grey" }}>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default ViewPlanCompetition;
