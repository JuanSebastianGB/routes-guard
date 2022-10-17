import { PrivateRoutes, User } from '@/models';
import { AppStore } from '@/models/store.model';
import { createUser } from '@/redux/states/userSlice';
import { getCharacter } from '@/services';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore): User => store.user);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      dispatch(createUser(await getCharacter()));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };
  return (
    <div>
      <h2>Login Component</h2>
      <pre>{JSON.stringify(userState)}</pre>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
