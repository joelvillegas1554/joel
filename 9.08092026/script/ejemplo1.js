alert("bienvenido waaaaaaaaaaaaaaaaaaaaa");
let tareas = [];
function agregarTareas(tarea="",estado="Incompleto") {
    if(tarea === ""){
    tarea = document.getElementById("tarea").value;
    estado= document.getElementById("tareaSelect").value;
    }
    tareas.push({ descripcion: tarea, completada:estado});
    
}
function eliminarTareas(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
    }else{
        console.log("Indice invalido");
    }
}
function mostrarTareas(){
    console.log("Mostrando Lista de tareas:");
const contenedor = document.getElementById("respuestas");
let respuestasHtml = "";
tareas.forEach((tarea, index) => {
    console.log(`Tarea ${index + 1},[${tarea.completada}]: ${tarea.descripcion}`);
    respuestaHtml = `<ul>`;
    respuestaHtml += `<li>Tarea ${index + 1},[${tarea.completada}]: ${tarea.descripcion}</li>`;
    respuestaHtml += `</ul>`;
    respuestasHtml += respuestaHtml;

    });
 document.getElementById("respuesta").innerHTML = respuestasHtml;
}
//Adicionar las tareas
agregarTareas("Comprar leche","Completado");
agregarTareas("Hacer ejercicio","Completado");
agregarTareas("Estudiar JavaScript","Incompleto");
agregarTareas("Subir a GitHub","Incompleto");
mostrarTareas();