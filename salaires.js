var red = "#e5474b";

var grey = "#ADAAAA";

var rawbase = 'https://raw.githubusercontent.com/';

var jsonloc = 'cerezamo/LaBonneInfo/main/output/IndicateurSalairesJSON.json';

var IndDepartement = "78" // Mettre le département de l'individu en fonction de la contact liste de Qualtrics

var indRome = "A1101" // Mettre le rome de l'individu en fonction de la contact liste de Qualtrics

// a priori appelé grâce à

// var ind_departement = "${e://Field/DEP}"

// var ind_rome = "${e://Field/ROME}"

var repSal = 20000 // Mettre la réponse de l'individu

// a priori appelé grâce à

//var salRep = "${e://Field/REPONSESALAIREMOY}"

// salRep = parseInt(salRep.replace(/\D/g,''));   // Ici pour transformer "20 000 €" en 20 000

$.getJSON(rawbase + jsonloc, function( data ) {

    data_filtered =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==IndDepartement)[0].SALAIRE_MOYEN;

    var salMoyEst = [ repSal ];

    var salMoy = [ data_filtered ];

    var maxSal = Math.max(salMoyEst[0], salMoy[0]);

    var scaleFactor=10, width=250, height=70 ;

    var scaleSal = d3.scaleLinear()
                .domain([0, maxSal ])
                .range([0, width]);

    var svg2=d3.select("#canvasSalaires").append("svg")
        .attr("width", "100%")
        .attr("height", height);

    var legend1=d3.select("#legendSalaires").append("svg")
        .attr("width", "100%")
        .attr("height", height);    

    var leg1 = legend1.append("g")
        .attr("transform","translate(30,0)");

    leg1.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill",grey);

    leg1.append("text")
        .attr("x", 25)
        .attr("y", 15)
        .attr("fill", "black")
        .classed('little-text', "true")
        .text("votre réponse");

    leg1.append("rect")
        .attr("y", 30)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill",red);

    leg1.append("text")
        .attr("x", 25)
        .attr("y", 45)
        .attr("fill", "black")
        .classed('little-text', "true")
        .text("vrai salaire moyen");

    var bar2=svg2.append("g")
        .data(salMoyEst)
        .attr("transform","translate(10,0)");

    bar2.append("rect")
        .attr("width",0)
        .attr("height", height/2*0.9)
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("fill",grey)
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .attr("width",function(d){
            return scaleSal(d);
        });

    // add the value
    bar2.append("text")
        .attr("x", function(d){
            return scaleSal(d)+5;
        })
        .attr("y", height/2*0.9 - 10)
        .attr("fill","white")
        .attr("font-family","sans-serif")
        .attr("font-size","15px")
        .style("letter-spacing", "0.1em")
        .attr("text-anchor","start")
        .text(function(d){return d+" €";})
        .transition()
        .duration(2000)
        .delay(2000)
        .attr("fill","black");


    var bar2m=svg2.append("g")
        .data(salMoy)
        .attr("transform","translate(10,"+height/2+")");

    bar2m.append("rect")
        .attr("width",0)
        .attr("height", height/2*0.9)
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("fill",red)
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .attr("width",function(d){
            return scaleSal(d);
        });

    bar2m.append("text")
        .attr("x", function(d){
            return scaleSal(d)+5;
        })
        .attr("y", height/2*0.9 - 10)
        .attr("fill","white")
        .attr("font-family","sans-serif")
        .style("letter-spacing", "0.1em")
        .attr("font-size","15px")
        .attr("text-anchor","start")
        .text(function(d){return d+" €";})
        .transition()
        .duration(2000)
        .delay(2000)
        .attr("fill","black");

});
