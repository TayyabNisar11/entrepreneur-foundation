import PageHeader from '@/components/PageHeader'
import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, TextField, Select, MenuItem, Button } from '@mui/material';


const CalenderOfBusiness = () => {
  return (
    <PageHeader title="Calendar of business Events">
<Box p={2}>
      <Typography variant="h6">Major events occurring only 1 or 2 times per year are in Bold. Times are GMT-400 (NYC)</Typography>

      {/* First Table */}
      <Box mt={2} mb={4}>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Purpose</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><TextField type="date" variant="outlined" fullWidth /></TableCell>
                <TableCell>
                  <Select
                    defaultValue="00:00 PM"
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                    <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                    {/* Add more times as needed */}
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    defaultValue="00:00 PM"
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                    <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                    {/* Add more times as needed */}
                  </Select>
                </TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><TextField type="date" variant="outlined" fullWidth /></TableCell>
                <TableCell>
                  <Select
                    defaultValue="00:00 PM"
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                    <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                    {/* Add more times as needed */}
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    defaultValue="00:00 PM"
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                    <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                    {/* Add more times as needed */}
                  </Select>
                </TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Second Table */}
      <Box mt={2} mb={4}>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Organization</TableCell>
                <TableCell>Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Third Table */}
      <Box mt={2}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>City/Street</TableCell>
                <TableCell>URL for details and registration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    <Box p={2}>
      <Typography variant="h6">Add an Event</Typography>
      
      {/* First Table */}
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Purpose</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><TextField type="date" variant="outlined" fullWidth /></TableCell>
              <TableCell>
                <Select defaultValue="00:00 PM" variant="outlined" fullWidth>
                  <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                  <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Select defaultValue="00:00 PM" variant="outlined" fullWidth>
                  <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                  <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                </Select>
              </TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body2">
        Sample Purposes: Training, Networking, Trade Show, Pop-up, Pitch event, Fundraiser
      </Typography>

      {/* Second Table */}
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Frequency per year</TableCell>
              <TableCell>Organization</TableCell>
              <TableCell>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body2">
        Number of times you expect to run this event each year.
      </Typography>

      {/* Third Table */}
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell>City/State</TableCell>
              <TableCell>URL for details and registration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body2">
        Your draft will remain until typed over, even after Published.
      </Typography>

      <Box display="flex" justifyContent="space-between" my={2}>
        <Button variant="contained">Save as Draft</Button>
        <Button variant="contained">Publish Event</Button>
      </Box>

      <Typography variant="h6">EVENTS YOU ARE MANAGING</Typography>

      {/* Fourth Table */}
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Purpose</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><TextField type="date" variant="outlined" fullWidth /></TableCell>
              <TableCell>
                <Select defaultValue="00:00 PM" variant="outlined" fullWidth>
                  <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                  <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Select defaultValue="00:00 PM" variant="outlined" fullWidth>
                  <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                  <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                </Select>
              </TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><TextField type="date" variant="outlined" fullWidth /></TableCell>
              <TableCell>
                <Select defaultValue="00:00 PM" variant="outlined" fullWidth>
                  <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                  <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Select defaultValue="00:00 PM" variant="outlined" fullWidth>
                  <MenuItem value="00:00 PM">00:00 PM</MenuItem>
                  <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                </Select>
              </TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              <TableCell><TextField variant="outlined" fullWidth /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="flex-end">
        <Typography variant="body2">
          Download file as <a href="#">.xls</a> <a href="#">.xlsx</a> <a href="#">.csv</a>
        </Typography>
      </Box>

      {/* Fifth Table */}
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Registered Entrepreneurs</TableCell>
              <TableCell>Service Providers</TableCell>
              <TableCell>Capital Providers</TableCell>
              <TableCell>Mentors/Judges</TableCell>
              <TableCell>Talent</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Mark as sold out</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>Sold out</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>0000</TableCell>
              <TableCell>Sold out</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Sixth Table */}
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Frequency</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Manage Event Listing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell># /year</TableCell>
              <TableCell>$</TableCell>
              <TableCell>
                <Box display="flex" justifyContent="space-around">
                  <Button variant="text">Update Published Event</Button>
                  <Button variant="text">Copy to Create New Event</Button>
                  <Button variant="text">Delete event</Button>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell># /year</TableCell>
              <TableCell>$</TableCell>
              <TableCell>
                <Box display="flex" justifyContent="space-around">
                  <Button variant="text">Update Published Event</Button>
                  <Button variant="text">Copy to Create New Event</Button>
                  <Button variant="text">Delete event</Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </PageHeader>
  )
}

export default CalenderOfBusiness