import { PublicRoutes, User } from '@/models';
import { AppStore } from '@/models/store.model';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore): User => store.user);
  return userState.name.length !== 0 ? (
    <Outlet />
  ) : (
    <Navigate replace to={`${PublicRoutes.LOGIN}`} />
  );
};
