// LineChart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Visitors",
      data: [100, 200, 150, 300, 250, 400, 350, 200, 300, 100, 400, 250],
      borderColor: "rgb(10, 65, 159)",
      backgroundColor: "rgb(10, 65, 159)",
      tension: 0.3,
      fill: true,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    title: {
      display: false,
      text: "Website Visitors Over Time",
    },
  },
};

const LineChart = () => {
  return (
    <div className="w-full h-[200px] sm:h-[250px] lg:h-[250px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;