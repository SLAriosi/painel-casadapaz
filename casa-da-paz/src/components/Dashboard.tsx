import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Card, Statistic } from 'antd';

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <Statistic title="Usuários Ativos" value={1128} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <Statistic title="Vendas" value={93} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Outros Dados</Typography>
          <Typography>Gráficos e estatísticas aqui...</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
