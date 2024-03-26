document.addEventListener('DOMContentLoaded', function() {
    // Obtener el párrafo "Estado Analizado" y el botón "Analizar"
    const parrafoAEA = document.getElementById('parrafoAEA');
    const botonAnalizar = document.getElementById('botonAnalizar');

    // Obtener el input de tipo file y el párrafo para mostrar el nombre del archivo
    const fileNameDisplay = document.getElementById('fileName');
    const inputArchivo = document.getElementById('image-upload');

    // Función para mostrar el nombre del archivo seleccionado
    inputArchivo.addEventListener('change', function() {
        const file = this.files[0];

        if (file) {
            const fileName = file.name;
            fileNameDisplay.textContent = `Archivo subido: ${fileName}`;
        } else {
            fileNameDisplay.textContent = 'No se ha subido ningún archivo.';
        }
    });

    // Función para cambiar el estado de ánimo detectado
    botonAnalizar.addEventListener('click', function() {
        if (fileNameDisplay.textContent.startsWith('Archivo subido:')) {
            var enlace = document.createElement("a");
            enlace.href = 'index.html';
            enlace.textContent = '  !Cámbialo!';
            var estadoInicial = estadosIniciales[Math.floor(Math.random() * estadosIniciales.length)];
            localStorage.setItem("estadoAnimoInicial", estadoInicial);
            parrafoAEA.textContent = 'Estado de ánimo detectado: ' + estadoInicial;
            localStorage.setItem("estadoAnimoAnalizado", "true");
            parrafoAEA.appendChild(enlace);
        } else {
            parrafoAEA.textContent = 'No se ha subido ninguna foto.';
        }
    });
});

var estadosIniciales = [
    "Triste", "Deprimido", "Aglutinado", "Desesperanzado", "Aburrido", "Irritado", 
    "Cansado", "Preocupado", "Estresado", "Nervioso", "Indeciso", "Desanimado", 
    "Solitario", "Inseguro", "Desinteresado", "Pesimista", "Cansado", "Preocupado", 
    "Estresado", "Nervioso", "Indeciso", "Desanimado", "Solitario", "Inseguro", 
    "Desinteresado", "Pesimista"
];
