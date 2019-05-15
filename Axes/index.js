var data = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300;

var svg = d3.selectAll("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);
            
var xScale = d3.scaleLinear()
               .domain([0, d3.max(data)/data.length])
               .range([0, svgWidth - 100]);
               
var yScale = d3.scaleLinear()
               .domain([0, d3.max(data)])
               .range([svgHeight - d3.min(data), 0]);
               
var x_axis = d3.axisBottom()
               .scale(xScale);
               
var y_axis = d3.axisLeft()
               .scale(yScale);
            
svg.append("g")
   .attr("transform", "translate(50, 10)")
   .call(y_axis);
   
var xAxisTranslate = svgHeight - 20;

svg.append("g")
   .attr("transform", "translate(50, " + xAxisTranslate + ")")
   .call(x_axis);


