var rawbase = 'https://raw.githubusercontent.com/';

var jsonloc = 'henricro/bonneInfo/main/simulDataBonneInfo.json';

var width = 1280;

var height = 1000;

var indRome = "A1101"

dpt = topojson.feature(departements, departements.objects.DEPT)

var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(30);

var projection = d3
    .geoConicConformal() // Lambert-93
    .center([2.454071, 46.279229]) // Center on France
    .scale(5000)
    .translate([width / 2 - 10, height / 2 + 50])

var color = d3.scaleThreshold([10, 20, 30, 40, 50, 60, 70, 80 ], d3.schemeRdYlGn[9]);

var myColor = d3.scaleLinear().domain([1,100])
  .range(["white", "blue"]);

/*function color (proba) {
    if (proba > 50) {return "blue"} else { return "orange"}
}*/

var path = d3.geoPath(projection); 

$.getJSON(rawbase + jsonloc, function( data ) {

    //data_filtered =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==IndDepartement)[0].SALAIRE_MOYEN;

    var svg=d3.select("#canvasCarte");
        
    svg
        .append("g")
        .attr("id", "map")
        .selectAll("path")
        .data(dpt.features)
        .join("path")
        .attr("class", "dpt")
        .attr("cursor", "pointer")
        .attr("stroke", "white")
        .attr("stroke-width", 0.5)
        .attr("fill",d => { 
            var dep = d.properties.DEP ;
            var proba =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0].PROBA;
            console.log(proba);
            return color(proba);
        })
        .attr("d", path);   

    var rect = svg.append("g");

    var tooltip = svg.append("g");
    
    svg
        .selectAll(".dpt")
        .on("touchmove mousemove", function(event, d) {
        
            tooltip.call(
                callout,
                d.properties.Nom  
            );
        
            tooltip.attr("transform", `translate(${d3.pointer(event, this)})`);
        
            d3.select(this)
                .attr("stroke", "red")
                .attr("stroke-width", 2)
                .raise();
        
        })

        .on("touchend mouseleave", function() {
            tooltip.call(callout, null);
            d3.select(this)
                .attr("stroke", "white")
                .attr("stroke-width", 0.5)
                .lower();
        })

        .on("click", function(event, d) {

            var dep = d.properties.DEP;

            var salMoy =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
                
            var Tensions =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0].TENSIONS;

            var proba =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0].PROBA;

            $("#nomDept").html(d.properties.Nom);
            
            $("#salVal").html(salMoy + " €");

            $("#tensVal").html(Tensions);

            $("#probNum").html(proba + " %");

            var dataa = [proba, 100 - proba];
            var arcs = d3.pie()(dataa);
            var pie = svg.append("g")
                .selectAll("path")
                .data(arcs)
                .join("path")
                .attr("id", "pie")
                .attr("d", arc)
                .attr("transform", "translate(950, 115)")
                .attr("fill", function(d){
                        if (proba<50){
                        if (d.index==1) {return color(d.data)} 
                        else {return "white"}}
                        else {  
                        if (d.index==0) {return color(d.data)} 
                        else {return "white"}
                        }  
                });
            
                    
        });

    callout = (g, value) => {
        if (!value) return g.style("display", "none");
        
        g.style("display", null)
            .style("pointer-events", "none")
            .style("font", "10px sans-serif");
        
        var path = g
            .selectAll("path")
            .data([null])
            .join("path")
            .attr("fill", "white")
            .attr("stroke", "black");
        
        var text = g
            .selectAll("text")
            .data([null])
            .join("text")
            .call(text =>
            text
                .selectAll("tspan")
                .data((value + "").split(/\n/))
                .join("tspan")
                .attr("x", 0)
                .attr("y", (d, i) => `${i * 1.1}em`)
                .style("font-weight", (_, i) => (i ? null : "bold"))
                .style("font-size", (_, i) => (i ? null : 12))
                .text(d => d)
            );
        
        var { x, y, width: w, height: h } = text.node().getBBox();
        
        text.attr("transform", `translate(${-w / 2},${15 - y})`);
        path.attr(
            "d",
            `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`
        );
    } 

});
