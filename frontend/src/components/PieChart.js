import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = ({ month }) => {
  const [pieData, setPieData] = useState([]);

  const fetchPieChart = async () => {
    const { data } = await axios.get('/api/pie-chart', {
      params: { month }
    });
    setPieData(data);
  };

  useEffect(() => {
    fetchPieChart();
  }, [month]);

  const chartData = {
    labels: pieData.map(item => item._id),
    datasets: [
      {
        data: pieData.map(item => item.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
