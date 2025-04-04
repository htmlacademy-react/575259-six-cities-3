import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: ReactNode;
  hasAccess?: boolean;
}

export const PrivateRoute = ({ children, hasAccess = false }: PrivateRouteProps) => hasAccess ? children : <Navigate to={'/'} />;

