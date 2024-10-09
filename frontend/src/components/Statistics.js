import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({});

  const fetchStatistics = async () => {
    const { data } = await axios.get('/api/statistics', {
      params: { month }
    });
    setStatistics(data);
  };

  useEffect(() => {
    fetchStatistics();
  }, [month]);

  return (
    <div>
      <h3>Statistics for {month}</h3>
      <p>Total Sale Amount: ${statistics.totalSaleAmount}</p>
      <p>Total Sold Items: {statistics.totalSoldItems}</p>
      <p>Total Unsold Items: {statistics.totalUnsoldItems}</p>
    </div>
  );
};

export default Statistics;
