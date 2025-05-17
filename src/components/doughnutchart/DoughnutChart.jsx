// DoughnutChart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Sample data
const data = {
  labels: ["Electronics", "Fashion", "Home", "Grocery"],
  datasets: [
    {
      label: "Sales",
      data: [300, 500, 100, 200],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
      ],
      borderWidth: 1,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Sales by Category",
    },
  },
};

const DoughnutChart = () => {
  return (
    <div className="w-[300px] mx-auto h-[250px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
