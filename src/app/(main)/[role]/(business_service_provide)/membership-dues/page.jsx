import PageHeader from "@/components/PageHeader";
import React from "react";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import EFInput from "@/components/ui/Input";

const MembershipDues = () => {
  return (
    <PageHeader title="Membership Dues">
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" gutterBottom>
          Paid Service Providers are asked to pay an annual membership fee of
          $100 for established firms to help defray costs of maintaining the
          ecosystem site. The membership fee is due on the first day of month
          following the date of original membership payment; and will be charged
          to the credit card on file. You will receive a notice 30 days prior to
          provide the opportunity to upgrade, downgrade, or cancel your
          membership.
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <EFInput label="Your membership Renewal Anniversary is" />
            </Grid>
            <Grid item xs={12}>
              <EFInput label="Credit Card Number" />
            </Grid>
            <Grid item xs={12}>
              <EFInput label="Name on Card" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" gutterBottom>
                Expiration Date
              </Typography>
              <Select fullWidth defaultValue="">
                <MenuItem value="">
                  <em>Month</em>
                </MenuItem>
                {Array.from({ length: 12 }, (v, k) => k + 1).map((month) => (
                  <MenuItem
                    key={month}
                    value={month.toString().padStart(2, "0")}
                  >
                    {month.toString().padStart(2, "0")}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" gutterBottom>
                &nbsp;
              </Typography>
              <Select fullWidth defaultValue="">
                <MenuItem value="">
                  <em>Year</em>
                </MenuItem>
                {Array.from(
                  { length: 10 },
                  (v, k) => new Date().getFullYear() + k
                ).map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button type="button" variant="contained" color="primary">
                Download Digital Membership Badge
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </PageHeader>
  );
};

export default MembershipDues;
