import PageHeader from "@/components/PageHeader";
import {
  Box,
  Button,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
} from "@mui/material";
import EFInput from "@/components/ui/Input"; 
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const categories = [
  { id: 1, category: "Accounting", order: 10 },
  { id: 2, category: "Administration", order: 20 },
  { id: 3, category: "Bioscience", order: 30 },
  { id: 4, category: "Communications", order: 40 },
  { id: 5, category: "Customer Service", order: 50 },
  { id: 6, category: "General Management", order: 60 },
  { id: 7, category: "Graphic and Web Design", order: 70 },
  { id: 8, category: "Engineering and science, Cleantech", order: 80 },
  { id: 9, category: "Engineering and science, Materials", order: 90 },
  { id: 10, category: "Engineering and science, Electrical", order: 100 },
  { id: 11, category: "Engineering and science, Mechanical", order: 110 },
  { id: 12, category: "IT", order: 120 },
  { id: 13, category: "Sales and Marketing", order: 130 },
  { id: 14, category: "Software Coding", order: 140 },
];


const Capabilities = () => {
  return (
    <PageHeader title="Capabilities">
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Capabilities Category
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Order
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Add
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Move
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    {row.id}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    {row.category}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    {row.order}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    {row.id === 1 && "M"}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    <IconButton size="small">
                      <ArrowUpward fontSize="inherit" />
                    </IconButton>
                    <IconButton size="small">
                      <ArrowDownward fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12}>
            <EFInput label="Others" subLabel="Enter 'OTHER' Capabilities Below" />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </PageHeader>
  );
};

export default Capabilities;
