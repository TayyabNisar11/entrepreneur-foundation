import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  Box,
  FormControlLabel,
  Radio,
} from "@mui/material";
import EFInput from "@/components/ui/Input";
import { TextField, Grid, Button } from "@mui/material";
const CapitalFundingReferral = () => {
  return (
    <PageHeader title="Funding Referral and syndication Center">
      <Typography py={1} fontSize="15px" fontWeight={500} color="initial">
        Syndication Bulletin Board
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Date
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Posted by
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Entrepreneur Name
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Entrepreneur Email
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Company (click for profile)
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Stage
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Industry
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Raising
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Comment
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Will lead (Y or N)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>$</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>$</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Typography py={1} fontSize="15px" fontWeight={500} color="initial">
          Send New funding Referral
        </Typography>
        <EFInput label="From Email" />

        {[
          "Cash Manager",
          "Commercial Lenders",
          "Public Lenders",
          "Angel Clubs",
          "Venture Capital Funds",
          "Investment Bankers",
        ].map((item) => (
          <Box key={item}>
            <Typography
              mt={3}
              pb={2}
              fontSize="15px"
              fontWeight={500}
              color="initial"
            >
              {item}
            </Typography>
            {["All", "CompanyA", "Company B"].map((val) => (
              <Box
                key={val}
                sx={{
                  p: 0.4,
                  px: 3,
                  bgcolor: "white",
                  borderRadius: "10px",
                  border: "1px solid gray",
                  maxWidth: "330px",
                  mb: 2,
                }}
              >
                <FormControlLabel
                  value="personal"
                  control={<Radio />}
                  label={val}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Paper elevation={1} sx={{ padding: 2 }}>
        <Typography fontSize="14px" fontWeight={500}>
          cc: Entrepreneur’s Email
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          <Grid item xs={2}>
            <Typography
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: "8px 16px",
                textAlign: "center",
              }}
              fontSize="14px"
              fontWeight={500}
            >
              Subject
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              size="small"
              value="Funding Referral"
              variant="outlined"
              
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          multiline
          rows={5}
          value={`We are referring to you a company seeking funding, copied, that we thought might fit your investment criteria.

We have posted more information on the Syndication Bulletin Board. To access, set up a free Capital Provider account at www.EntrepreneursSociety.us/CT

Yours truly,`}
          variant="outlined"
          
        />
        <Grid container spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: "100%" }}
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={10}>
            <Typography fontSize="14px" fontWeight={500}>
              Note: Draft will remain after sending, for future use
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </PageHeader>
  );
};

export default CapitalFundingReferral;
