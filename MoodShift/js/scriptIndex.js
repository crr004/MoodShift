document.addEventListener('DOMContentLoaded', function () {

    var valor = localStorage.getItem("estadoAnimoAnalizado");

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })

    // Obtener el botón "Cambiar Estado" y el párrafo "Estado Actual"
    const botonCE = document.getElementById('botonCE');
    const parrafoEA = document.getElementById('parrafoEA');

    if(valor === "true") {
        botonCE.disabled = false;
        var estadoInicial = localStorage.getItem("estadoAnimoInicial");
        parrafoEA.textContent = 'Estado de ánimo actual: ' + estadoInicial;
    }

    botonCE.addEventListener('click', function () {
        var estadoFinal = estadosFinales[Math.floor(Math.random() * estadosFinales.length)];
        parrafoEA.textContent = 'Estado de ánimo actual: ' + estadoFinal;
        localStorage.setItem("estadoAnimoInicial", estadoFinal);
        localStorage.clear();
    });


    // Obtener elementos por su ID
    var headerRetoElement = document.getElementById('headerReto');
    var parrafoRetoElement = document.getElementById('parrafoReto');

    // Escoger un reto al azar del vector de retos
    var indiceRetoAleatorio = Math.floor(Math.random() * retosDiarios.length);
    var retoSeleccionado = retosDiarios[indiceRetoAleatorio];

    // Actualizar el contenido de los elementos con la descripción y el reto seleccionado
    headerRetoElement.textContent = retoSeleccionado.descripcion;
    parrafoRetoElement.textContent = retoSeleccionado.reto;
    // Obtener el botón y el párrafo de reto completado:
    const botonReto = document.getElementById('botonReto');
    const parrafoRetoCompletado = document.getElementById('parrafoRetoCompletado');

    botonReto.addEventListener('click', function () {
        // Reproducir un sonido
        var sonido = new Audio('res/retoCompletado.wav');
        sonido.play();
        // Deshabilitar el botón
        botonReto.disabled = true;
        parrafoRetoCompletado.textContent = '¡Reto completado! Espera a mañana para un nuevo reto.';
    });
});

var estadosFinales = [
    "Feliz", "Motivado", "Satisfecho", "Optimista", "Entusiasmado", "Tranquilo",
    "Energizado", "Aliviado", "Relajado", "Calmo", "Decidido", "Motivado",
    "Conectado", "Seguro", "Comprometido", "Esperanzado", "Energizado", "Aliviado",
    "Relajado", "Calmo", "Decidido", "Motivado", "Conectado", "Seguro",
    "Comprometido", "Esperanzado"
];

var retosDiarios = [
    {
        reto: "Reto: Sonríe a un desconocido",
        descripcion: "Una sonrisa es un gesto universal que puede romper barreras y crear una sensación de conexión entre personas, incluso si son desconocidas. Puede ayudar a establecer un sentido de comunidad y camaradería. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Hacer una buena acción",
        descripcion: "Realizar una buena acción puede tener un impacto positivo en la vida de los demás y en la nuestra propia. Puede ser algo tan simple como ayudar a alguien a llevar sus bolsas de compras o dar un cumplido sincero. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Aprender algo nuevo",
        descripcion: "El aprendizaje continuo es fundamental para el crecimiento personal y profesional. Dedica tiempo hoy a aprender algo nuevo, ya sea leyendo un libro, viendo un video educativo o practicando una habilidad que siempre has querido desarrollar. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Salir de tu zona de confort",
        descripcion: "La vida está llena de oportunidades para crecer y expandir nuestros límites. Hoy, haz algo que te haga sentir un poco incómodo o desafiado. Puede ser iniciar una conversación con alguien nuevo, probar un nuevo deporte o realizar una presentación en público. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Practicar la gratitud",
        descripcion: "Cada día está lleno de cosas por las que podemos estar agradecidos, desde las pequeñas alegrías hasta las bendiciones más grandes. Toma un momento para reflexionar sobre lo que te hace sentir agradecido hoy y expresa tu gratitud de alguna manera. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Hacer ejercicio",
        descripcion: "El ejercicio físico es esencial para mantener un cuerpo y una mente saludables. Dedica tiempo hoy a hacer ejercicio, ya sea caminando, corriendo, haciendo yoga o cualquier otra actividad que disfrutes. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Desconectar de la tecnología",
        descripcion: "En un mundo cada vez más conectado digitalmente, es importante tomarse un tiempo para desconectar y estar presentes en el momento. Dedica al menos una hora hoy a alejarte de los dispositivos electrónicos y disfrutar del mundo que te rodea. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Compartir una comida con alguien",
        descripcion: "Compartir una comida con amigos, familiares o colegas es una oportunidad para conectar y disfrutar de buenos momentos juntos. Invita a alguien a almorzar o cena hoy y disfruta de una conversación significativa. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Cuidar del medio ambiente",
        descripcion: "Todos podemos hacer nuestra parte para cuidar del medio ambiente y proteger nuestro planeta. Dedica tiempo hoy a realizar una acción ecológica, como reciclar, reducir el consumo de plástico o plantar un árbol. Cuando cumplas el reto, pulsa el botón."
    },
    {
        reto: "Reto: Meditar o practicar la atención plena",
        descripcion: "La meditación y la atención plena son prácticas poderosas para calmar la mente, reducir el estrés y cultivar la paz interior. Dedica tiempo hoy a meditar o practicar la atención plena, enfocándote en el momento presente y dejando ir los pensamientos preocupantes. Cuando cumplas el reto, pulsa el botón."
    }
];
