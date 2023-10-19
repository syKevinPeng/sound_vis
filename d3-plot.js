import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"


// Set up scatter plot dimensions
var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom


// Create line plot
var svg = d3.select("#my_plot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g") // Add group
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")




//  using D3 to load json data from backend function
d3.json('/random/1000')
    .then(function (data) {

        var mappedData = data.map(function (d) {
            return {
                x: d[0],
                y: d[1]
            }
        })
        console.log(mappedData)



        // Set up x and y scales
        var x = d3.scaleLinear()
            .range([0, width])

        var y = d3.scaleLinear()
            .range([height, 0])

        // Set up x and y domains
        x.domain(d3.extent(mappedData, function (d) { return d.x })).nice()
        y.domain(d3.extent(mappedData, function (d) { return d.y })).nice()

        // Set up x and y axes
        var xAxis = d3.axisBottom(x),
            yAxis = d3.axisLeft(y)

        // Set up line plot
        var line = d3.line()
            .x(function (d) { return x(d.x) })
            .y(function (d) { return y(d.y) })

        // Add line plot
        svg.append("path")
            .datum(mappedData)
            .attr("class", "line")
            .attr("d", line)

        // Add x and y axes
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
    })