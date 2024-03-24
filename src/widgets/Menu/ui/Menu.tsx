import { NavLink, useLocation } from 'react-router-dom';
import { memo } from 'react';
import { TabsProps } from '@mui/material';
import { TABS } from '../model/const.tsx';
import { BaseTab, BaseTabs, TabLabel } from '@/shared/ui/Tabs/Tabs.tsx';

export const NavigationMenu = memo((props: TabsProps) => {
  const location = useLocation();

  return (
    <BaseTabs
      orientation="vertical"
      indicatorColor="primary"
      value={location.pathname}
      {...props}
    >
      {TABS.map((item) => (
        <BaseTab
          key={item.path}
          label={<TabLabel label={item.label} startIcon={item.startIcon} />}
          value={item.path}
          component={NavLink}
          to={item.path}
        />
      ))}
    </BaseTabs>
  );
});
