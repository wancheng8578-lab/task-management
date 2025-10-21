'use client';

import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { DefaultizedPieValueType } from '@mui/x-charts/models';

type PieChart = {
  chartData: { label: string; value: number; color?: string }[];
};

const Component = ({ chartData }: PieChart) => {
  const [mounted, setMounted] = useState(false);

  const TOTAL = chartData.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  const options = {
    margin: { right: 5 },
    width: 200,
    height: 200,
  };

  const defaultColor = [
    `#5470c6`,
    `#91cc75`,
    `#fac858`,
    `#ee6666`,
    `#73c0de`,
    `#3ba272`,
    `#fc8452`,
    `#9a60b4`,
    `#ea7ccc`,
  ];

  chartData.map((item, index) => {
    return {
      label: item.label,
      value: item.value,
      color: item.color
        ? item.color
        : defaultColor[index % defaultColor.length],
    };
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data: chartData,
          arcLabel: getArcLabel,
        },
      ]}
      {...options}
    />
  );
};

export { Component };
