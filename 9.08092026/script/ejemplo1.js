alert("bienvenido a clases de sistema");
let tareas =[];
function agregarTarea(tarea="", estado="Incompleto"){
    if(tarea===""){
     tarea = document.getElementById("tarea").value;
    estado = document.getElementById("tareaSelect").value;
    }
    tareas.push({descripcion: tarea, completada: false});
}
function eliminarTarea(indice){
    if(indice>= 0 && indice < tareas.length){
        tareas.splice(indice,1);
    }else{
        console.log("indice invalido");
    }
}
function mostrarTareas(){
    console.log(" mostrandolista de tareas:");
    tareas.forEach((tarea, indice)=>{
        console.log(`${indice + 1} . 
            [${tarea.completada ? 'X' : ' '}]     
            ${tarea.descripcion}`);
    });}
agregarTarea("comprar leche","Completado");
agregarTarea("hacer ejercicio","Completado");
agregarTarea("estudiar JavaScript","Incompleto");
agregarTarea("sbir a GitHUb","Incompleto");
mostrarTareas();
