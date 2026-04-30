// 1. Configuración del texto
const titulo = document.querySelector('.Happy_Birthday');
const texto = "Feliz Cumpleaños Mailov! 🎂";
let i = 0;

function escribirTexto() {
    if (i < texto.length) {
        titulo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribirTexto, 100);
    }
}

// 2. Función del Confeti (lo mantenemos porque se ve genial)
function crearConfeti() {
    const colores = ['#f48fb1', '#c2185b', '#ffeb3b', '#ad1457'];
    for (let j = 0; j < 50; j++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti');
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confeti.style.opacity = Math.random();
        document.body.appendChild(confeti);
    }
}

// 3. NUEVA FUNCIÓN: Chispas de chocolate
function crearChispas() {
    const pastel = document.querySelector('.cake');
    for (let k = 0; k < 20; k++) {
        const chispa = document.createElement('div');
        chispa.classList.add('chispa');
        
        // Mantenemos el ancho igual (0 a 145px)
        chispa.style.left = Math.random() * 145 + "px"; 
        
        // Ajustamos el alto para que solo salgan en la parte superior (0 a 25px)
        chispa.style.top = Math.random() * 15 + "px"; 
        
        chispa.style.animationDelay = Math.random() * 2 + "s";
        pastel.appendChild(chispa);
    }
}

// 4. Ejecutar todo al cargar la página
window.onload = () => {
    escribirTexto();
    crearConfeti();
    crearChispas();
};

// Función para mostrar la carta
const pastel = document.querySelector('.cake');
const carta = document.getElementById('carta');

pastel.onclick = () => {
    carta.classList.add('show');
};

function cerrarCarta() {
    carta.classList.remove('show');
}