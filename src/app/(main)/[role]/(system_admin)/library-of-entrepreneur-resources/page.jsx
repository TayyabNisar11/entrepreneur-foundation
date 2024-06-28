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
} from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const data = [
  {
    category: "Entrepreneurship",
    title: "ENTREPRENEUR SELF ASSESSMENT",
    medium: "Word Doc",
  },
  {
    category: "Entrepreneurship",
    title: "STARTUP STRATEGY – WHERE to START",
    medium: "Word Doc",
  },
  {
    category: "Entrepreneurship",
    title: "CUSTOMER DISCOVERY GAME",
    medium: "Word Doc",
  },
  {
    category: "Entrepreneurship",
    title: "CASH FLOW FORECASTING",
    medium: "CEDF – self-paced course",
  },
  {
    category: "Entrepreneurship",
    title: "BOOKKEEPING BASICS",
    medium: "CEDF – self-paced course",
  },
  {
    category: "Entrepreneurship",
    title: "QUICKBOOKS",
    medium: "CEDF – self-paced course",
  },
  {
    category: "Entrepreneurship",
    title: "FORUM",
    medium: "CEDF – self-paced course",
  },
  { category: "Entrepreneurship", title: "IDEATION", medium: "Word Doc" },
  {
    category: "Entrepreneurship",
    title: "REALITY CHECK and PATENT SEARCH",
    medium: "Word Doc",
  },
  {
    category: "Entrepreneurship",
    title: "FEASIBILITY ANALYSIS",
    medium: "Word Doc",
  },
  {
    category: "Entrepreneurship",
    title: "LEAN BUSINESS MODEL CANVAS",
    medium: "Word Doc",
  },
  {
    category: "Entrepreneurship",
    title: "LBMC INSTRUCTION",
    medium: "Word Doc",
  },
  { category: "Location", title: "LOCATION", medium: "Word Doc" },
  {
    category: "Production",
    title: "DESIGNING THE PRODUCT",
    medium: "Word Doc",
  },
  {
    category: "Production",
    title: "PRODUCTION and DISTRIBUTION",
    medium: "Word Doc",
  },
  { category: "Marketing", title: "MARKETING", medium: "Word Doc" },
  { category: "Marketing", title: "BRAND IMAGE", medium: "Word Doc" },
  {
    category: "Marketing",
    title: "BUILDING A WINNING WEBSITE",
    medium: "Word Doc",
  },
];

const LibraryOfEntrepreneurResources = () => {
      const rows = data.reduce((acc, item) => {
        const lastCategory = acc.length && acc[acc.length - 1].category;
        if (item.category === lastCategory) {
          acc[acc.length - 1].rows.push(item);
        } else {
          acc.push({ category: item.category, rows: [item] });
        }
        return acc;
      }, []);
  return (
    <PageHeader title="Library of Entrepreneur Resources">
      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add Library Topic
        </Typography>

        <Box display="flex" alignItems="center" mb={4}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mr: 2, flexGrow: 1 }}
          />
          <Button variant="contained">Add</Button>
        </Box>

        <Typography variant="h6" sx={{ mb: 2 }}>
          ADD DOCUMENTS and VIDEOS TO LIBRARY. Click “Add” to search for
          documents from your device
        </Typography>

        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Select Topic Category
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Document Title
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Medium (e.g. - PDF, video link)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  {" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Select variant="outlined" size="small" fullWidth>
                    <MenuItem value="Entrepreneurship">
                      Entrepreneurship
                    </MenuItem>
                    {/* Add more options as needed */}
                  </Select>
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <TextField variant="outlined" size="small" fullWidth />
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <Button variant="contained" size="small">
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Click “Add” to upload document file or to link title to a video.
          MEDIUM = PDF, PPT, Video, etc.
        </Typography>
      </Box>
      <Box mb={4}>
        <TableContainer component={Paper} sx={{ border: "1px solid #ccc" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableHead sx={{ backgroundColor: "#555" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Category
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Title (Click to download)
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "1px solid #ccc" }}>
                  Medium
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
              {rows.map((group, groupIndex) =>
                group.rows.map((row, rowIndex) => (
                  <TableRow key={`${groupIndex}-${rowIndex}`}>
                    {rowIndex === 0 && (
                      <TableCell
                        rowSpan={group.rows.length}
                        sx={{ border: "1px solid #ccc", verticalAlign: "top" }}
                      >
                        {group.category}
                      </TableCell>
                    )}
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                      {row.title}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                      {row.medium}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                      <Button variant="contained" size="small">
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                      <Button variant="contained" size="small" color="error">
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                      <IconButton size="small">
                        <ArrowUpwardIcon />
                      </IconButton>
                      <IconButton size="small">
                        <ArrowDownwardIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default LibraryOfEntrepreneurResources;
