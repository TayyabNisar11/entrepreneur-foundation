import PageHeader from '@/components/PageHeader'
import React from 'react'
import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import EFInput from "@/components/ui/Input";
const CompanyProfile = () => {
  return (
    <PageHeader title="Profile">
      <Box sx={{ margin: 2 }}>
        <Typography variant="h6" gutterBottom>
          Update Profile
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <EFInput label="Company" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Website" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                multiline
                rows={4}
                fullWidth
                helperText="Limit 300 characters and spaces. Remaining 300."
                variant="outlined"
                
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Account Manager</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="First name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Last name" />
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
              <EFInput label="Zip" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Email" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Phone" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Linkedin Link" />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Update Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </PageHeader>
  );
}

export default CompanyProfile