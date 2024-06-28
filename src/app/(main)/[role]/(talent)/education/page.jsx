import React from "react";
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
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import EFInput from "@/components/ui/Input";
import PageHeader from "@/components/PageHeader";
const Education = () => {
  return (
    <PageHeader title="Education">
      <Box sx={{ margin: 2 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  GRADE (Click on most recent)
                </FormLabel>
                <RadioGroup row aria-label="grade" name="grade">
                  <FormControlLabel value="11" control={<Radio />} label="11" />
                  <FormControlLabel value="12" control={<Radio />} label="12" />
                  <FormControlLabel
                    value="13"
                    control={<Radio />}
                    label="College: 13"
                  />
                  <FormControlLabel value="14" control={<Radio />} label="14" />
                  <FormControlLabel value="15" control={<Radio />} label="15" />
                  <FormControlLabel value="16" control={<Radio />} label="16" />
                  <FormControlLabel
                    value="17"
                    control={<Radio />}
                    label="17 (grad student)"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                School (Select most recently attended)
              </Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemText primary="Albertus Magnus College" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Asnuntuck Community College" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Capital Community College" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12}>
              <EFInput label="Last Year Attended" />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </PageHeader>
  );
};

export default Education;
