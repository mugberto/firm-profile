import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { DateTime } from 'luxon';
import { label, data } from './data';

const config = {
  type: 'line',
  data: {
    labels: label.slice(0, 9),
    datasets: [
      {
        label: 'Price per share',
        data: data.slice(0, 9),
      },
    ],
  },
  options: {
    datasets: {
      line: {
        borderWidth: 2,
        backgroundColor: 'rgb(255, 99, 132, 0)',
        borderColor: '#fff',
        pointStyle: 'star',
      },
    },
    scales: {
      x: {
        grid: {
          color: () => '#9998',
        },
        ticks: {
          color: '#fff',
          callback(val, i) {
            const timeString = this.getLabelForValue(val);
            const ftm = DateTime.fromSQL(timeString).toFormat("dd'-'LLL HH':'mm");
            return (i % 4 === 0) ? ftm : '';
          },
        },
      },
      y: {
        grid: {
          color: () => '#9998',
        },
        ticks: {
          color: '#fff',
          callback(value) {
            return `$${value}`;
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          boxHeight: 1,
          color: '#fff',
        },
      },
    },
  },
};

const StockChart = () => {
  useEffect(() => {
    const chart = new Chart(document.getElementById('stockChart'), config);
    return () => chart.destroy();
  }, []);

  return (
    <canvas id="stockChart" width="200" height="200" />
  );
};

export default StockChart;
