import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const IndiaMap = () => {
  const svgRef = useRef();
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height).style('background-color', '#f5f5f5');

    const projection = d3.geoMercator()
      .scale(1000)
      .center([78.9629, 22.5937]) // Center on India
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Load the GeoJSON file (which is stored in the public folder)
    d3.json('/india-states.json')  // Local file reference
      .then((geoData) => {
        svg.selectAll('path')
          .data(geoData.features)
          .join('path')
          .attr('d', path)
          .attr('fill', '#a8d5e5')
          .attr('stroke', '#333')
          .on('click', (event, d) => {
            const stateName = d.properties.name;
            setSelectedState({
              name: stateName,
              population: d.properties.population || 'N/A'
            });
          })
          .on('mouseover', function () {
            d3.select(this).attr('fill', '#69a3b2');
          })
          .on('mouseout', function () {
            d3.select(this).attr('fill', '#a8d5e5');
          });
      })
      .catch((error) => console.error('Error loading GeoJSON data:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>India Map with State Population</h1>
      <svg ref={svgRef}></svg>
      {selectedState && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>State:</strong> {selectedState.name} <br />
          <strong>Population:</strong> {selectedState.population.toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default IndiaMap;
