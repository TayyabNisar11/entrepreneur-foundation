import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

const EFInput = ({ label, subLabel, helperText, id, ...props }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      {label && (
        <Typography
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          fontWeight={500}
          fontSize="14px"
          my={0.6}
          component="label"
        >
          {label}
          {"  "}
          {subLabel && (
            <Typography fontSize="12px" fontWeight={400} fontStyle="italic">
              ({subLabel})
            </Typography>
          )}
        </Typography>
      )}
      <OutlinedInput  sx={{ maxHeight: "48px" }} {...props} />
      {helperText && (
        <Typography fontSize="13px" fontWeight={300} fontStyle="italic">
          {helperText}
        </Typography>
      )}
    </FormControl>
  );
};

export default EFInput;
