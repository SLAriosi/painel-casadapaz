import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';

const { Header } = Layout;

const DashboardHeader: React.FC = () => {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <MenuFoldOutlined style={{ padding: '0 20px', fontSize: '20px' }} />
      <Typography variant="h6" noWrap component="div">
        Meu Dashboard
      </Typography>
    </Header>
  );
};

export default DashboardHeader;
