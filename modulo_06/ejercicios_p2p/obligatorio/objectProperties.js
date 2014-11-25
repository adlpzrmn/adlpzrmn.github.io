function onchangeObjectName() {
    var userMessage = document.getElementById("userMessage");
    userMessage.style.display = 'none';
    var propertiesList = document.getElementById("propertiesList");
    propertiesList.style.display = 'none';
}

function propertiesPrint(objectName) {
        //alert('objectProperties.propertiesPrint() -> INICIO.');
        var objeto = window[objectName];
        if ('object' !== typeof objeto) {
            var userMessageInline = document.getElementById("userMessageInline");
            userMessageInline.innerHTML = "El elemento introducido no es un objeto del DOM.";
            var userMessage = document.getElementById("userMessage");
            userMessage.style.display = 'block';
            return;
        }
        var currentProperty;
        var propertiesTable = document.getElementById("propertiesTable")
        var currentPropertyValue;
        for (currentProperty in objeto) { //cada iteración genera una fila de la tabla
            var currentPropertyTypeof = typeof objeto[currentProperty];
            if ('object' === currentPropertyTypeof) {
                currentPropertyValue = 'Es un objeto no imprimible'
            } else if ('function' === currentPropertyTypeof) {
                currentPropertyValue = 'Es una función no imprimible'
            } else {
                currentPropertyValue = objeto[currentProperty]
            }
            propertiesTable.innerHTML += "<tr><td>" + currentProperty + "</td><td> = " + currentPropertyValue + "</td></tr>";
        }
        var propertiesList = document.getElementById("propertiesList")
        propertiesList.style.display = 'block';
    }
