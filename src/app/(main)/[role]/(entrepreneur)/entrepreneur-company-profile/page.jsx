"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Stack,
} from "@mui/material";
import EFInput from "@/components/ui/Input";
import PageHeader from "@/components/PageHeader";

const legalStructures = [
  "Sole Proprietorship",
  "LLC",
  "Partnership",
  "C corp",
  "S corp",
  "Benefit Corporation",
  "B Corp",
  "Non-Profit",
];

const NewCompanyProfile = () => {
  const [selectedStructure, setSelectedStructure] = useState(
    legalStructures[0]
  );

  const handleStructureChange = (structure) => {
    setSelectedStructure(structure);
  };

  return (
    <PageHeader title="Company Profile">
      <Box>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                CEO
              </Typography>
              <EFInput fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                City
              </Typography>
              <EFInput fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                State
              </Typography>
              <EFInput fullWidth />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                LinkedIn Link
              </Typography>
              <EFInput fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                Email Address
              </Typography>
              <EFInput fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                Cell Phone
              </Typography>
              <EFInput fullWidth />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                Category
              </Typography>
              <EFInput fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                Industry
              </Typography>
              <EFInput fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography fontSize="14px" fontWeight={500}>
                Date Founded
              </Typography>
              <EFInput fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize="14px" fontWeight={500}>
                Company Brief Description
              </Typography>
              <TextField fullWidth multiline rows={4} margin="normal" />
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize="14px" fontWeight={500}>
                Company Detailed Description
              </Typography>
              <TextField fullWidth multiline rows={4} margin="normal" />
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Legal Structure of Company
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {legalStructures.map((structure, index) => (
                    <TableRow
                      key={structure}
                      hover
                      onClick={() => handleStructureChange(structure)}
                      sx={{
                        cursor: "pointer",
                        backgroundColor:
                          selectedStructure === structure
                            ? "grey.800"
                            : "inherit",
                        color:
                          selectedStructure === structure ? "white" : "inherit",
                      }}
                    >
                      <TableCell
                        sx={{
                          color:
                            selectedStructure === structure
                              ? "white"
                              : "inherit",
                        }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        sx={{
                          color:
                            selectedStructure === structure
                              ? "white"
                              : "inherit",
                        }}
                      >
                        {structure}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button variant="contained" color="primary">
              Update Company Information
            </Button>
          </Grid>
        </Grid>
      </Box>
    </PageHeader>
  );
};

export default NewCompanyProfile;
