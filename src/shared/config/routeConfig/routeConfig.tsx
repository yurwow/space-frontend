import { RouteProps } from 'react-router-dom';
import { SigninPage } from '@/pages/Signin';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AuthRoutes {
  Signin = 'Signin',
  Signup = 'Signup',
}

export enum AppRoutes {
  Main = 'Main',
  Purchases = 'Purchases',
  PurchasesAdd = 'PurchasesAdd',
  Clients = 'Clients',
  Client = 'Client',
}

export const AuthRoutePath: Record<AuthRoutes, string> = {
  [AuthRoutes.Signin]: '/signin',
  [AuthRoutes.Signup]: '/signup',
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.Purchases]: '/purchases',
  [AppRoutes.PurchasesAdd]: '/purchases/add',
  [AppRoutes.Clients]: '/clients',
  [AppRoutes.Client]: '/client/:id',
};

// export type RoutePathValue = typeof RoutePath[keyof typeof RoutePath];

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.Main,
    element: <div>123</div>,
  },
  [AppRoutes.Purchases]: {
    path: RoutePath.Purchases,
    element: <div>123</div>,
  },
  [AppRoutes.PurchasesAdd]: {
    path: RoutePath.PurchasesAdd,
    element: <div>123</div>,
  },
  [AppRoutes.Clients]: {
    path: RoutePath.Clients,
    element: <div>123</div>,
  },
  [AppRoutes.Client]: {
    path: RoutePath.Client,
    element: <div>123</div>,
  },
};

export const authRouteConfig: Record<AuthRoutes, AppRoutesProps> = {
  [AuthRoutes.Signin]: {
    path: `${AuthRoutePath.Signin}`,
    element: <SigninPage />,
  },
  [AuthRoutes.Signup]: {
    path: `${AuthRoutePath.Signup}`,
    element: <div>Signup</div>,
  },
};
