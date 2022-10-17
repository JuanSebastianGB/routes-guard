import { Logout } from '@/components';
import React from 'react';
export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <Logout />
    </div>
  );
};

export default Dashboard;
