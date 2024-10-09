import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = ({ month }) => {
  const [barData, setBarData] = useState([]);

  const fetchBarChart = async () => {
    const { data } = await axios.get('/api/bar-chart', {
      params: { month }
    });
    setBarData(data);
  };

  useEffect(() => {
    fetchBarChart();
  }, [month]);

  const chartData = {
    labels: barData.map(item => item.range),
    datasets: [
      {
        label: '# of Items',
        data: barData.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
