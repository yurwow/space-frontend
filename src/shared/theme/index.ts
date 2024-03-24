import { createTheme } from '@mui/material';
import {
  blue, blueGrey, grey, red,
} from '@mui/material/colors';

import { shadows } from './shadows';
import { typography } from './typography';

export const theme = createTheme({
  palette: {
    background: {
      default: 'white',
    },
    primary: {
      main: '#6E63E6',
      light: blue['200'],
    },
    secondary: {
      main: grey['500'],
      light: blueGrey['50'],
    },
    error: {
      main: red['500'],
    },
  },
  shadows,
  typography,
});
