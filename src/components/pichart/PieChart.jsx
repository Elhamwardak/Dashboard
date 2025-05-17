import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Present", "Absent", "Late"],

    datasets: [
      {
        label: "Attendance",
        data: [60, 25, 15],
        backgroundColor: [
          "rgba(30, 64, 175, 0.9)", // Deep Blue (Present)
          "rgba(59, 130, 246, 0.9)", // Medium Blue (Absent)
          "rgba(191, 219, 254, 1)", // Light Blue (Late)
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)", // White border for clean separation
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h3>Attendance Distribution</h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
