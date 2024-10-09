import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
  const [month, setMonth] = useState('March'); // Default to March

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div>
      <h1>Transactions Dashboard</h1>
      <select value={month} onChange={handleMonthChange}>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <h2>Transactions Table</h2>
      <TransactionsTable month={month} />

      <h2>Statistics</h2>
      <Statistics month={month} />

      <h2>Bar Chart</h2>
      <BarChart month={month} />

      <h2>Pie Chart</h2>
      <PieChart month={month} />
    </div>
  );
};

export default App;
