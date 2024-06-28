import PageHeader from '@/components/PageHeader'
import React from 'react'
import {
  Table,
  TableBody,
  Paper,
  Button,
  Typography,
} from '@mui/material';
import { StyledTableCell, StyledTableRow, StyledTableHead, StyledTableContainer } from "@/components/ui/table"

const AppointCoAdmin = () => {
  return (
    <PageHeader title="Appoint Co-Administrators">
      <StyledTableContainer >
        <Table>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableCell>First</StyledTableCell>
              <StyledTableCell>Last</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>
                <Button variant="contained">
                  Add
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>

      <Typography fontSize="15px" fontWeight={500} pb={1}>Current co-Administrators</Typography>
      <StyledTableContainer >
        <Table>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableCell>First</StyledTableCell>
              <StyledTableCell>Last (Click for dashboard)</StyledTableCell>
              <StyledTableCell>Email (Add all to clipboard)</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Remove Admin</StyledTableCell>
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>
                <Button variant="contained">
                  Remove
                </Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>
                <Button variant="contained">
                  Remove
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
    </PageHeader>
  )
}

export default AppointCoAdmin