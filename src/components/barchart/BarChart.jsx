// BarChart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample data
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Revenue",
      data: [4000, 3000, 5000, 7000,2000,6000,3000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Monthly Revenue",
    },
  },
};

const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
