import { PublicRoutes, sliceTypes } from '@/models';
import { resetUser } from '@/redux/states/userSlice';
import { removeItemFromLocalStorage } from '@/utilities';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export interface LogoutInterface {}

const Logout: React.FC<LogoutInterface> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    removeItemFromLocalStorage(sliceTypes.USER);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };
  return <button onClick={logOut}>Log Out</button>;
};

export default Logout;
