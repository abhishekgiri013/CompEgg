

// import React, { useEffect } from 'react';
// import * as d3 from 'd3';

// const HeatMap = ({ userCalendar }) => {
//   console.log(userCalendar, "from heatmap usercalender");
//   useEffect(() => {
//     // Ensure submissionCalendar is a valid object
//     const submissionCalendar = userCalendar?.submissionCalendar ? JSON.parse(userCalendar.submissionCalendar) : {};

//     // Calculating stats for header
//     const totalSubmissions = Object.values(submissionCalendar).reduce((sum, count) => sum + count, 0);
//     // const totalActiveDays = Object.keys(submissionCalendar).length;
//     const maxStreak = userCalendar?.streak || 0;

//     // Convert UNIX timestamps to dates and count
//     const heatmapData = Object.keys(submissionCalendar).map((timestamp) => ({
//       date: new Date(parseInt(timestamp) * 1000),
//       count: submissionCalendar[timestamp],
//     }));

//     // Set up SVG dimensions
//     const rectSize = 24; // Size of heatmap squares
//     const gap = 6; // Gap between squares
//     const monthGap = 35; // Gap between months

//     const endDate = new Date();
//     const startDate = new Date(endDate.getFullYear(), endDate.getMonth() - 6, 1);

//     const monthsInView = d3.timeMonths(startDate, endDate);
//     const weeksInPeriod = monthsInView.reduce((acc, month) => {
//       const weeks = d3.timeWeeks(month, d3.timeMonth.offset(month, 1));
//       return acc.concat(weeks);
//     }, []);

//     const svgWidth = weeksInPeriod.length * (rectSize + gap) + 280;
//     const svgHeight = (8 * (rectSize + gap)) + monthGap + 100; // Adjusted to fit the text

//     // Create the SVG container
//     const svg = d3.select("#heatmap")
//       .attr("width", svgWidth)
//       .attr("height", svgHeight);

//     // Create a tooltip div
//     const tooltip = d3.select("#tooltip");

//     // Set up color scale
//     const colorScale = d3.scaleThreshold()
//       .domain([1, 3, 5, 7])
//       .range([
//         "#313030",
//         "#543a04",
//         "#e9b44a",
//         "#946508",
//         "#f7ce7d"
//       ]);

//     // Create a map to store month start positions
//     const monthGaps = {};
//     let currentXOffset = 0;

//     monthsInView.forEach((month, i) => {
//       const firstWeek = d3.timeWeek.floor(month);
//       const weekIndex = d3.timeWeek.count(startDate, firstWeek);
//       monthGaps[month.toDateString()] = currentXOffset;
//       currentXOffset += (d3.timeWeeks(month, d3.timeMonth.offset(month, 1)).length * (rectSize + gap)) + monthGap;
//     });

//     // Draw heatmap rectangles
//     svg.selectAll("rect")
//       .data(d3.timeDays(startDate, endDate))
//       .enter()
//       .append("rect")
//       .attr("x", (d) => {
//         const monthStart = d3.timeMonth.floor(d);
//         const weekIndex = d3.timeWeek.count(monthStart, d);
//         return monthGaps[monthStart.toDateString()] + (weekIndex * (rectSize + gap));
//       })
//       .attr("y", (d) => {
//         const dayIndex = d3.timeDay.count(d3.timeWeek.floor(d), d);
//         return (dayIndex * (rectSize + gap)) + monthGap + 50; // Adjusted to make room for the stats text
//       })
//       .attr("width", rectSize)
//       .attr("height", rectSize)
//       .attr("fill", (d) => {
//         const matchingData = heatmapData.find(
//           (data) => data.date.toDateString() === d.toDateString()
//         );
//         const count = matchingData ? matchingData.count : 0;
//         return colorScale(count);
//       })
//       .on("mouseover", function(event, d) {
//         const matchingData = heatmapData.find(
//           (data) => data.date.toDateString() === d.toDateString()
//         );
//         const count = matchingData ? matchingData.count : 0;

