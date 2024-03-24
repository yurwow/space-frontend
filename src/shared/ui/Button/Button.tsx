import { Button, ButtonProps, styled } from '@mui/material';

export const BaseButton = styled(Button)<ButtonProps>(() => ({
  '&': {
    borderRadius: 'var(--border-radius)',
    textTransform: 'none',
    minWidth: 0,
  },
}));
