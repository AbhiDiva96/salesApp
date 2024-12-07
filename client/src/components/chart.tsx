import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const FlowChart = ({ month }: { month: string }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchAndRenderChart = async () => {
      try {
        const response = await api.get(`/product/chart?month=${month}`);
        const { data: priceRanges } = response.data;

        // Extract labels and values dynamically
        const labels = priceRanges.map((range: any) => range.price);
        const values = priceRanges.map((range: any) => range.noOfItems);

        // Update chart data state
        setChartData({
          labels,
          datasets: [
            {
              label: `Price Range Distribution (${month})`,
              data: values,
              backgroundColor: "rgba(75, 192, 192, 0.5)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchAndRenderChart();
  }, [month]);

  
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top" as const, 
    },
    tooltip: {
      callbacks: {
        label: (context: any) => `${context.raw} items`,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Price Ranges",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Items",
      },
      beginAtZero: true,
    },
  },
};



  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">
        Price Range Distribution - {month}
      </h2>
      <div className="w-full max-w-3xl mx-auto">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};
