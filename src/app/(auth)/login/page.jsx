"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Input from "@/components/ui/Input";

const Login = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: "100vh", backgroundColor: theme.palette.grey[200] }}>
      <Grid container component="main" sx={{ height: "100%" }}>
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
          sx={{ backgroundColor: theme.palette.grey[100] }}
          item
          xs={12}
          sm={12}
          md={6}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing(4),
              maxWidth: theme.spacing(70),
              margin: "auto",
            }}
          >
            <Typography
              width="100%"
              textAlign="start"
              component="h1"
              variant="h5"
              fontWeight="500"
              fontSize="20px"
            >
              Sign in
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              component="form"
              noValidate
              sx={{ mt: 1, width: "100%" }}
            >
              <Input
                fullWidth
                label="Email address"
                autoComplete="email"
                autoFocus
                size="medium"
              />
              <Input fullWidth label="Password" />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me logged in on this computer"
              />
              <Button
                sx={{
                  fontSize: "15px",
                  fontWeight: 600,
                  mt: 4,
                  borderRadius: theme.spacing(1),
                  textTransform: "none",
                }}
                type="submit"
                fullWidth
                variant="contained"
                size="large"
              >
                Log In
              </Button>
              <Grid sx={{ mt: 10 }} container>
                <Grid item xs>
                  <Typography fontSize="14px" fontWeight={500}>
                    If you need assistance, please contact the{" "}
                    <Link href="/"> Ecosystem Administrator</Link> .
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
