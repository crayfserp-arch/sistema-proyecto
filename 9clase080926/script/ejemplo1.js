//Crear un programa que gestione una lista de tareas
//debe permitir:
// 1. Agregar una tarea
// 2. Eliminar una tarea
// 3. Mostrar todas las tareas
// 4. Marcar una tarea completada
// 5. Mostrar las tareas incompletas

// Lista de tareas
let tareas = [];
function agregarTarea(tarea="",estado="Incompleto"){
    if (tarea === "") {
        tarea = document.getElementById("tarea").ariaValueMax;
        estado = document.getElementById("tareaSelect").ariaValueMax;
    }
    tareas.push({descripcion: tarea, completada: estado  });
}
function eliminarTarea(indice){
    if (indice >= 0 && indice < tareas.length){
        tareas.splice(indice,1);
    } else {
        console.log("indice invalido");
    }
}
function mostrarTareas (){
    console.log("Mostrando lista de tareas:"); 
    tareas.forEach((tareas, indice) => {
        console.log(indice+1,"[",tareas.completada? 'Completo':'incompleto',"]",tareas.descripcion);//´// ${indice + 1}. [${tareas.completada ? true : ' '}].${tareas.descripcion}´);
        });
    }

    // adicionar las tareas
    agregarTarea("Comprar leche");
    agregarTarea("Hacer ejercicio");
    agregarTarea("Estudiar Javascript");
    agregarTarea("Subir a GitHub");
    mostrarTareas();