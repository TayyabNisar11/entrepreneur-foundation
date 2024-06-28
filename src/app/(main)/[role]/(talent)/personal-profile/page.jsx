"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import { Box, Grid, Avatar, IconButton, useTheme } from "@mui/material";
import EFInput from "@/components/ui/Input";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { StyledButton } from '@/components/ui/button';

const PersonalProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const theme = useTheme();

  const handleProfilePicChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePic(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <PageHeader title="Personal Profile">
      <Box>
        <form>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={12} textAlign="center">
              <input
                accept="image/*"
                id="profile-pic-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleProfilePicChange}
              />
              <label htmlFor="profile-pic-upload">
                <IconButton component="span" sx={{ position: "relative" }}>
                  <Avatar src={profilePic} sx={{ width: 100, height: 100 }} />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 10,
                      padding: 0.7,
                      bgcolor: theme.palette.grey[400],
                      borderRadius: "50%",
                      border: "2px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "black",
                    }}
                  >
                    <PhotoCamera />
                  </Box>
                </IconButton>
              </label>
            </Grid>
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
            <Grid item xs={12} sm={6}>
              <EFInput label="City" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="State" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Zip Code" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="LinkedIn Link" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Email" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EFInput label="Phone" />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              textAlign="center"
              my={3}
            >
              <StyledButton
                sx={{ maxWidth: "300px", width: "100%" }}
                size={16}
                colorVariant="primary"
              >
                Update Personal Profile
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </PageHeader>
  );
};

export default PersonalProfile;