import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js/auto';
import { DateTime } from 'luxon';

const useConfig = (data, label) => ({
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
});

const StockChart = ({ cdata }) => {
  if (cdata === undefined) {
    return null;
  }

  const data = cdata.map((d) => d.close);
  const label = cdata.map((d) => d.date);

  useEffect(() => {
    const chart = new Chart(document.getElementById('stockChart'), useConfig(data, label));
    return () => chart.destroy();
  }, [cdata]);

  return (
    <canvas id="stockChart" width="200" height="200" />
  );
};

StockChart.propTypes = {
  cdata: PropTypes.instanceOf(Array).isRequired,
};

export default StockChart;
