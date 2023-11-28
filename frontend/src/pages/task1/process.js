// Set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 960 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// Append the svg object to the body of the page
const svg = d3
    .select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Read the data
d3.csv("data.csv").then(function (data) {
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

    // timeS

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
                d3
                    .line()
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
