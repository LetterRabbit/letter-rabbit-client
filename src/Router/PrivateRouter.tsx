import { type ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { getItem } from 'lib/localStorage';
interface Props {
  children: ReactElement;
}

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = getItem('token');

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
