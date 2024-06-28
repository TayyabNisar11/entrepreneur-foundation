"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  OutlinedInput,
} from "@mui/material";

const states = [
  "Colorado",
  "Connecticut",
  "Delaware",
  // Add more states as needed
];

const EcosystemProfile = () => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleStateChange = (event) => {
    setSelectedStates(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    if (event.target.value.split(" ").length <= 50) {
      setDescription(event.target.value);
    }
  };

  const handleSubmit = () => {
    // Implement the submit functionality as needed.
    console.log({
      states: selectedStates,
      url,
      description,
    });
  };
  return (
    <PageHeader title="Ecosystem Profile">
      <Box mb={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          State(s) Served
        </Typography>

        <Select
          multiple
          value={selectedStates}
          onChange={handleStateChange}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(", ")}
          fullWidth
          sx={{ mb: 4 }}
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>

        <Typography variant="h6" sx={{ mb: 2 }}>
          URL
        </Typography>
        <TextField
          variant="outlined"
          value={url}
          onChange={handleUrlChange}
          fullWidth
          sx={{ mb: 4 }}
        />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Ecosystem Description (Limit: 50 words)
        </Typography>
        <TextField
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 4 }}
        />

        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" onClick={handleSubmit}>
            Update Ecosystem Profile
          </Button>
        </Box>
      </Box>
    </PageHeader>
  );
};

export default EcosystemProfile;