//         // Get the mouse position relative to the SVG element
//         const [x, y] = d3.pointer(event);

//         tooltip.style("visibility", "visible")
//           .style("opacity", 1)
//           .text(`${d.toDateString()}: ${count} submissions`)
//           .style("top", `${y + 10}px`)
//           .style("left", `${x - 10}px`);
//       })
//       .on("mousemove", function(event) {
//         const [x, y] = d3.pointer(event);

//         tooltip
//           .style("top", `${y + 10}px`)
//           .style("left", `${x  - 10}px`);
//       })
//       .on("mouseout", () => tooltip.style("visibility", "hidden").style("opacity", 0));

//     // Add month labels
//     svg.selectAll("text.month-label")
//       .data(monthsInView)
//       .enter()
//       .append("text")
//       .attr("class", "month-label")
//       .attr("x", (d) => monthGaps[d.toDateString()] + 15) // Position the month label within the gap
//       .attr("y", monthGap + 30) // Adjust y to be below the stats text
//       .attr("fill", "#f7d185")
//       .text(d3.timeFormat("%B"));

//     // Add statistics text in a single line inside SVG
//     const statYPosition = 20; // Y position for all stats

//     svg.append("text")
//       .attr("x", 0)
//       .attr("y", statYPosition)
//       .attr("fill", "#f7d185")
//       .attr("class", "stat-text")
//       .text(`${totalSubmissions} submissions in current year`);

//     svg.append("text")
//       .attr("x", 750) // Adjust x to align on the same line
//       .attr("y", statYPosition)
//       .attr("fill", "#f7d185")
//       .attr("class", "stat-text")
//       .text(`Total active days: ${userCalendar.totalActiveDays}`);

//     svg.append("text")
//       .attr("x", 950) // Adjust x to align on the same line
//       .attr("y", statYPosition)
//       .attr("fill", "#f7d185")
//       .attr("class", "stat-text")
//       .text(`Max streak: ${maxStreak}`);

//   }, [userCalendar]);

//   return (
//     <div className="heatmap-container p-6 bg-[#1c1c1b] relative">
//       <svg id="heatmap" className="bg-[#121212] rounded-lg shadow-lg p-5"></svg>
//       <div id="tooltip" className="absolute bg-[#121212] text-[#f7d185] p-2 rounded text-xs opacity-0 transition-opacity pointer-events-none"></div>
//     </div>
//   );
// };

// export default HeatMap;



import React, { useEffect } from 'react';
import * as d3 from 'd3';

