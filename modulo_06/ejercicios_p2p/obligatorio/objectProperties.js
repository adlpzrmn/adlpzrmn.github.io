
function propertiesPrint (objectName){

  if (! objectName typeof Object) {


  }


       var currentProperty;
       var propertiesTable = document.getElementById("propertiesTable")




for (currentProperty in objectName){   //cada iteración genera una fila de la tabla

    if ( currentProperty typeof Object) {

var div

    } else {
  propertiesTable.innerHTML+="<tr><td>"+i+"</td><td> = "+objectName[i]+"</td></tr>";
}
}


}






// PROBLEMA: prompt trae el valor como un string, por eso === (identidad extricta o fuerte) considera que el string "1" y el número 1 son distintos.
// SOLUCION: USara == (Identidad débil) o convertir el string a número.
// La conversión no se puede hacer directamente después del prompt, por si el usuario mete un valor que no parsee con un número.
// Debo hacerlo por ejemplo en la comparación.
// Por otro lado en este caso la identidad débil == funcionaría bastante bien, pero como está desaconsejada, no la voy a usar.
var numeroAdivinado = prompt("Introduce un número del 1 al 3, ambos inclusives:\n\n(輸入一個數字從1至3個，包括兩端:)");
var numeroAleatorio = num();
var numerosPermitidos = [1, 2, 3];
var numerosPermitidosAsString = numerosPermitidos.valueOf();
var encontrado = false;
var numeroAdivinadoAsNumber;
if (isNaN(numeroAdivinado) || numeroAdivinado.trim() === "") {
    var mensajeError = "<h3 class=error>Debe introducir un número.</h3> <br> <h3 class=error>Los únicos números permitidos son: " + numerosPermitidosAsString + ".</h3>";
    document.write(mensajeError);
} else {
    numeroAdivinadoAsNumber = +numeroAdivinado;
    for (var i = 0; i < numerosPermitidos.length && !encontrado; i++) {
        // NOTA: Realizo la conversión del string a número
        encontrado = numerosPermitidos[i] === numeroAdivinadoAsNumber;
    };
    if (!encontrado) {
        var mensajeError = "<h3 class=error>Debe introducir un número permitido.</h3> <br> <h3 class=error>Los únicos números permitidos son: " + numerosPermitidosAsString + ".</h3>";
        document.write(mensajeError);
    } else if (numeroAdivinadoAsNumber === numeroAleatorio) {
        var mensajeError = "<h3>Correcto.</h3>"
        document.write(mensajeError);
    } else {
        var mensajeError = "<h3>Lo siento el número era " + numeroAleatorio + "</h3>";
        document.write(mensajeError);
    }
}

function num() {
    return Math.ceil(Math.random() * 3);
}