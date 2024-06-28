import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CapitalProvider = () => {
  return (
    <PageHeader title="Manage Capital Providers">
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          This list is autopopulated from Registrations of Capital Providers
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>
                  Capital provider (Click for Profile)
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  Account Manager (Click to Login)
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    #
                    {/* <TextField variant="outlined" size="small" fullWidth /> */}
                  </TableCell>
                  <TableCell>
                    #
                    {/* <TextField variant="outlined" size="small" fullWidth /> */}
                  </TableCell>
                  <TableCell>
                    #
                    {/* <TextField variant="outlined" size="small" fullWidth /> */}
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
                <TableCell sx={{ color: "#fff" }}>Category</TableCell>
                <TableCell sx={{ color: "#fff" }}>URL</TableCell>
                <TableCell sx={{ color: "#fff" }}>Delete</TableCell>
                <TableCell sx={{ color: "#fff" }}>Move</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    #
                    {/* <TextField variant="outlined" size="small" fullWidth /> */}
                  </TableCell>
                  <TableCell>
                    #
                    {/* <TextField variant="outlined" size="small" fullWidth /> */}
                  </TableCell>
                  <TableCell>
                    <Button variant="text">Delete</Button>
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="move up">
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton aria-label="move down">
                      <ArrowDownwardIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="body2">
          To edit a Company Name, click on the Account Manager to login and
          change the name in the Profile
        </Typography>
      </Box>
    </PageHeader>
  );
};

export default CapitalProvider;
