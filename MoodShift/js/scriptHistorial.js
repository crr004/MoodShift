document.addEventListener('DOMContentLoaded', function () {
    agregarFilasAleatoriasATabla();
});

// Función para añadir 7 filas aleatorias a la tabla:
function agregarFilasAleatoriasATabla() {
    var tablaBody = document.querySelector("#tablaHistorial tbody");

    console.log(tablaBody);

    // Seleccionar aleatoriamente 7 registros del historial
    var registrosAleatorios = [];
    var cantidadRegistros = historialDatos.length;
    var indicesSeleccionados = [];

    while (registrosAleatorios.length < 7) {
        var indiceAleatorio = Math.floor(Math.random() * cantidadRegistros);

        // Verificar si el índice ya ha sido seleccionado para evitar duplicados
        if (!indicesSeleccionados.includes(indiceAleatorio)) {
            indicesSeleccionados.push(indiceAleatorio);
            registrosAleatorios.push(historialDatos[indiceAleatorio]);
        }
    }

    // Agregar los registros aleatorios a la tabla
    registrosAleatorios.forEach(function(registro) {
        var fila = document.createElement("tr");

        var columnaEstadoInicial = document.createElement("td");
        columnaEstadoInicial.textContent = registro.estadoInicial;

        var columnaEstadoFinal = document.createElement("td");
        columnaEstadoFinal.textContent = registro.estadoFinal;

        var columnaFecha = document.createElement("td");
        columnaFecha.textContent = registro.fecha;

        var iconoEliminar = document.createElement('button');
        iconoEliminar.innerHTML = '<button class="botonBorrarFila" onclick="borrarFila(this)"><i class="fa fa-trash"></i></button>';

        fila.appendChild(columnaEstadoInicial);
        fila.appendChild(columnaEstadoFinal);
        fila.appendChild(columnaFecha);
        fila.appendChild(iconoEliminar);

        tablaBody.appendChild(fila);
    });
}

// Función para borrar fila
function borrarFila(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

var historialDatos = [
    {
        estadoInicial: "Triste",
        estadoFinal: "Feliz",
        fecha: "2024-03-01"
    },
    {
        estadoInicial: "Deprimido",
        estadoFinal: "Motivado",
        fecha: "2024-03-05"
    },
    {
        estadoInicial: "Aglutinado",
        estadoFinal: "Satisfecho",
        fecha: "2024-03-10"
    },
    {
        estadoInicial: "Desesperanzado",
        estadoFinal: "Optimista",
        fecha: "2024-03-15"
    },
    {
        estadoInicial: "Aburrido",
        estadoFinal: "Entusiasmado",
        fecha: "2024-03-20"
    },
    {
        estadoInicial: "Irritado",
        estadoFinal: "Tranquilo",
        fecha: "2024-03-25"
    },
    {
        estadoInicial: "Cansado",
        estadoFinal: "Energizado",
        fecha: "2024-04-01"
    },
    {
        estadoInicial: "Preocupado",
        estadoFinal: "Aliviado",
        fecha: "2024-04-05"
    },
    {
        estadoInicial: "Estresado",
        estadoFinal: "Relajado",
        fecha: "2024-04-10"
    },
    {
        estadoInicial: "Nervioso",
        estadoFinal: "Calmo",
        fecha: "2024-04-15"
    },
    {
        estadoInicial: "Indeciso",
        estadoFinal: "Decidido",
        fecha: "2024-04-20"
    },
    {
        estadoInicial: "Desanimado",
        estadoFinal: "Motivado",
        fecha: "2024-04-25"
    },
    {
        estadoInicial: "Solitario",
        estadoFinal: "Conectado",
        fecha: "2024-04-30"
    },
    {
        estadoInicial: "Inseguro",
        estadoFinal: "Seguro",
        fecha: "2024-05-05"
    },
    {
        estadoInicial: "Desinteresado",
        estadoFinal: "Comprometido",
        fecha: "2024-05-10"
    },
    {
        estadoInicial: "Pesimista",
        estadoFinal: "Esperanzado",
        fecha: "2024-05-15"
    },
    {
        estadoInicial: "Cansado",
        estadoFinal: "Energizado",
        fecha: "2024-04-01"
    },
    {
        estadoInicial: "Preocupado",
        estadoFinal: "Aliviado",
        fecha: "2024-04-05"
    },
    {
        estadoInicial: "Estresado",
        estadoFinal: "Relajado",
        fecha: "2024-04-10"
    },
    {
        estadoInicial: "Nervioso",
        estadoFinal: "Calmo",
        fecha: "2024-04-15"
    },
    {
        estadoInicial: "Indeciso",
        estadoFinal: "Decidido",
        fecha: "2024-04-20"
    },
    {
        estadoInicial: "Desanimado",
        estadoFinal: "Motivado",
        fecha: "2024-04-25"
    },
    {
        estadoInicial: "Solitario",
        estadoFinal: "Conectado",
        fecha: "2024-04-30"
    },
    {
        estadoInicial: "Inseguro",
        estadoFinal: "Seguro",
        fecha: "2024-05-05"
    },
    {
        estadoInicial: "Desinteresado",
        estadoFinal: "Comprometido",
        fecha: "2024-05-10"
    },
    {
        estadoInicial: "Pesimista",
        estadoFinal: "Esperanzado",
        fecha: "2024-05-15"
    },
];
