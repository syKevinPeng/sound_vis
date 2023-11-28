import Progress from "@/components/Progress";
import * as d3 from "d3";

import { memo } from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";
import musicFile from "@/assets/csv/music.csv";

// Set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 960 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


export default memo(() => {
  const d3Elem = useRef<HTMLDivElement>();
  const [data, setData] = useState<[number, number][]>();

  useEffect(() => {
    const svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Read the data
d3.csv(musicFile).then(function (data) {
  // Format the data
  data.forEach(function (d) {
      d.Time = +d.Time;
      d.Amplitude = +d.Amplitude / 1000000000;
  });

  // Add X axis
  const x = d3
      .scaleLinear()
      .domain(
          d3.extent(data, function (d) {
              return d.Time;
          })
      )
      .range([0, width - 200]);
  svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3
      .scaleLinear()
      .domain([
          d3.min(data, function (d) {
              return +d.Amplitude;
          }),
          d3.max(data, function (d) {
              return +d.Amplitude;
          }),
      ])
      .range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // add y axis label
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 5)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("amplitude");
  // add x axis label
  svg.append("text")
      .attr(
          "transform",
          `translate(${width / 2}, ${height + margin.top + 20})`
      )
      .style("text-anchor", "middle")
      .text("time");

  const line = svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
          .x(function (d) { return x(d.Time) })
          .y(function (d) { return y(d.Amplitude) })
      );

  const sliderWidth = "width: " + width + "px;";

  const slider = d3
      .select("#timeSlider")
      .attr("style", sliderWidth)
      .attr("min", 0)
      .attr("max", data.length - 1)
      .attr("value", data.length - 1)
      .on("input", function () {
          const timeIndex = +this.value;
          const newData = data.slice(0, timeIndex);

          // Update the line with new data
          line.datum(newData).attr(
              "d",
              d3.line()
                  .x(function (d) {
                      return x(d.Time);
                  })
                  .y(function (d) {
                      return y(d.Amplitude);
                  })
          );

          // Update the current amplitude line
          currentAmplitude
              .attr("x1", x(data[timeIndex].Time))
              .attr("y1", y(data[timeIndex].Amplitude))
              .attr("y2", y(data[timeIndex].Amplitude));

          // Update the current amplitude text
          currentAmplitudeText.text(
              `Amplitude: ${data[timeIndex].Amplitude.toFixed(2)}`
          ).attr("y", y(data[timeIndex].Amplitude) - 10);
      });

  // add a line to indicate current amplitude and text to indicate amplitude
  const currentAmplitude = svg.append("line")
      .attr("x1", 0)
      .attr("y1", y(0))
      .attr("x2", width)
      .attr("y2", y(0))
      .attr("stroke-width", 1)
      .attr("stroke", "red");

  const currentAmplitudeText = svg.append("text")
      .attr("x", width - 100)
      .attr("y", y(0) - 10)
      .attr("fill", "red")
      .text("Amplitude: ");
      
});

  }, []);


  return (
    <div class="content">
      <div class="progress-div">
        <Progress progress="Task1_0" />
      </div>
      <div class="content-div">
        <p>
          The quest to delineate music from noise is a fascinating study of
          sound and its perception. Our research endeavors to pinpoint the
          defining characteristics that separate the order and harmony of music
          from the perceived disorder of noise. This examination is rooted in
          the physics of sound waves and extends to the complex realms of
          auditory perception and cultural interpretation.
        </p>
        <p>
          Music is traditionally understood as a deliberate arrangement of
          sounds, marked by rhythm, melody, and harmony, intentionally composed
          to convey emotion and aesthetic pleasure. Noise, conversely, is often
          characterized as sound without deliberate structure, sometimes erratic
          and undesired, generally lacking the intentionality and organization
          inherent in music.
        </p>
        <div style="display:flex; flex-direction:column">
        <svg width="960" height="500"></svg>
    <input type="range" id="timeSlider" min="0" max="100" value="100" />
        </div>
        <p>
          Yet, the demarcation between music and noise is not absolute; it is
          influenced by individual and cultural subjectivities. The patter of
          rain may be intrusive to some, yet soothing to others. Our research
          focuses on the objective qualities of these auditory phenomena,
          exploring their acoustic properties in an effort to classify and
          understand them within a scientific and cultural framework. Through
          this investigation, we aim to refine our understanding of sound
          patterns, enhancing our ability to discern the complex structure using
          various visualization techniques.
        </p>
      </div>
    </div>
  );
});
