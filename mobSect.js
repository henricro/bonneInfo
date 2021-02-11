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

$("#s1").find(".sectName").html(s1 + " - " + s1);
$("#s2").find(".sectName").html(s2 + " - " + s2);
$("#s3").find(".sectName").html(s3 + " - " + s3);
$("#s4").find(".sectName").html(s4 + " - " + s4);
$("#s5").find(".sectName").html(s5 + " - " + s5);
$("#s6").find(".sectName").html(s6 + " - " + s6);


// SALAIRE

    var s1sal = data.filter(element => element.ROME==s1).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s2sal = data.filter(element => element.ROME==s2).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s3sal = data.filter(element => element.ROME==s3).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s4sal = data.filter(element => element.ROME==s4).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s5sal = data.filter(element => element.ROME==s5).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    var s6sal = data.filter(element => element.ROME==s6).filter(element => element.DEP ==dep)[0].SALAIRE_MOYEN_A;
    
    $("#s1").find(".values").find(".sal").find(".val").html(s1sal + " €/an");
    $("#s2").find(".values").find(".sal").find(".val").html(s2sal + " €/an");
    $("#s3").find(".values").find(".sal").find(".val").html(s3sal + " €/an");
    $("#s4").find(".values").find(".sal").find(".val").html(s4sal + " €/an");
    $("#s5").find(".values").find(".sal").find(".val").html(s5sal + " €/an");
    $("#s6").find(".values").find(".sal").find(".val").html(s6sal + " €/an");

// TENSIONS

    var s1tens = data.filter(element => element.ROME==s1).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s2tens = data.filter(element => element.ROME==s2).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s3tens = data.filter(element => element.ROME==s3).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s4tens = data.filter(element => element.ROME==s4).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s5tens = data.filter(element => element.ROME==s5).filter(element => element.DEP ==dep)[0].TENSIONS;
    var s6tens = data.filter(element => element.ROME==s6).filter(element => element.DEP ==dep)[0].TENSIONS;
    
    $("#s1").find(".values").find(".tension").find(".val").html(s1tens);
    $("#s2").find(".values").find(".tension").find(".val").html(s2tens);
    $("#s3").find(".values").find(".tension").find(".val").html(s3tens);
    $("#s4").find(".values").find(".tension").find(".val").html(s4tens);
    $("#s5").find(".values").find(".tension").find(".val").html(s5tens);
    $("#s6").find(".values").find(".tension").find(".val").html(s6tens);
    
// PROBA

    var s1proba = data.filter(element => element.ROME==s1).filter(element => element.DEP ==dep)[0].PROBA;
    var s2proba = data.filter(element => element.ROME==s2).filter(element => element.DEP ==dep)[0].PROBA;
    var s3proba = data.filter(element => element.ROME==s3).filter(element => element.DEP ==dep)[0].PROBA;
    var s4proba = data.filter(element => element.ROME==s4).filter(element => element.DEP ==dep)[0].PROBA;
    var s5proba = data.filter(element => element.ROME==s5).filter(element => element.DEP ==dep)[0].PROBA;
    var s6proba = data.filter(element => element.ROME==s6).filter(element => element.DEP ==dep)[0].PROBA;
    
    $("#s1").find(".values").find(".proba").find(".val").html(s1proba + " %");
    $("#s2").find(".values").find(".proba").find(".val").html(s2proba + " %");
    $("#s3").find(".values").find(".proba").find(".val").html(s3proba + " %");
    $("#s4").find(".values").find(".proba").find(".val").html(s4proba + " %");
    $("#s5").find(".values").find(".proba").find(".val").html(s5proba + " %");
    $("#s6").find(".values").find(".proba").find(".val").html(s6proba + " %");

});    



/////////////


