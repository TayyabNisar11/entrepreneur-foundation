import PageHeader from '@/components/PageHeader'
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OnboardingEntrepreneurMembers = () => {
  return (
    <PageHeader title="Onboarding Entrepreneur Members">
<Box sx={{ padding: '20px' }}>
      {/* Table */}
      <Typography variant="h6" gutterBottom>
        Entrepreneur Application (Click on Name and Company to view Profiles)
      </Typography>
      <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#757575' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>
                Applicant Name
              </TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>
                Company Name
              </TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>
                Accept
              </TableCell>
              <TableCell sx={{ color: 'white', border: '1px solid #ccc' }}>
                Reject
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(4)].map((_, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}></TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}>
                  
                </TableCell>
                <TableCell sx={{ border: '1px solid #ccc' }}>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Email Templates */}
      <Typography variant="h6" gutterBottom>
        EMAIL TEMPLATES FOR REPLIES TO APPLICATIONS
      </Typography>
      <Typography variant="body1" gutterBottom>
        Draft ACCEPTANCE email
      </Typography>
      <TextField
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <Typography variant="body1" gutterBottom>
        Draft REJECTION email
      </Typography>
      <TextField
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />

      {/* File Upload */}
      <Typography variant="h6" gutterBottom>
        UPLOAD LIST OF ENTREPRENEURS and AUTO-CONNECT TO YOUR ORGANIZATION DATABASE
      </Typography>
      <Typography variant="body2" gutterBottom>
        Field headings of Excel spreadsheet should be set to:
      </Typography>
      <List>
        {[
          'First name',
          'Last name',
          'Address 1',
          'Address 2',
          'City',
          'State',
          'Zip',
          'LinkedIn link',
          'Email',
          'Cell phone',
        ].map((text, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <FiberManualRecordIcon  sx={{fontSize:"10px"}} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField type="file" sx={{ marginRight: '20px', flexGrow: 1 }} />
        <Button variant="contained" sx={{ backgroundColor: '#BDBDBD' }}>
          Upload
        </Button>
      </Box>
    </Box>

    </PageHeader>
  )
}

export default OnboardingEntrepreneurMembers