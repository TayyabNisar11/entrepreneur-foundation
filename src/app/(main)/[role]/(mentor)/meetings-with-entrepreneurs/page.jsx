import PageHeader from "@/components/PageHeader";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";

const MeetingWithEntrepreneur = () => {
  return (
    <PageHeader title="Meetings with Entrepreneurs">
      <Box sx={{ marginBottom: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "14px", fontWeight: 500 }}
        >
          Note:
        </Typography>
        <List dense sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", fontWeight: 400 }}
              >
                Appointments you post will appear on the Mentoring section of
                the Entrepreneur’s dashboard.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", fontWeight: 400 }}
              >
                An email reminder will be sent automatically two days prior to
                meetings to Mentor and Mentee.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Schedule a Meeting
              </TableCell>
              <TableCell
                align="center"
                colSpan={3}
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Next Meeting (Enter manually)
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Date
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Time
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Location
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  size="small"
                  placeholder="[Assigned Entrepreneurs]"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  size="small"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  size="small"
                  type="time"
                  defaultValue="00:00"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField size="small" placeholder="Location" fullWidth />
              </TableCell>
              <TableCell align="center">
                <Button variant="contained">Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Schedule a Meeting
              </TableCell>
              <TableCell
                align="center"
                colSpan={3}
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Next Meeting (Enter manually)
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Date
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Time
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Location
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontWeight: "bold",
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell align="center">
                <Button variant="contained">Cancel</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <List dense sx={{ listStyleType: "disc", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText>
            <Typography
              variant="body2"
              sx={{ fontSize: "13px", fontWeight: 400 }}
            >
              Past meetings remain on schedule for one year.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </PageHeader>
  );
};

export default MeetingWithEntrepreneur;
