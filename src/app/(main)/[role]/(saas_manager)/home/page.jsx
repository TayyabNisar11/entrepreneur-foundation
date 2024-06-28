import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from "@mui/material";

import EFInput from "@/components/ui/Input";
const data = [
  {
    name: "Connecticut Entrepreneurship Eco-System",
    geography: "Connecticut",
    dues: "$100",
  },
];

const currentEcosystem = [
  {
    name: "CT Entrepreneurship Ecosystem",
    sysadmin: "Mike Roer",
    dues: "$100",
  },
];

const sysadminData = [
  {
    sysadmin: "CT Entrepreneurship Ecosystem",
    email: "Roer@EntrepreneurshipFoundation.org",
    ecosystem: "CT Entrepreneurship Ecosystem",
  },
];

const SaasHome = () => {
  return (
    <PageHeader title="SAAS Managaer">
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Create an Ecosystem
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Name
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Geography Served
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Mo. dues
                </TableCell>
                <TableCell
                  sx={{ backgroundColor: "grey.700", color: "white" }}
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.geography}</TableCell>
                  <TableCell>{row.dues}</TableCell>
                  <TableCell>
                    <Button variant="contained">Add</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Current Ecosystem (Click for Profile)
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Edit Name of System
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Sysadmin (Click to email)
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Archive Ecosys
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Mo. dues
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentEcosystem.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Button variant="text" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>{row.sysadmin}</TableCell>
                  <TableCell>
                    <Button variant="text" color="primary">
                      Archive
                    </Button>
                  </TableCell>
                  <TableCell>{row.dues}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Assign a Sysadmin
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <EFInput label="First Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Last Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Address 1" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Address 2" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <EFInput label="City" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <EFInput label="State" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <EFInput label="Zip Code" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Phone" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput
                label="LinkedIn Link"
                subLabel="(if none, enter 'none')"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Email" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput
                label="Initial Password"
                helperText="At least 8 characters including a number, upper and lower-case letters, and a special character: #$%&;"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Assign new Sysadmin
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box sx={{ my: 4 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Sysadmin (Click to login)
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Email (click to send)
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Ecosystem
                </TableCell>
                <TableCell sx={{ backgroundColor: "grey.700", color: "white" }}>
                  Unassign sysadmin
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sysadminData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.sysadmin}</TableCell>
                  <TableCell>
                    <a
                      href={`mailto:${row.email}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {row.email}
                    </a>
                  </TableCell>
                  <TableCell>{row.ecosystem}</TableCell>
                  <TableCell>
                    <Button variant="text" color="primary">
                      Unassign
                    </Button>
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

export default SaasHome;
