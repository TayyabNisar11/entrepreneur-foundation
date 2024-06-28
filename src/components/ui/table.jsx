'use client'
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  '& .MuiTableCell-root': {
    backgroundColor: grey[800], 
    color: theme.palette.common.white,
    fontWeight: 400,
    fontSize: '13px',
    height: '38px',
    padding: theme.spacing(1),
    borderColor: grey[300],
    borderWidth: '1px',
    borderStyle: 'solid',
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '13px',
  height: '38px',
  padding: theme.spacing(1),
  borderColor: grey[300], 
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign:"center"
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
  },
}));