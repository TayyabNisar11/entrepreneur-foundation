"use client";
import PageHeader from "@/components/PageHeader";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const categories = [
  "Networking",
  "Mentoring",
  "Business Training",
  "Accelerator",
  "Incubator",
  "Maker Spaces",
  "Grant Provider",
  "Other",
];
const initialOrganizations = [
  { name: "Organization 1", category: "Category 1" },
  { name: "Organization 2", category: "Category 2" },
];

const OrganizationMembers = () => {
  const handleEdit = (category) => {
    // Implement edit functionality
    console.log("Edit", category);
  };

  const handleDelete = (category) => {
    // Implement delete functionality
    console.log("Delete", category);
  };

  const handleMoveUp = (index) => {
    // Implement move up functionality
    console.log("Move up", index);
  };

  const handleMoveDown = (index) => {
    // Implement move down functionality
    console.log("Move down", index);
  };
  const [organization, setOrganization] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [monthlyDues, setMonthlyDues] = useState("");

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleAddOrganization = () => {
    // Implement add organization functionality
    console.log({
      organization,
      categories: selectedCategories,
      monthlyDues,
    });
    setOrganization("");
    setSelectedCategories([]);
    setMonthlyDues("");
  };
  return (
    <PageHeader title="Members Organizations">
      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          MANAGE Organization Categories
        </Typography>

        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Category
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Edit
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Delete
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Move
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {category}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleEdit(category)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(category)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <IconButton
                      size="small"
                      onClick={() => handleMoveUp(index)}
                    >
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleMoveDown(index)}
                    >
                      <ArrowDownwardIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add a new Organization
        </Typography>

        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Organization
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Category (Select all that apply)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Monthly dues
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", border: "1px solid #ccc" }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  {categories.map((category) => (
                    <Box key={category} display="flex" flexDirection="column">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            name={category}
                            color="primary"
                          />
                        }
                        label={category}
                      />
                    </Box>
                  ))}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={monthlyDues}
                    onChange={(e) => setMonthlyDues(e.target.value)}
                  />
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleAddOrganization}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Current Organizations
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ border: "1px solid #ccc", mb: 4 }}
        >
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Organizations NAME (Click for Profile)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Category
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  Organization 1
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  Category 1
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Box display="flex" gap={1}>
                    <Button variant="contained" size="small">
                      Edit Name
                    </Button>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  Organization 2
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  Category 2
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Box display="flex" gap={1}>
                    <Button variant="contained" size="small">
                      Edit Name
                    </Button>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Assign or update primary Administrator
        </Typography>

        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Organization
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Primary Orgadmin
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Login Email (click to login)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  #
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  #
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  #
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer
          component={Paper}
          sx={{ border: "1px solid #ccc", mt: 4 }}
        >
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Initial Password
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Email (Add all to clipboard)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Add or Update
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  #
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  #
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Button variant="contained" size="small">
                    Update
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  #
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  #
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Button variant="contained" size="small">
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default OrganizationMembers;
