import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";

import EFInput from "../ui/Input";

const RegisterStepTwo = ({ formData, setFormData, handleNextStep }) => {
  const theme = useTheme();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const membershipOptions = [
    "Entrepreneur or Innovator",
    "Organization Administrator",
    "Business Service Provider",
  ];

  const subtexts = {
    "Entrepreneur or Innovator":
      "Individuals looking to start or grow a business.",
    "Organization Administrator":
      "Individuals managing business organizations.",
    "Business Service Provider":
      "Individuals providing business-related services.",
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize="20px" fontWeight={500} variant="h3">
          Register
        </Typography>
        <Typography fontSize="12px" fontWeight={500} component="span">
          2 of 2
        </Typography>
      </Box>
      <Grid container spacing={1} mt={2}>
        <Grid item sm={12} md={12}>
          <EFInput
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            subLabel={
              <span>use a permanent address, this will be your login ID</span>
            }
          />
        </Grid>
        <Grid item sm={12} md={12}>
          <EFInput
            label="Password "
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            helperText="At least 8 characters, including a number, upper and lower-case letter, and a special character: #$%&;"
          />
        </Grid>
        <Grid item sm={12}>
          <EFInput
            label="Phone Number"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          sm={12}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            fontWeight={500}
            fontSize="16px"
            my={0.6}
            component="label"
          >
            Select a Membership Category
          </Typography>
          <Typography fontSize="13px" fontWeight={300} fontStyle="italic">
            You will be taken to your dashboard. If you wish to join under two
            or more functions, please register each separately, with different
            emails.
          </Typography>
          <Box width="100%">
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                name="membershipCategory"
                value={formData.membershipCategory}
                onChange={handleChange}
              >
                <Grid container spacing={2}>
                  {membershipOptions.map((item) => (
                    <Grid item xs={12} key={item}>
                      <Box
                        sx={{
                          border: `1px solid ${theme.palette.grey[400]}`,
                          borderRadius: "10px",
                          padding: theme.spacing(2.2),
                          width: "100%",
                        }}
                      >
                        <FormControlLabel
                          value={item}
                          control={<Radio />}
                          label={
                            <Box>
                              <Typography variant="body1" fontWeight="400">
                                {item}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="textSecondary"
                              >
                                {subtexts[item]}
                              </Typography>
                            </Box>
                          }
                          sx={{ width: "100%" }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item sx={12} display="flex" width="100%" justifyContent="center">
          <FormControlLabel
  
            control={<Checkbox value="remember" color="primary" />}
            label="I accept the Terms of Service"
          />
        </Grid>

        <Grid
          item
          sm={12}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Button
            sx={{
              maxWidth: "340px",
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
            Continue Registration
          </Button>
          <Button
            sx={{
              maxWidth: "340px",
              fontSize: "15px",
              fontWeight: 600,
              mt: 2,
              borderRadius: theme.spacing(1),
              textTransform: "none",
              bgcolor: theme.palette.grey[500],
              "&:hover": {
                bgcolor: theme.palette.grey[600],
              },
            }}
            type="button"
            fullWidth
            variant="contained"
            size="large"
            onClick={handleNextStep}
          >
            Cancel Registration
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterStepTwo;
