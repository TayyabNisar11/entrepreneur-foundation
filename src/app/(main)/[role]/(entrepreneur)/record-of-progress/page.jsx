'use client'
import PageHeader from "@/components/PageHeader";
import React,{useState} from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
  const trainings = [
    {
      category: "General Safety",
      equipment: "Safety protocols/ First aid Kits",
    },
    { category: "General Safety", equipment: "Goggles, face shields, gloves" },
    { category: "General Safety", equipment: "Using hand tools" },
    { category: "Woodworking", equipment: "Table Saw" },
  ];
const trainingItems = [
  "Barriers to Entry: Patents, Trademark, copyrights",
  "Branding: Company name, logo, URL, Email address",
  "Break- Even Calculation",
  "Budgeting and financial Forecasting",
  "Building the team",
  "Business Licenses",
  "Business Planning/ Business Model Canvas",
  "Capital Requirement for launch",
];

const RecordOfProgress = () => {
    const [description, setDescription] = useState("");
    const maxChars = 600;

    const handleChange = (event) => {
      setDescription(event.target.value);
    };
  return (
    <PageHeader title="Recording of Progress">
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Business Training Completed
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "#4D4D4D", color: "white" }}>
                  Business Training completed
                </TableCell>
                <TableCell sx={{ backgroundColor: "#4D4D4D", color: "white" }}>
                  <CheckIcon />
                </TableCell>
                <TableCell sx={{ backgroundColor: "#4D4D4D", color: "white" }}>
                  Confirmed by Admin
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainingItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item}</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>mm/dd/yyyy</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Equipment Training Completed
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "#4D4D4D", color: "white" }}>
                  Category
                </TableCell>
                <TableCell sx={{ backgroundColor: "#4D4D4D", color: "white" }}>
                  Equipment
                </TableCell>
                <TableCell sx={{ backgroundColor: "#4D4D4D", color: "white" }}>
                  <CheckIcon />
                </TableCell>
                <TableCell sx={{ backgroundColor: "#4D4D4D", color: "white" }}>
                  Confirmed by Admin
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainings.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.equipment}</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>mm/dd/yyyy</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#4D4D4D" }}
          >
            Update
          </Button>
        </Box>
      </Box>

      <Box sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Third Party Validation
        </Typography>
        <Typography variant="body2" gutterBottom>
          Describe any testing on your product or service or validation of
          market demand and the results thereof
        </Typography>

        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={description}
          onChange={handleChange}
          placeholder="Enter your description here..."
          helperText={
            <>
              <span>Limit {maxChars} characters and spaces. </span>
              <span>Remaining {maxChars - description.length}. </span>
              <span>
                ctrl B for <b>bold</b>.{" "}
              </span>
              <span>For bullets, paste this &ndash;</span>
            </>
          }
          inputProps={{ maxLength: maxChars }}
          sx={{
            marginBottom: 2,
          }}
        />
      </Box>
    </PageHeader>
  );
};

export default RecordOfProgress;
