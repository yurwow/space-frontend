import {
  styled, Tab, TabProps, Tabs, TabsProps, Typography,
} from '@mui/material';
import { ReactNode } from 'react';

interface BaseTabsProps extends TabsProps {
  children?: ReactNode;
}

interface BaseTabProps extends TabProps {
  to: string;
}

interface TabLabelProps {
  label: string,
  startIcon: ReactNode;
}

const BaseTabs = styled(Tabs)<BaseTabsProps>(() => ({
  '& .MuiTabs-indicator': {
    width: '0',
  },
}));

const BaseTab = styled(Tab)<BaseTabProps>(({ theme }) => ({
  '&': {
    textTransform: 'none',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: theme.spacing(1),
  },
  '&.Mui-selected': {
    color: 'white',
    background: theme.palette.primary.main,
  },
}));

const TabLabel = ({ label, startIcon }: TabLabelProps) => (
  <Typography
    sx={{ display: 'flex', columnGap: (theme) => theme.spacing(1), alignItems: 'center' }}
    variant="body1"
  >
    {startIcon}
    {' '}
    {label}
  </Typography>
);

export {
  BaseTabs,
  BaseTab,
  TabLabel,
};
