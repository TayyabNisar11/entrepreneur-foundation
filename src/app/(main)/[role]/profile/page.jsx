'use client'
import React from "react";
import { Grid, useTheme } from "@mui/material";
import PageHeader from "@/components/PageHeader";
import EFInput from "@/components/ui/Input";
import { StyledButton } from '@/components/ui/button';

const Profile = () => {
  const theme = useTheme();
  return (
    <PageHeader title="System Administration Profile">
      <Grid container spacing={6}>
        <Grid item md={6} sm={12}>
          <EFInput label="First Name" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="Last Name" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="Address 1" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="Address 2" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="City" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="State" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="Zip" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="Linkedin Link" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="Email" subLabel="This will be your login and ID" />
        </Grid>
        <Grid item md={6} sm={12}>
          <EFInput label="Phone" />
        </Grid>
        <Grid item sm={12} display="flex" justifyContent="flex-end">
          <StyledButton
            sx={{
              width: "340px",
              fontSize: "15px",
              fontWeight: 600,
              mt: 2,
              borderRadius: theme.spacing(1),
              textTransform: "none",
            }}
            type="button"
            fullWidth
            size={20}
            colorVariant="primary"
          >
            Update
          </StyledButton>
        </Grid>
      </Grid>
    </PageHeader>
  );
};

export default Profile;