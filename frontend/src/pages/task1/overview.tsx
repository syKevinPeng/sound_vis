import Progress from "@/components/Progress";

import * as d3 from "d3";
import { memo } from "preact/compat";
import { useEffect, useRef } from "preact/hooks";

function initD3(elem: HTMLElement) {
  // console.log("initD3");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  // Set up scatter plot dimensions
  const viz1_margin = {
    top: windowHeight / 8,
    right:  20,
    bottom: windowHeight / 8,
    left: windowWidth / 3,
  };
  const width = windowWidth - viz1_margin.left - viz1_margin.right;
  const height = windowHeight - viz1_margin.top - viz1_margin.bottom;

  // Create line plot
  elem.replaceChildren();
  const svg = d3
    .select(elem)
    .append("svg")
    .attr("width", width + viz1_margin.left + viz1_margin.right)
    .attr("height", height + viz1_margin.top + viz1_margin.bottom)
    .append("g") // Add group
    .attr(
      "transform",
      "translate(" + viz1_margin.left + "," + viz1_margin.top + ")"
    );

  type Datum = { x: number; y: number };

  //  using D3 to load json data from backend function
  d3.json("/random/1000")
    .catch((reason) => {
      return [
        [0, 0],
        [1, 1],
        [4, 4],
        [2, 2],
        [3, 3],
      ];
    })
    .then(function (data: [number, number][]) {
      const mappedData = data.map(function (d) {
        return {
          x: d[0],
          y: d[1],
        } as Datum;
      });
      // console.log(mappedData);

      // Set up x and y scales
      const x = d3.scaleLinear().range([0, width]);
      const y = d3.scaleLinear().range([height, 0]);

      // Set up x and y domains
      x.domain(
        d3.extent(mappedData, function (d) {
          return d.x;
        })
      ).nice();
      y.domain(
        d3.extent(mappedData, function (d) {
          return d.y;
        })
      ).nice();

      // Set up x and y axes
      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);

      // Set up line plot
      const line = d3.line<Datum>(
        function (d) {
          return x(d.x);
        },
        function (d) {
          return y(d.y);
        }
      );

      // Add line plot
      svg
        .append("path")
        .datum(mappedData)
        .attr("class", "line")
        .attr("d", line);

      // Add x and y axes
      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      svg.append("g").attr("class", "y axis").call(yAxis);
    });
}

export default memo(() => {
  const d3Elem = useRef<HTMLDivElement>();

  useEffect(() => {
    // console.log("d3Elem.current", d3Elem.current);
    if (d3Elem.current != null) initD3(d3Elem.current);
  }, [d3Elem.current]);

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
        <div ref={d3Elem} />
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
