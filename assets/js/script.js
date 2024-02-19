const listaDeTarea = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const totalTareasCompletas = document.querySelector("#lista")
const contarTareasTotal = document.querySelector("#total")

const homeWorks = [{
        id: '38614',
        name: 'Estudiar',
        state: false
    },
    {
        id: '58930',
        name: 'Cocinar',
        state: true
    },
    {
        id: '89002',
        name: 'Tejer',
        state: false
    },
]

function borrarTarea(id) {
    const index = homeWorks.findIndex((e) => e.id == id);
    homeWorks.splice(index, 1);
    renderHomeworks();
}

function edoTarea(id) {
    const index = homeWorks.findIndex((e) => e.id == id);
    homeWorks[index].state = homeWorks[index].state ? false : true;
    renderHomeworks();
}

function renderHomeworks() {
    let tareaCompleta = 0
    let totalTareas = 0
    let html = ""
    for (let tarea of homeWorks) {
        html += `<li>${tarea.id} &nbsp;&nbsp;&nbsp;&nbsp; ${tarea.name} <input type="checkbox" id="${tarea.id}" onchange="edoTarea(${tarea.id})" ${tarea.state ? "checked=true" : ""} /> <button onclick="borrarTarea(${tarea.id})"> X </button> </li>`;

        totalTareas += 1;

        if (tarea.state == true) {
            tareaCompleta += 1;
        }
    }
    listaDeTarea.innerHTML = html;
    totalTareasCompletas.innerHTML = tareaCompleta
    contarTareasTotal.innerHTML = totalTareas
}


btnAgregar.addEventListener("click", () => {
    generadorId = Date.now()
    const nombreTarea = {
        id: generadorId.toString().slice(-6),
        name: tareaInput.value,
        state: false
    }
    homeWorks.push(nombreTarea)
    tareaInput.value = ""

    renderHomeworks()
})

window.onload = function() {
    renderHomeworks();
};