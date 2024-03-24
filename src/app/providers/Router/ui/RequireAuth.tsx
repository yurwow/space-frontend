import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig.tsx';

export function RequireAuth({ children }: { children: ReactNode }) {
  // const auth = useSelector(getUserAuthData);
  const auth = true;
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.Signin} state={{ from: location }} replace />;
  }

  return children;
}
