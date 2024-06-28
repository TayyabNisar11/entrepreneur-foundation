import PageHeader from "@/components/PageHeader";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  Checkbox,
  TextField,
} from "@mui/material";
import EFInput from "@/components/ui/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const categories = [
  "Accounting",
  "Administration",
  "Bioscience",
  "Communications",
  "Customer Service",
  "General Management",
  "Graphic and Web Design",
  "Engineering and science, Cleantech",
  "Engineering and science, Materials",
  "Engineering and science, Electrical",
  "Engineering and science, Mechanical",
  "IT",
  "Sales and Marketing",
  "Software Coding",
  "Other (Indicate in comment box below)",
];
const PositionSought = () => {
  return (
    <PageHeader title="Position Sought">
      <Box sx={{ margin: 2 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Minimum Rate will you consider
              </Typography>
              <Box display="flex" alignItems="center">
                <TextField
                  InputProps={{ startAdornment: <Typography>$</Typography> }}
                  size="small"
                  label=""
                  sx={{ maxWidth: 130, marginX: 1 }}
                />
                <Typography>/ hour</Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Duration{" "}
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ fontStyle: "italic" }}
                  >
                    (check all that apply)
                  </Typography>
                </FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Temporary Part-time"
                    control={<Radio />}
                    label="Temporary Part-time"
                  />
                  <FormControlLabel
                    value="Temporary Part-time"
                    control={<Radio />}
                    label="Temporary Part-time"
                  />
                  <FormControlLabel
                    value="Permanent Part-time"
                    control={<Radio />}
                    label="Permanent Part-time"
                  />
                  <FormControlLabel
                    value="Permanent Full-time"
                    control={<Radio />}
                    label="Permanent Full-time"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                U.S citizen
              </Typography>
              <Box display="flex" alignItems="center">
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <Typography>If no, what is residency status?</Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  sx={{
                    marginLeft: 1,
                    flex: 1,
                    maxWidth: "500px",
                    width: "100%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box sx={{ margin: 2 }}>
        <Typography variant="h6" gutterBottom>
          Capabilities
        </Typography>
        <Typography variant="body2" gutterBottom>
          Current skills as well as what you would be interested to learn more
          about
        </Typography>
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
                  Category
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Skill
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "grey.700",
                    color: "white",
                    border: "1px solid grey",
                  }}
                >
                  Interest
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    {category}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    <FormControlLabel control={<Checkbox />} label="" />
                  </TableCell>
                  <TableCell sx={{ border: "1px solid grey" }}>
                    <FormControlLabel control={<Checkbox />} label="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12}>
            <EFInput
              label="Comments"
              multiline
              rows={4}
              helperText="Limit 300 characters and spaces. Remaining 300."
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update Position Sought
            </Button>
          </Grid>
        </Grid>
      </Box>
    </PageHeader>
  );
};

export default PositionSought;
