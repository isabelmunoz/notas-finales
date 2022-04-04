var html_nota1 = document.getElementById("html_nota1");
var html_nota2 = document.getElementById("html_nota2");
var html_nota3 = document.getElementById("html_nota3");
var html_promedio = document.getElementById("html_promedio");

var css_nota1 = document.getElementById("css_nota1");
var css_nota2 = document.getElementById("css_nota2");
var css_nota3 = document.getElementById("css_nota3");
var css_promedio = document.getElementById("css_promedio");

var js_nota1 = document.getElementById("js_nota1");
var js_nota2 = document.getElementById("js_nota2");
var js_nota3 = document.getElementById("js_nota3");
var js_promedio = document.getElementById("js_promedio");



var h_n1= parseFloat(prompt("Ingrese nota 1 [HTML]:"));
html_nota1.innerHTML = h_n1;
var h_n2= parseFloat(prompt("Ingrese nota 2 [HTML]:"));
html_nota2.innerHTML = h_n2;
var h_n3= parseFloat(prompt("Ingrese nota 3 [HTML]:"));
html_nota3.innerHTML = h_n3;
var h_promedio=(h_n1+h_n2+h_n3)/3;
html_promedio.innerHTML = h_promedio;



var c_n1= parseFloat(prompt("Ingrese nota 1 [CSS]:"));
css_nota1.innerHTML = c_n1;
var c_n2= parseFloat(prompt("Ingrese nota 2 [CSS]:"));
css_nota2.innerHTML = c_n2;
var c_n3= parseFloat(prompt("Ingrese nota 3 [CSS]:"));
css_nota3.innerHTML = c_n3;
var c_promedio=(c_n1+c_n2+c_n3)/3;
css_promedio.innerHTML = c_promedio;


var j_n1= parseFloat(prompt("Ingrese nota 1 [JS]:"));
js_nota1.innerHTML = j_n1;
var j_n2= parseFloat(prompt("Ingrese nota 2 [JS]:"));
js_nota2.innerHTML = j_n2;
var j_n3= parseFloat(prompt("Ingrese nota 3 [JS]:"));
js_nota3.innerHTML = j_n3;
var j_promedio=(j_n1+j_n2+j_n3)/3;
js_promedio.innerHTML = j_promedio;