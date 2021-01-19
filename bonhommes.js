var red = "#e5474b";

var grey = "#ADAAAA";

var blue = "#4682B4"

var probaReal = 0.2;

var probaEst = 0.34;

var stickmen = [ 
    {"id":1, "pos" :[0, -600]},
    {"id":2, "pos" :[100, -600]},
    {"id":3, "pos" :[200, -600]},
    {"id":4, "pos" :[300, -600]},
    {"id":5, "pos" :[400, -600]},
    {"id":6, "pos" :[500, -600]},
    {"id":7, "pos" :[600, -600]},
    {"id":8, "pos" :[700, -600]},
    {"id":9, "pos" :[800, -600]},
    {"id":10, "pos" :[900, -600]},    
  ]   

var stickmenID = stickmen.map((item) => {
    return item.id;
  })   

var proReal = Math.floor(probaReal*10);  

var proEst = Math.floor(probaEst*10);  

var numRedStickmen = 1 ;

var numBlueStickmen = 1 ;

if (proReal == 0){  numRedStickmen = 1} else { numRedStickmen = proReal }

if (proEst == 0){  numBlueStickmen = 1} else { numBlueStickmen = proEst }

redStickmen = stickmen.slice(0, numRedStickmen);

blueStickmen = stickmen.slice(0, numBlueStickmen);

var stickman_path =`<circle cx="255.995" cy="64" r="64"/><path d="M351.899,334.4l-14.56-145.568C335.707,172.384,322.011,160,305.531,160h-99.04c-16.512,0-30.208,12.384-31.84,28.8l-14.56,145.6c-0.448,4.512,1.024,8.96,4.064,12.352c3.008,3.328,7.328,5.248,11.84,5.248h17.504l13.12,131.2c1.632,16.384,15.36,28.8,31.872,28.8h35.04c16.512,0,30.208-12.416,31.84-28.8l13.12-131.2h17.504c4.544,0,8.832-1.92,11.872-5.248C350.907,343.392,352.379,338.912,351.899,334.4z"/>`

var svg=d3.select("#canvasBonhommes").append("svg")
  .attr("viewBox", [0, -680, 2000, 400])
  .style('background-color', "white");

var svg2=d3.select("#canvasBonhommes2").append("svg")
  .attr("viewBox", [0, -680, 2000, 500])
  .style('background-color', "white");  

svg.selectAll("g")
  .data(stickmen)
  .enter().append("g")
  .attr("id", d => d.id)
  .attr("transform", d => "translate(" + d.pos[0] + "," + d.pos[1] + ") " + "scale(0.5, 0.5)" )
  .attr("fill",grey)
  .attr("stroke", "none")
  .html(stickman_path)
  .transition()
  .duration(2000)
  .attr("fill", d => { if (redStickmen.includes(d)){return red;} else {return grey;} } ); 

svg2.selectAll("g")
  .data(stickmen)
  .enter().append("g")
  .attr("id", d => d.id)
  .attr("transform", d => "translate(" + d.pos[0] + "," + d.pos[1] + ") " + "scale(0.5, 0.5)" )
  .attr("fill",grey)
  .attr("stroke", "none")
  .html(stickman_path)
  .transition()
  .duration(2000)
  .attr("fill", d => { if (blueStickmen.includes(d)){return blue;} else {return grey;} } ); 


var legend1=d3.select("#legendBonhommes").append("svg")
        .attr("width", "100%")
        .attr("height", 70);    

var leg1 = legend1.append("g")
    .attr("transform","translate(30,0)");

leg1.append("rect")
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill",red);

leg1.append("text")
    .attr("x", 25)
    .attr("y", 15)
    .attr("fill", "black")
    .text("votre réponse");

leg1.append("rect")
    .attr("y", 30)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill",blue);

leg1.append("text")
    .attr("x", 25)
    .attr("y", 45)
    .attr("fill", "black")
    .text("vraie probabilité de retour à l'emploi");