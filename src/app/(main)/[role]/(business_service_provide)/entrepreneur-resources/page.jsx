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
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const guidesAndVideosData = [
  {
    category: "Financial planning spreadsheets",
    link: "https://entrepreneurshipfoundation.org/spreadsheets",
    media: "Excel",
  },
  {
    category: "Free instructional PowerPoints",
    link: "https://entrepreneurshipfoundation.org/powerpoints-1",
    media: "PPT",
  },
  {
    category: "Training Webinars",
    link: "https://entrepreneurshipfoundation.org/training-webinars",
    media: "Website",
  },
  {
    category: "Team Formation platform",
    link: "https://entrepreneurshipfoundation.org/team-formation",
    media: "SAAS",
  },
];

const calendarEventRows = [
  {
    date: "mm/dd/yy",
    timeFrom: "00:00 PM",
    timeTo: "00:00 PM",
    title: "",
    purpose: "",
  },
  {
    date: "mm/dd/yy",
    timeFrom: "00:00 PM",
    timeTo: "00:00 PM",
    title: "",
    purpose: "",
  },
];

const EntrepreneurResources = () => {
  return (
    <PageHeader title="Entrepreneur and Investor  service we provide">
      <Box sx={{ margin: 2 }}>
        {/* Library of guides and videos */}
        <Typography variant="h6" gutterBottom>
          Library of guides and videos
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Topic Category
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Document type (Click to view)
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Media
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guidesAndVideosData.map((row) => (
                <TableRow key={row.category}>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <Link href={row.link} target="_blank" rel="noopener">
                      {row.link}
                    </Link>
                  </TableCell>
                  <TableCell>{row.media}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Calendar of Business Event */}
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" gutterBottom>
            Calendar of Business Event
          </Typography>
          <Typography variant="body2" gutterBottom>
            Major events occurring only 1 or 2 times per year are in{" "}
            <strong>Bold</strong>. Times are GMT-400 (NYC)
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    Time From
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    To
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    Title
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    Purpose
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {calendarEventRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <Select fullWidth defaultValue={row.timeFrom}>
                        {Array.from({ length: 24 }, (_, hour) => (
                          <MenuItem
                            key={hour}
                            value={`${hour.toString().padStart(2, "0")}:00 PM`}
                          >
                            {`${hour.toString().padStart(2, "0")}:00 PM`}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select fullWidth defaultValue={row.timeTo}>
                        {Array.from({ length: 24 }, (_, hour) => (
                          <MenuItem
                            key={hour}
                            value={`${hour.toString().padStart(2, "0")}:00 PM`}
                          >
                            {`${hour.toString().padStart(2, "0")}:00 PM`}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.purpose}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Organization */}
        <Box sx={{ marginTop: 3 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    Organization
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    Cost
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>#</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Location */}
        <Box sx={{ marginTop: 3 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    Location
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    City/Street
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "grey.700", color: "white" }}
                  >
                    URL for details and registration
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>#</TableCell>
                  <TableCell>#</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </PageHeader>
  );
};

export default EntrepreneurResources;
