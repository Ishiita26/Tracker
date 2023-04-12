import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  const chartOptions = {
    // responsive: false,
    // maintainAspectRatio: false,
    width: 500, // set the desired width
    height: 500, // set the desired height
  };

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} options={chartOptions} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
