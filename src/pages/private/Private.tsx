import { PrivateRoutes } from '@/models';
import { RoutesWithNotFound } from '@/utilities';
import React, { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';

interface PrivateInterface {}

const Private: React.FC<PrivateInterface> = () => {
  const Home = lazy(() => import('./Home/Home'));
  const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
  );
};

export default Private;
