// components/BarChart.js
''
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import BarChart from '@/components/charts/BarChart';





const TestProject = () => {
  const data = [
    { name: 'A', value: 30 },
    { name: 'B', value: 80 },
    { name: 'C', value: 45 },
    { name: 'D', value: 60 },
    { name: 'E', value: 20 },
    { name: 'F', value: 90 },
    { name: 'G', value: 50 },
  ];

  return (
    <div>
      <h1>Bar Chart with D3.js in Next.js</h1>
      <BarChart data={data} />
    </div>
  );
};

export default TestProject
