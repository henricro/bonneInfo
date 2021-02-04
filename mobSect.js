var rawbase = 'https://raw.githubusercontent.com/';

var jsonloc = 'henricro/bonneInfo/main/simulDataBonneInfo.json';

var indRome = "A1101";

var dep = "01";

var myColor = d3.scaleLinear().domain([1,100])
  .range(["white", "blue"]);

$.getJSON(rawbase + jsonloc, function( data ) {

    console.log(data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0]);
    
    var s1 =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0][1];
    var s2 =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0][2];
    var s3 =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0][3];
    var s4 =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0][4];
    var s5 =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0][5];
    var s6 =  data.filter(element => element.ROME ==indRome).filter( element => element.DEP ==dep)[0][6];

// NOM DU DEPT

/*
var s1nom = data.filter(element => element.ROME==s1).filter(element => element.DEP ==dep)[0].NOM;
var s2nom = data.filter(element => element.ROME==s2).filter(element => element.DEP ==dep)[0].NOM;
var s3nom = data.filter(element => element.ROME==s3).filter(element => element.DEP ==dep)[0].NOM;
var s4nom = data.filter(element => element.ROME==s4).filter(element => element.DEP ==dep)[0].NOM;
var s5nom = data.filter(element => element.ROME==s5).filter(element => element.DEP ==dep)[0].NOM;
var s6nom = data.filter(element => element.ROME==s6).filter(element => element.DEP ==dep)[0].NOM;
*/

$("#s1").find(".sectName").html(s1);
$("#s2").find(".sectName").html(s2);
$("#s3").find(".sectName").html(s3);
$("#s4").find(".sectName").html(s4);
$("#s5").find(".sectName").html(s5);
$("#s6").find(".sectName").html(s6);


// SALAIRE

    var s1sal = data.filter(element => element.ROME==s1).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s2sal = data.filter(element => element.ROME==s2).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s3sal = data.filter(element => element.ROME==s3).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s4sal = data.filter(element => element.ROME==s4).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s5sal = data.filter(element => element.ROME==s5).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s6sal = data.filter(element => element.ROME==s6).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    
    $("#s1").find(".sal").find(".Val").html(s1sal + " €");
    $("#s2").find(".sal").find(".Val").html(s2sal + " €");
    $("#s3").find(".sal").find(".Val").html(s3sal + " €");
    $("#s4").find(".sal").find(".Val").html(s4sal + " €");
    $("#s5").find(".sal").find(".Val").html(s5sal + " €");
    $("#s6").find(".sal").find(".Val").html(s6sal + " €");

// TENSIONS

    var s1tens = data.filter(element => element.ROME==s1).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s2tens = data.filter(element => element.ROME==s2).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s3tens = data.filter(element => element.ROME==s3).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s4tens = data.filter(element => element.ROME==s4).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s5tens = data.filter(element => element.ROME==s5).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s6tens = data.filter(element => element.ROME==s6).filter(element => element.DEP ==dep)[0].TENSIONS;
    
    $("#s1").find(".tension").find(".Val").html(s1tens);
    $("#s2").find(".tension").find(".Val").html(s2tens);
    $("#s3").find(".tension").find(".Val").html(s3tens);
    $("#s4").find(".tension").find(".Val").html(s4tens);
    $("#s5").find(".tension").find(".Val").html(s5tens);
    $("#s6").find(".tension").find(".Val").html(s6tens);
    
// PROBA

    var s1proba = data.filter(element => element.ROME==s1).filter(element => element.DEP ==dep)[0].PROBA;
    var s2proba = data.filter(element => element.ROME==s2).filter(element => element.DEP ==dep)[0].PROBA;
    var s3proba = data.filter(element => element.ROME==s3).filter(element => element.DEP ==dep)[0].PROBA;
    var s4proba = data.filter(element => element.ROME==s4).filter(element => element.DEP ==dep)[0].PROBA;
    var s5proba = data.filter(element => element.ROME==s5).filter(element => element.DEP ==dep)[0].PROBA;
    var s6proba = data.filter(element => element.ROME==s6).filter(element => element.DEP ==dep)[0].PROBA;
    
    $("#s1").find(".proba").find(".Val").html(s1proba);
    $("#s2").find(".proba").find(".Val").html(s2proba);
    $("#s3").find(".proba").find(".Val").html(s3proba);
    $("#s4").find(".proba").find(".Val").html(s4proba);
    $("#s5").find(".proba").find(".Val").html(s5proba);
    $("#s6").find(".proba").find(".Val").html(s6proba);

});    


$(".sal").find(".Title").html("Salaire Moyen");
$(".tension").find(".Title").html("Niveau de tensions");
$(".proba").find(".Title").html("Probabilité de retour à l'emploi");

/////////////

var cont0=d3.select("#cont0");

cont0
    .selectAll(".box")
