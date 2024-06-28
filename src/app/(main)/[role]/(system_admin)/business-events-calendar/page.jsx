import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Box,
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
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
const timeOptions = [
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
const BusinessEventCalendar = () => {
  return (
    <PageHeader title="Calendar of Business Events">
      <Box>
        <Typography variant="h6">Time Zone</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 4 }}>
          <TextField
            variant="outlined"
            size="small"
            sx={{ mr: 2, flexGrow: 1 }}
          />
          <Button variant="contained">Select Time Zone</Button>
        </Box>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Major events occurring only 1 or 2 times per year are in Bold. Times
          are GMT-400 (NYC)
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Date</TableCell>
                <TableCell sx={{ color: "#fff" }}>Time From</TableCell>
                <TableCell sx={{ color: "#fff" }}>To</TableCell>
                <TableCell sx={{ color: "#fff" }}>Title</TableCell>
                <TableCell sx={{ color: "#fff" }}>Purpose</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      type="date"
                      size="small"
                      defaultValue="mm/dd/yy"
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <Select
                      variant="outlined"
                      size="small"
                      defaultValue="00:00 PM"
                      fullWidth
                    >
                      {/* Add time options here */}
                      {[
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
                      ].map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      variant="outlined"
                      size="small"
                      defaultValue="00:00 PM"
                      fullWidth
                    >
                      {/* Add time options here */}
                      {[
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
                      ].map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
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

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Organization</TableCell>
                <TableCell sx={{ color: "#fff" }}>Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      defaultValue="$"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Location</TableCell>
                <TableCell sx={{ color: "#fff" }}>City/State</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  URL for details and registration
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
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

        <Typography variant="h6" sx={{ mb: 2 }}>
          Add an Event
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Date</TableCell>
                <TableCell sx={{ color: "#fff" }}>Time From</TableCell>
                <TableCell sx={{ color: "#fff" }}>To</TableCell>
                <TableCell sx={{ color: "#fff" }}>Title</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Purpose (e.g. - Training, Networking, Trade Show, Pop-up,
                  Pitch event, Fundraiser)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    variant="outlined"
                    type="date"
                    size="small"
                    defaultValue="mm/dd/yy"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <Select
                    variant="outlined"
                    size="small"
                    defaultValue="00:00 PM"
                    fullWidth
                  >
                    {/* Add time options here */}
                    {[
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
                    ].map((time) => (
                      <MenuItem key={time} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    variant="outlined"
                    size="small"
                    defaultValue="00:00 PM"
                    fullWidth
                  >
                    {/* Add time options here */}
                    {[
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
                    ].map((time) => (
                      <MenuItem key={time} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Frequency per year</TableCell>
                <TableCell sx={{ color: "#fff" }}>Organization</TableCell>
                <TableCell sx={{ color: "#fff" }}>Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    defaultValue="$"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Location</TableCell>
                <TableCell sx={{ color: "#fff" }}>City/Street</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  URL for details and registration
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField variant="outlined" size="small" fullWidth />
                  </TableCell>
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

        <Typography variant="body2" sx={{ mb: 2 }}>
          Your draft will remain until typed over, even after Published.
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={4}>
          <Button variant="contained">Save as draft</Button>
          <Button variant="contained">Publish Event</Button>
        </Box>

        <Box mb={4}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">Events You Are Managing</Typography>
            <Box>
              <Typography component="span">Download file as </Typography>
              <a href="#" underline="hover">
                .xls
              </a>
              <Typography component="span">, </Typography>
              <a href="#" underline="hover">
                .xlsx
              </a>
              <Typography component="span">, </Typography>
              <a href="#" underline="hover">
                .csv
              </a>
            </Box>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#333" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>Date</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Time From</TableCell>
                  <TableCell sx={{ color: "#fff" }}>To</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Title</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Purpose</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        variant="outlined"
                        type="date"
                        size="small"
                        defaultValue="mm/dd/yy"
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        variant="outlined"
                        size="small"
                        defaultValue="00:00 PM"
                        fullWidth
                      >
                        {timeOptions.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        variant="outlined"
                        size="small"
                        defaultValue="00:00 PM"
                        fullWidth
                      >
                        {timeOptions.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
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
        </Box>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>
                  Registered Entrepreneurs
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>Service Providers</TableCell>
                <TableCell sx={{ color: "#fff" }}>Capital Providers</TableCell>
                <TableCell sx={{ color: "#fff" }}>Mentors/Judges</TableCell>
                <TableCell sx={{ color: "#fff" }}>Talent</TableCell>
                <TableCell sx={{ color: "#fff" }}>Total</TableCell>
                <TableCell sx={{ color: "#fff" }}>Mark as sold out</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>0000</TableCell>
                  <TableCell>0000</TableCell>
                  <TableCell>0000</TableCell>
                  <TableCell>0000</TableCell>
                  <TableCell>0000</TableCell>
                  <TableCell>0000</TableCell>
                  <TableCell>Sold out</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Frequency</TableCell>

                <TableCell sx={{ color: "#fff" }}>Cost</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Manage Event Listing
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell># /year</TableCell>

                  <TableCell>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      defaultValue="$"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="text">Update Published Event</Button>
                    <Button variant="text">Copy to Create New Event</Button>
                    <Button variant="text">Delete event</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default BusinessEventCalendar;
