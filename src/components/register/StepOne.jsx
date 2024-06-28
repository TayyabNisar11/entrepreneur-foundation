import React from "react";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import EFInput from "../ui/Input";
import Link from "next/link";

const RegisterStepOne = ({ formData, setFormData, handleNextStep }) => {
  const theme = useTheme();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize="20px" fontWeight={500} variant="h3">
          Register
        </Typography>
        <Typography fontSize="12px" fontWeight={500} component="span">
          1 of 2
        </Typography>
      </Box>
      <Grid container spacing={1} mt={2}>
        <Grid item sm={12} md={6}>
          <EFInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <EFInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12}>
          <EFInput
            label="Address 1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12}>
          <EFInput
            label="Address 2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <EFInput
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <EFInput
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12}>
          <EFInput
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12}>
          <EFInput
            label="Last School Attended or Attending"
            name="lastSchool"
            value={formData.lastSchool}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12}>
          <EFInput
            label="Last School City"
            name="lastSchoolCity"
            value={formData.lastSchoolCity}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12}>
          <EFInput
            label="LinkedIn Link"
            name="linkedInLink"
            subLabel={
              <span>
                You can create a LinkedIn account{" "}
                <Link href="www.linkedin.com">here</Link>
              </span>
            }
            value={formData.linkedInLink}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={12}>
          <Button
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              mt: 2,
              borderRadius: theme.spacing(1),
              textTransform: "none",
            }}
            type="button"
            fullWidth
            variant="contained"
            size="large"
            onClick={handleNextStep}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterStepOne;
