"use client";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { Typography, Table,TableBody,Paper, RadioGroup, FormControlLabel, Radio, TextField, Box } from "@mui/material";
import {
  StyledTableContainer,
  StyledTableHead,
  StyledTableCell,
  StyledTableRow,
} from "@/components/ui/table";
import EFInput from "@/components/ui/Input";
import { StyledButton } from '@/components/ui/button';

const addresses = [
  "Entrepreneurs",
  "Competition Advisers",
  "Business Service Providers",
  "Capital Providers",
  "Mentors",
  "Reviewers",
  "Emails on Clipboard",
];

const MailCenter = () => {
  return (
    <PageHeader title="Mail Center">
      <Typography fontSize="14px" pb={2} fontWeight={500}>
        Sent Bulks Emails
      </Typography>
      <StyledTableContainer>
        <Table>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableCell>Addresses</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Subject</StyledTableCell>
              <StyledTableCell>Text</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell>
                <RadioGroup name="addresses">
                  {addresses.map((address, index) => (
                    <FormControlLabel
                      key={index}
                      value={address}
                      control={<Radio />}
                      label={address}
                      sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px', fontWeight: 400 } }}
                    />
                  ))}
                </RadioGroup>
              </StyledTableCell>
              <StyledTableCell>
                <TextField type="date" variant="outlined" size="small" />
              </StyledTableCell>
              <StyledTableCell colSpan={2}>
                <TextField
                  placeholder="Subject"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="Text"
                  variant="outlined"
                  multiline
                  rows={3}
                  fullWidth
                />
              </StyledTableCell>
              <StyledTableCell>
                <StyledButton size={12} colorVariant="secondary">
                  Send
                </StyledButton>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
      <Box sx={{ mt: 2 }}>
        <Box maxWidth="50%" display="flex" flexDirection="column" gap={3}>
          <Typography fontWeight={500} fontSize="14px">
            Send Mail
          </Typography>
          <EFInput label="From Email" />
          <Typography fontWeight={500} fontSize="14px">
            To
          </Typography>
          <Box mb={2}>
            <RadioGroup name="test-email">
              <Box display="flex" alignItems="center" mb={1}>
                <FormControlLabel
                  value="testEmail"
                  control={<Radio />}
                  label="Test Email to"
                  sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px', fontWeight: 400 } }}
                />
                <TextField variant="outlined" size="small" />
              </Box>
              {addresses.map((address, index) => (
                <FormControlLabel
                  key={index}
                  value={address}
                  control={<Radio />}
                  label={address}
                  sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px', fontWeight: 400 } }}
                />
              ))}
            </RadioGroup>
          </Box>
        </Box>
      </Box>
      <Box mt={2}>
        <StyledTableContainer>
          <Table>
            <StyledTableHead>
              <StyledTableRow>
                <StyledTableCell>First</StyledTableCell>
                <StyledTableCell>Last</StyledTableCell>
                <StyledTableCell>Emails on Clipboard</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </StyledTableRow>
            </StyledTableHead>
            <TableBody>
              {[...Array(4)].map((_, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                    <StyledButton size={12} width={40} colorVariant="secondary">
                      {index % 2 === 0 ? 'Add' : 'Remove'}
                    </StyledButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Box>

      <Box my={4}>
        <Typography fontWeight={500} fontSize="14px">
          Draft Email{" "}
          <Typography
            component="span"
            fontWeight={400}
            fontStyle="italic"
            fontSize="14px"
          >
            (Draft will remain after sending)
          </Typography>
        </Typography>
        <EFInput label="Subject" />
      </Box>
    </PageHeader>
  );
};

export default MailCenter;