const HeatMap = ({ userCalendar }) => {
  useEffect(() => {
    const submissionCalendar = userCalendar?.submissionCalendar ? JSON.parse(userCalendar.submissionCalendar) : {};

    const totalSubmissions = Object.values(submissionCalendar).reduce((sum, count) => sum + count, 0);
    const maxStreak = userCalendar?.streak || 0;

    // Convert UNIX timestamps to dates and counts
    const heatmapData = Object.keys(submissionCalendar).map((timestamp) => ({
      date: new Date(parseInt(timestamp) * 1000),
      count: submissionCalendar[timestamp],
    }));

    // Set up SVG dimensions
    const rectSize = 15; // Reduced size of heatmap squares
    const gap = 4; // Reduced gap between squares
    const monthGap = 25; // Reduced gap between months

    const endDate = new Date();
    const startDate = new Date(endDate.getFullYear(), 0, 1); // Start from January 1st of the current year

    const monthsInView = d3.timeMonths(startDate, endDate);
    const weeksInView = monthsInView.reduce((acc, month) => {
      const weeks = d3.timeWeeks(month, d3.timeMonth.offset(month, 1));
      return acc.concat(weeks);
    }, []);

    const svgWidth = weeksInView.length * (rectSize + gap) + 300; // Adjusted width based on weeks
    const svgHeight = 250; // Reduced height for scrollable area

    // Create the SVG container
    const svg = d3.select("#heatmap")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // Create a tooltip div
    const tooltip = d3.select("#tooltip");

    // Set up color scale
    const colorScale = d3.scaleThreshold()
      .domain([1, 3, 5, 7])
      .range([
        "#313030",
        "#543a04",
        "#e9b44a",
        "#946508",
        "#f7ce7d"
      ]);

    // Create a map to store month start positions
    const monthGaps = {};
    let currentXOffset = 0;

    monthsInView.forEach((month) => {
      monthGaps[month.toDateString()] = currentXOffset;
      const weeksInMonth = d3.timeWeeks(month, d3.timeMonth.offset(month, 1));
      currentXOffset += weeksInMonth.length * (rectSize + gap) + monthGap; // Update x offset for the next month
    });

    // Draw heatmap rectangles
    svg.selectAll("rect")
      .data(d3.timeDays(startDate, endDate))
      .enter()
      .append("rect")
      .attr("x", (d) => {
        const monthStart = d3.timeMonth.floor(d);
        const weekIndex = d3.timeWeek.count(monthStart, d);
        return monthGaps[monthStart.toDateString()] + (weekIndex * (rectSize + gap));
      })
      .attr("y", (d) => {
        const dayIndex = d3.timeDay.count(d3.timeWeek.floor(d), d);
        return (dayIndex * (rectSize + gap)) + monthGap + 40; // Adjusted to make room for the stats text
      })
      .attr("width", rectSize)
      .attr("height", rectSize)
      .attr("fill", (d) => {
        const matchingData = heatmapData.find(
          (data) => data.date.toDateString() === d.toDateString()
        );
        const count = matchingData ? matchingData.count : 0;
        return colorScale(count);
      })
      .on("mouseover", function (event, d) {
        const matchingData = heatmapData.find(
          (data) => data.date.toDateString() === d.toDateString()
        );
        const count = matchingData ? matchingData.count : 0;

        const [x, y] = d3.pointer(event);

        tooltip.style("visibility", "visible")
          .style("opacity", 1)
          .text(`${d.toDateString()}: ${count} submissions`)
          .style("top", `${y}px`)
          .style("left", `${x - 50}px`);
      })
      .on("mousemove", function (event) {
        const [x, y] = d3.pointer(event);

        tooltip
          .style("top", `${y}px`)
          .style("left", `${x - 50}px`);
      })
      .on("mouseout", () => tooltip.style("visibility", "hidden").style("opacity", 0));

    // Add month labels
    svg.selectAll("text.month-label")
      .data(monthsInView)
      .enter()
      .append("text")
      .attr("class", "month-label")
      .attr("x", (d) => monthGaps[d.toDateString()] + 10) // Position the month label within the gap
      .attr("y", monthGap + 20) // Adjust y to be below the stats text
      .attr("fill", "#f7d185")
      .text(d3.timeFormat("%B"));

    // Add statistics text in a single line inside SVG
    const statYPosition = 15; // Y position for all stats

    svg.append("text")
      .attr("x", 0)
      .attr("y", statYPosition)
      .attr("fill", "#f7d185")
      .attr("class", "stat-text")
      .text(`${totalSubmissions} submissions in current year`);

    svg.append("text")
      .attr("x", 630) // Adjust x to align on the same line
      .attr("y", statYPosition)
      .attr("fill", "#f7d185")
      .attr("class", "stat-text")
      .text(`Total active days: ${userCalendar.totalActiveDays}`);

    svg.append("text")
      .attr("x", 800) // Adjust x to align on the same line
      .attr("y", statYPosition)
      .attr("fill", "#f7d185")
      .attr("class", "stat-text")
      .text(`Max streak: ${maxStreak}`);

  }, [userCalendar]);

  return (
    <div className="heatmap-container p-4 bg-[#1c1c1b] relative">
      <div className="overflow-x-auto">
        <svg id="heatmap" className="bg-[#121212] rounded-lg shadow-lg p-5"></svg>
      </div>
      <div id="tooltip" className="absolute bg-[#191919] border-white text-[#f7d185] p-2 rounded text-xs opacity-0 transition-opacity pointer-events-none shadow-xl"></div>
    </div>
  );
};

export default HeatMap;
