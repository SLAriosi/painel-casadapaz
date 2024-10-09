import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Home;
