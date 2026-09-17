let personas = [];
function agregarTareas() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;
    if (nombre === "" || apellido === "" || fecha === "") {
        alert("Por favor complete todos los campos");
        return;
    }
    personas.push({
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    });
    let resultado = "";
    personas.forEach((persona, indice) => {
        resultado += `
            ${indice + 1}. <br>
            Nombre: ${persona.nombre}<br>
            Apellido: ${persona.apellido}<br>
            Fecha de nacimiento: ${persona.fecha}<br><br>
        `;
    });
    document.getElementById("respuesta").innerHTML = resultado;
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
}
function eliminarTareas() {
    personas = [];
    document.getElementById("respuesta").innerHTML = "";

}