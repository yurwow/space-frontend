import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/pages/Layout';
import { AppRoutesProps, authRouteConfig, routeConfig } from '@/shared/config/routeConfig/routeConfig.tsx';
import { RequireAuth } from '@/app/providers/Router/ui/RequireAuth.tsx';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>
        {route.element}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(authRouteConfig).map(renderWithWrapper)}
      <Route path="/" element={<Layout />}>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Route>
    </Routes>
  );
};

export default memo(AppRouter);
