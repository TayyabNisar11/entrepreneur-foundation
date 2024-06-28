import PageHeader from '@/components/PageHeader'
import React from 'react'
import { Table, TableBody,Button, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Box, Typography, TextField } from '@mui/material';

const OrgMentoring = () => {
  return (
    <PageHeader title="Mentoring">
<Box p={2}>
      <Typography variant="h6">Mentors who have volunteered for your Organization</Typography>
      <Typography variant="body2">
        As an Opportunity Administrator you can also Register Mentors. UNIVERSITIES can match students with professors by registering professors as Mentors and inviting students to register as Entrepreneurs. The professors can then be assigned as Mentors to their respective students.
        Mentors may toggle their availability off or on as their schedule permits (See “Currently available” field.)
      </Typography>

      <Box mt={2} mb={4}>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name (Click for Profile)</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email (Add all to clipboard)</TableCell>
                <TableCell>Max no mentees</TableCell>
                <TableCell>Frequency Commitment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>#</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>#</TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Currently available</TableCell>
                <TableCell>Home City</TableCell>
                <TableCell>Work City</TableCell>
                <TableCell>Skill Sets</TableCell>
                <TableCell>LinkedIn</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox /> Yes <Checkbox /> No
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell>
                  <Typography>Accounting</Typography>
                  <Typography>Business Plan Preparation</Typography>
                  <Typography>Financing- Startup</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox /> Yes <Checkbox /> No
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell>
                  <Typography>Accounting</Typography>
                  <Typography>Business Plan Preparation</Typography>
                  <Typography>Financing- Startup</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Typography variant="h6">Assign Mentors to Entrepreneurs</Typography>
      <Box mt={2} mb={4}>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Entrepreneur First Name</TableCell>
                <TableCell>Last (Click for dashboard)</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Email (Add all to clipboard)</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={2} mb={4}>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Assign Mentor from Mentor table</TableCell>
                <TableCell colSpan={3} align="center">Next Meeting</TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell />
                <TableCell><TextField type="date" variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField type="time" variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell><TextField type="date" variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField type="time" variant="outlined" fullWidth /></TableCell>
                <TableCell><TextField variant="outlined" fullWidth /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="body2">
          &#8226; Appointments will appear on the Mentoring section of the Entrepreneur’s dashboard. Meeting remains, even if date has passed, until a new meeting is scheduled.
          <br />
          &#8226; If a Mentor is not in your Mentor Table, you can <a href="#register">register them</a>
        </Typography>
      </Box>

      <Typography variant="h6">REFER AN ENTREPRENEUR TO ANOTHER ORGANIZATION</Typography>
      <Box mt={2}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Your Entrepreneurs</TableCell>
                <TableCell>Entrepreneur Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Entrepreneur 1</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell>Entrepreneur 2</TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    <Box p={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2} align="center">Organizations in Ecosystem <br/>(Click for Profile)</TableCell>
              <TableCell colSpan={2} align="center">Organization Admin</TableCell>
              <TableCell rowSpan={2} align="center">Reason for Referral</TableCell>
              <TableCell rowSpan={2} align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell align="center"><Button variant="contained">Send</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell align="center"><Button variant="contained">Send</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </PageHeader>
  )
}

export default OrgMentoring