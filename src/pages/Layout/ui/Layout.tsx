import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Sidebar } from '@/widgets/Sidebar/Sidebar.tsx';

const Layout = () => (
  <Box className="page-wrapper">
    <Sidebar />
    <Box component="main" py={6}>
      <Outlet />
    </Box>
  </Box>
);

export default Layout;
