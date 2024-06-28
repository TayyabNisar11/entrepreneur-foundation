"use client";
import React, { useState } from "react";
import RegisterStepOne from "@/components/register/StepOne";
import RegisterStepTwo from "@/components/register/StepTwo";
import { Box, Grid, useTheme, Typography, Paper } from "@mui/material";

const Register = () => {
  const theme = useTheme();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    lastSchool: "",
    lastSchoolCity: "",
    linkedInLink: "",
    email: "",
    password: "",
    phoneNumber: "",
    membershipCategory: "",
    terms: false,
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form data submitted:", formData);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Grid container component="main" sx={{ flex: 1, height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={false}
          md={6}
          sx={{
            display: { xs: "none", sm: "none", md: "block" }, // Hide on xs and sm screens
            position: "relative",
            backgroundImage:
              "url(https://images.pexels.com/photos/3184324/pexels-photo-3184324.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              padding: theme.spacing(5),
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
              Welcome to the Entrepreneurship Eco-system linking Entrepreneurs,
              Supporting Agencies, Mentors, Facilities, Accelerators, and
              Capital providers.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundColor: theme.palette.grey[100],
            overflowY: "auto", // Enable scroll on this side
            height: "100vh", // Ensure it takes full height
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing(4),
              maxWidth: theme.spacing(90),
              margin: "auto",
            }}
          >
            {step === 1 && (
              <RegisterStepOne
                formData={formData}
                setFormData={setFormData}
                handleNextStep={handleNextStep}
              />
            )}
            {step === 2 && (
              <RegisterStepTwo
                formData={formData}
                setFormData={setFormData}
                handlePrevStep={handlePrevStep}
                handleSubmit={handleSubmit}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
