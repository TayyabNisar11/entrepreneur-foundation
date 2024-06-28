'use client'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const colorOptions = {
  primary: grey[700],
  secondary: grey[300],
};
const textColor = {
  primary: "white",
  secondary: "black",
};
export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'width' && prop !== 'colorVariant',
})(({ size, width, colorVariant }) => ({
  padding: `${size/1.3}px ${size}px`,
  fontSize: `${size}px`,
  width: width ? `${width}px` : 'auto',
  backgroundColor: colorOptions[colorVariant],
  borderRadius:"10px",
  color: textColor[colorVariant],
  '&:hover': {
    backgroundColor: colorVariant === 'primary' ? grey[800] : grey[400],
  },
}));
