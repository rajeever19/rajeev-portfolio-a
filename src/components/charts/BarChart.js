// components/BarChart.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Clear previous content
    svg.selectAll('*').remove();

    // Create a group to contain everything (zoomable area)
    const zoomGroup = svg.append('g').attr('class', 'zoom-group');

    // Add bars
    zoomGroup
      .append('g')
      .attr('fill', 'steelblue')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d) => x(d.name))
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => y(0) - y(d.value))
      .attr('width', x.bandwidth());

    // Add x-axis
    const xAxis = (g) =>
      g
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add y-axis
    const yAxis = (g) =>
      g.attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y));

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    // Add zoom functionality
    const zoom = d3.zoom().scaleExtent([1, 5]).on('zoom', (event) => {
      zoomGroup.attr('transform', event.transform); // Apply zoom and pan
    });

    svg.call(zoom); // Attach zoom behavior to the SVG element
  }, [data]);

  return <svg ref={chartRef} width={500} height={300} />;
};

export default BarChart;
