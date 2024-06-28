"use client";
import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Typography,
  Box,
  Paper,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { MdArrowForward } from "react-icons/md";
import { StyledButton } from '@/components/ui/button';

const Security = () => {
  return (
    <PageHeader title="Security Settings">
      <Box p={3}>
        <Typography variant="h6" gutterBottom>
          Login and Password
        </Typography>
        <Box maxWidth="340px" mb={2}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Typography>Change Login Email</Typography>
            <IconButton>
              <MdArrowForward />
            </IconButton>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              borderRadius: 2,
            }}
          >
            <Typography>Change Password</Typography>
            <IconButton>
              <MdArrowForward />
            </IconButton>
          </Paper>
        </Box>

        <Typography variant="h6" gutterBottom mt={3}>
          Login Protocols
        </Typography>
        <Box>
          <Box display="flex" alignItems="center" gap={3} mb={1}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                borderRadius: 2,
                maxWidth: "340px",
                width: "100%",
              }}
            >
              <RadioGroup row>
                <FormControlLabel
                  value="automaticLogin"
                  control={<Radio />}
                  label="Automatic Login"
                  sx={{ mr: 2 }}
                />
              </RadioGroup>
            </Paper>
            <Typography variant="body2" fontStyle="italic" mt={-1} mb={2}>
              Remember this device. Each time you login from a new device we’ll
              send an authentication code to your phone.
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={3} mb={1}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                borderRadius: 2,
                maxWidth: "340px",
                width: "100%",
              }}
            >
              <RadioGroup row>
                <FormControlLabel
                  value="normalLogin"
                  control={<Radio />}
                  label="Normal Login"
                  sx={{ mr: 2 }}
                />
              </RadioGroup>
            </Paper>
            <Typography variant="body2" fontStyle="italic" mt={-1} mb={2}>
              Enter login and password each time you login.
            </Typography>
          </Box>

          <Box mb={1} display="flex" alignItems="center" gap={3}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                borderRadius: 2,
                maxWidth: "340px",
                width: "100%",
              }}
            >
              <RadioGroup row>
                <FormControlLabel
                  value="twoFactorAuthentication"
                  control={<Radio />}
                  label="Two Factor Authentication"
                  sx={{ mr: 2 }}
                />
              </RadioGroup>
            </Paper>
            <Typography variant="body2" fontStyle="italic" mt={-1} mb={2}>
              When selected, we will send you an authentication code to the cell
              phone on record every time you attempt to log in.
            </Typography>
          </Box>
        </Box>
        <Typography variant="h6" gutterBottom mt={3}>
          Cell Phone
        </Typography>
        <Typography>
          Associated with this account- <b>(09090497395)</b>
        </Typography>

        <Box display="flex" alignItems="center" gap={3} mb={1}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              borderRadius: 2,
              mb: 2,
              maxWidth: "340px",
              width: "100%",
              mt: 1,
            }}
          >
            <Typography>Change Account cell phone</Typography>
            <IconButton>
              <MdArrowForward />
            </IconButton>
          </Paper>
          <Typography variant="body2" fontStyle="italic" mt={-1} mb={2}>
            (We will send an authorization code to your email address for you to
            verify the change)
          </Typography>
        </Box>
        <StyledButton
          variant="contained"
          size={16}
          colorVariant="primary"
          width={300}
        >
          Update Security Changes
        </StyledButton>
      </Box>
    </PageHeader>
  );
};

export default Security;