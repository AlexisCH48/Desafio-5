// variables Datos Personales//
var nombre = prompt("Ingrese Nombre del Alumno","Nombre"); 
var carrera = prompt("Ingrese Nombre de la Carrera","Carrera");
//datos ramo 1 y notas//
var ramo1 = prompt("Ingrese el Nombre del Ramo","Ramo 1");
var nota1ramo1 = prompt("ingrese la nota 1","0");
var nota2ramo1 = prompt("ingrese la nota 2","0");
var nota3ramo1 = prompt("ingrese la nota 3","0");
var promedioramo1 = (parseFloat(nota1ramo1)+parseFloat(nota2ramo1)+parseFloat(nota3ramo1))/3;
//datos ramo 2 y notas//
var ramo2 = prompt("Ingrese el Nombre del Ramo","Ramo 2");
var nota1ramo2 = prompt("ingrese la nota 1","0");
var nota2ramo2 = prompt("ingrese la nota 2","0");
var nota3ramo2 = prompt("ingrese la nota 3","0");
var promedioramo2 = (parseFloat(nota1ramo2)+parseFloat(nota2ramo2)+parseFloat(nota3ramo2))/3;
//datos ramo 3 y notas//
var ramo3 = prompt("Ingrese el Nombre del Ramo","Ramo 3");
var nota1ramo3 = prompt("ingrese la nota 1","0",7);
var nota2ramo3 = prompt("ingrese la nota 2","0",5);
var promedioramo3 = prompt("ingrese promedio ramo 3",5);
var nota_aprobar = 3;
var nota3ramo3 = (parseFloat(promedioramo3 * nota_aprobar));
var suma_N1N2 = (parseFloat(nota1ramo3) + parseFloat(nota2ramo3));
var nota_necesaria = (parseFloat(nota3ramo3) - parseFloat(suma_N1N2));

//titulo e imagen//
document.write("<header class='container'>")
document.write("<div class='row'>")        
document.write("<div class='col-6'>")
document.write("<h1>Notas Finales</h1>")
document.write("</div>")
document.write("<div class='col-6'>")
document.write("<img src='assets/img/logo.png' class='rounded float-right' alt='logo.png'>")
document.write("</div>")
document.write("</div>")
document.write("</header>")
//datos alumno//
document.write("<main class='container'>")
document.write("<section class='container text-left'>")
document.write("<div class='row row-col-6'>")
document.write("<h5 class='font-weight-bold'>Alumno :</h5>")
document.write("<p class='pl-3'></p> "+nombre)
document.write("</div>")
document.write("<div class='row row-col-6'>")
document.write("<h5 class='font-weight-bold'>Carrera :</h5>")
document.write("<p class='pl-3'></p> "+carrera)
document.write("</div>")
document.write("</section>")
//tabla de notas//
document.write("<div class= 'table-responsive'>")
document.write("<table class='table text-center'>")
document.write("<thead class='thead-dark'>")
document.write("<tr>")
document.write("<th scope='col'>Ramos</th>")
document.write("<th scope='col'>nota 1</th>")
document.write("<th scope='col'>nota 2</th>")
document.write("<th scope='col'>nota 3</th>")
document.write("<th scope='col'>promedio</th>")
document.write("</tr>")
document.write("</thead>")
document.write("<tbody>")
document.write("<tr>")
//ramo y notas 1//
document.write("<th scope='row'>"+ramo1+"</th>")
document.write("<td>"+nota1ramo1+"</td>")
document.write("<td>"+nota2ramo1+"</td>")
document.write("<td>"+nota3ramo1+"</td>")
document.write("<td>"+promedioramo1+"</td>")
document.write("</tr>")
document.write("<tr>")
//ramo y notas 2//
document.write("<th scope='row'>"+ramo2+"</th>")
document.write("<td>"+nota1ramo2+"</td>")
document.write("<td>"+nota2ramo2+"</td>")
document.write("<td>"+nota3ramo2+"</td>")
document.write("<td>"+promedioramo2+"</td>")
document.write("</tr>")
document.write("<tr>")
//ramo y notas 3//
document.write("<th scope='row'>"+ramo3+"</th>")
document.write("<td>"+nota1ramo3+"</td>")
document.write("<td>"+nota2ramo3+"</td>")
document.write("<td>-</td>")
document.write("<td>-</td>")
document.write("</tr>")
document.write("</tbody>")
document.write("</table>")
document.write("</div>")
//nota y promedio faltante//
document.write("<div class='container'>")
document.write("<h5>Para aporbar el ramo "+ramo3+" con nota "+nota_necesaria+", es necesiro obtener un "+promedioramo3+" en la nota 3</h5>")
document.write("</div>")
document.write("</main>")

                
            
            
                

   







