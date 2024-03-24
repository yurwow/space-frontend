import {
  Avatar, Paper, Stack, Typography,
} from '@mui/material';
import classNames from './Sidebar.module.css';
import { NavigationMenu } from '@/widgets/Menu';

export const Sidebar = () => {

  return (
    <Paper className={classNames.sidebar} sx={{ py: 6, px: 4 }}>
      <Stack justifyContent="space-between" height="100%">
        <Stack spacing={4}>
          <Typography variant="h1">Space</Typography>
          <NavigationMenu />
        </Stack>
        <Stack
          className={classNames.user}
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar sx={{ width: 40, height: 40 }} />
          <Typography variant="h4">Пользователь</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
