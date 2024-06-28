"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const skills = [
  "Accounting",
  "Business Plan Preparation",
  "Exporting",
  "Financing - Start up",
  "Financing - Growth",
  "General Management",
  "Graphic and web design",
  "Human Resources",
  "Information Technology (IT)",
  "Licensing",
  "Marketing",
  "Patents, Trademarks and copyrights",
  "Product Design and Manufacturing",
  "Valuation",
];

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  backgroundColor: selected ? "darkgray" : "white",
  color: selected ? "white" : "black",
  "&:hover": {
    backgroundColor: selected ? "darkgray" : "lightgray",
  },
  "& .MuiListItemText-root": {
    color: selected ? "white" : "black",
  },
}));

const YourSkills = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [otherDetails, setOtherDetails] = useState("");
    const [remainingChars, setRemainingChars] = useState(200);

    const handleToggle = (value) => () => {
      const currentIndex = selectedItems.indexOf(value);
      const newSelectedItems = [...selectedItems];

      if (currentIndex === -1) {
        newSelectedItems.push(value);
      } else {
        newSelectedItems.splice(currentIndex, 1);
      }

      setSelectedItems(newSelectedItems);
    };

    const handleOtherDetailsChange = (event) => {
      const newValue = event.target.value;
      setOtherDetails(newValue);
      setRemainingChars(200 - newValue.length);
    };
  return (
    <PageHeader title="Your Skills">
      <List>
        {skills.map((value) => {
          return (
            <StyledListItem
              key={value}
              button
              selected={selectedItems.indexOf(value) !== -1}
              onClick={handleToggle(value)}
            >
              <ListItemText primary={value} />
            </StyledListItem>
          );
        })}
      </List>
      <Box mt={2}>
        <Typography fontSize="14px" fontWeight={500}>Others (Enter details below)</Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          placeholder="Others (Enter details below)"
          inputProps={{ maxLength: 200 }}
        />
        <Typography variant="body2" align="right" color="textSecondary">
          Limit 200 characters and spaces. Remaining {remainingChars}
        </Typography>
      </Box>
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary">
          Update Skill Set
        </Button>
      </Box>
    </PageHeader>
  );
};

export default YourSkills;
