import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const colors = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d"];

const Piechart = ({ data }) => {
  return (
    <PieChart width={600} height={400}>
      <Pie data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default Piechart;
