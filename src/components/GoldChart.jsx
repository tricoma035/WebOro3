import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ChartContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  background: ${({ active }) => (active ? "#ffd700" : "#f4f6fa")};
  color: ${({ active }) => (active ? "#1a2236" : "#1a2236")};
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #fff3b0;
  }
`;

const chartDataMock = {
  day: {
    labels: ["09:00", "12:00", "15:00", "18:00", "21:00"],
    data: [1920, 1932, 1928, 1940, 1935],
  },
  month: {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    data: [1910, 1925, 1930, 1940],
  },
  year: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    data: [1800, 1820, 1850, 1880, 1900, 1920, 1930, 1940, 1930, 1920, 1910, 1945],
  },
  all: {
    labels: ["2000", "2005", "2010", "2015", "2020", "2024"],
    data: [300, 450, 1200, 1100, 1800, 1940],
  },
};

function GoldChart() {
  const [range, setRange] = useState("all");

  const chartData = {
    labels: chartDataMock[range].labels,
    datasets: [
      {
        label: "Precio del oro (USD/oz)",
        data: chartDataMock[range].data,
        fill: true,
        backgroundColor: "rgba(255,215,0,0.12)",
        borderColor: "#ffd700",
        pointBackgroundColor: "#ffd700",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: { color: "#1a2236" },
      },
      x: {
        ticks: { color: "#1a2236" },
      },
    },
  };

  return (
    <ChartContainer>
      <Tabs>
        <Tab active={range === "day"} onClick={() => setRange("day")}>Día</Tab>
        <Tab active={range === "month"} onClick={() => setRange("month")}>Mes</Tab>
        <Tab active={range === "year"} onClick={() => setRange("year")}>Año</Tab>
        <Tab active={range === "all"} onClick={() => setRange("all")}>Histórico</Tab>
      </Tabs>
      <Line data={chartData} options={options} />
    </ChartContainer>
  );
}

export default GoldChart;