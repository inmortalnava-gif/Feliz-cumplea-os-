// 1. Efecto de escritura para el título
const titulo = document.querySelector('.Happy_Birthday');
const texto = "Feliz Cumpleaños Mailov! 🎂";
let i = 0;

function escribirTexto() {
    if (i < texto.length) {
        titulo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribirTexto, 100); // Velocidad (100ms por letra)
    }
}

// 2. Efecto de confeti (liviano para tu PC)
function crearConfeti() {
    const colores = ['#f48fb1', '#c2185b', '#ffeb3b', '#ad1457'];
    
    for (let j = 0; j < 50; j++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti');
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Caída aleatoria
        confeti.style.opacity = Math.random();
        document.body.appendChild(confeti);
    }
}

// Ejecutar todo al cargar la página
window.onload = () => {
    escribirTexto();
    crearConfeti();
};